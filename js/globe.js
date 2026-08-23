/**
 * Explore The Globe - High-Performance 3D Globe Engine (globe.gl)
 *
 * Provides:
 * - Exact GeoJSON/TopoJSON country detection and ISO-A3 mapping.
 * - Occlusion / horizon calculation (prevents interacting with countries behind Earth).
 * - Geographic-to-screen coordinate projection for live tooltip tracking.
 * - Non-interactive ocean/base Earth isolation.
 * - Subtle, elegant highlight styling preserving realistic satellite imagery.
 */

import Globe from 'https://cdn.jsdelivr.net/npm/globe.gl/+esm';
import { COUNTRY_ALIASES } from './data.js';

const TOPO_URL     = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
const TOPOJSON_LIB = 'https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js';

export class GlobeEngine {
    constructor(containerElement, countries, options = {}) {
        this.container       = containerElement;
        this.countries       = countries;
        this.onCountrySelect = options.onCountrySelect || (() => {});
        this.onCountryHover  = options.onCountryHover  || (() => {});

        // Selection & hover state (standardized uppercase ISO-A3 strings)
        this.selectedCountryCode = null;
        this.hoveredCountryCode  = null;
        this.hoveredCountryObj   = null;

        // Mouse tracking
        this.mouseX = 0;
        this.mouseY = 0;
        window.addEventListener('mousemove', e => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        }, { passive: true });

        // Index lookup maps for instant, zero-lag country matching
        this._buildLookupMaps();

        // Initialize Globe
        this._initGlobe();
    }

    _buildLookupMaps() {
        this._iso3Map = new Map();
        this._iso2Map = new Map();
        this._nameMap = new Map();

        this.countries.forEach(c => {
            if (c.id)   this._iso3Map.set(c.id.toUpperCase(), c);
            if (c.iso2) this._iso2Map.set(c.iso2.toUpperCase(), c);
            if (c.name) this._nameMap.set(c.name.toUpperCase(), c);
            if (c.officialName) this._nameMap.set(c.officialName.toUpperCase(), c);
        });
    }

    // ── Horizon & Occlusion Check ──────────────────────────────────────────────

    /**
     * Determines whether a geographic coordinate (lat, lng) is currently on the
     * front-facing visible hemisphere relative to the globe camera.
     */
    isLocationVisible(lat, lng) {
        if (!this.globe) return true;
        const camera = this.globe.camera();
        if (!camera) return true;

        const phi   = (90 - lat) * (Math.PI / 180);
        const theta = (lng + 180) * (Math.PI / 180);

        // Unit vector pointing from globe origin to the geographic point
        const px = -Math.sin(phi) * Math.cos(theta);
        const py =  Math.cos(phi);
        const pz =  Math.sin(phi) * Math.sin(theta);

        const camPos = camera.position;
        const camDist = Math.hypot(camPos.x, camPos.y, camPos.z);
        if (camDist === 0) return true;

        // Dot product between surface normal and camera vector
        const dot = (px * camPos.x + py * camPos.y + pz * camPos.z) / camDist;

        // Must be in front of the horizon threshold (with safety margin)
        return dot > 0.12;
    }

    /**
     * Convert geographic coordinates (lat, lng) to screen pixel coordinates (x, y).
     */
    getCountryScreenCoords(lat, lng, altitude = 0.008) {
        if (!this.globe) return null;
        if (typeof this.globe.getScreenCoords === 'function') {
            const sc = this.globe.getScreenCoords(lat, lng, altitude);
            if (sc && sc.x != null && sc.y != null) {
                return sc;
            }
        }

        // Three.js fallback projection
        try {
            const camera   = this.globe.camera();
            const renderer = this.globe.renderer();
            if (camera && renderer) {
                const phi   = (90 - lat) * (Math.PI / 180);
                const theta = (lng + 180) * (Math.PI / 180);
                const r = 100 * (1 + altitude);
                const x = -(r * Math.sin(phi) * Math.cos(theta));
                const y =   r * Math.cos(phi);
                const z =   r * Math.sin(phi) * Math.sin(theta);

                // Simple projection using camera matrix
                const p = { x, y, z };
                const v = new (window.THREE ? window.THREE.Vector3 : Object)(x, y, z);
                if (v.project) {
                    v.project(camera);
                    const dom = renderer.domElement;
                    return {
                        x: ((v.x + 1) * dom.clientWidth) / 2,
                        y: ((-v.y + 1) * dom.clientHeight) / 2
                    };
                }
            }
        } catch (_) {}

        return { x: this.mouseX, y: this.mouseY };
    }

    // ── Polygon Styling ────────────────────────────────────────────────────────

    _featureKey(d) {
        if (!d) return '';
        return d._isoA3 || '';
    }

    _capColor(d) {
        const k = this._featureKey(d);
        if (!k) return 'rgba(0,0,0,0)';
        if (k === this.selectedCountryCode) return 'rgba(0, 255, 135, 0.18)'; // Subtle emerald highlight
        if (k === this.hoveredCountryCode)  return 'rgba(0, 242, 255, 0.14)'; // Subtle cyan hover
        return 'rgba(0,0,0,0)';
    }

    _strokeColor(d) {
        const k = this._featureKey(d);
        if (!k) return 'rgba(255,255,255,0.18)';
        if (k === this.selectedCountryCode) return 'rgba(0, 255, 135, 0.95)';
        if (k === this.hoveredCountryCode)  return 'rgba(0, 242, 255, 0.95)';
        return 'rgba(255,255,255,0.18)';
    }

    // ── Country Lookup ────────────────────────────────────────────────────────

    _findCountry(feature) {
        if (!feature) return null;
        if (feature._country) return feature._country;

        const iso  = (feature._isoA3 || '').toUpperCase();
        const name = (feature._name  || '').toUpperCase();

        if (iso && this._iso3Map.has(iso)) return this._iso3Map.get(iso);
        if (iso && this._iso2Map.has(iso)) return this._iso2Map.get(iso);
        if (name && this._nameMap.has(name)) return this._nameMap.get(name);

        // Check alias mapping
        if (name && COUNTRY_ALIASES[name]) {
            const aliasIso = COUNTRY_ALIASES[name];
            if (this._iso3Map.has(aliasIso)) return this._iso3Map.get(aliasIso);
        }

        // Clean unlisted country fallback
        const displayName = feature._name || feature.properties?.name || iso || 'Territory';
        const stub = {
            id:           iso || displayName.substring(0, 3).toUpperCase(),
            iso2:         displayName.substring(0, 2).toUpperCase(),
            name:         displayName,
            officialName: displayName,
            flag:         '🌐',
            region:       feature.properties?.REGION_UN || feature.properties?.CONTINENT || 'World',
            subregion:    'Not available',
            capital:      'Not available',
            population:   'Not available',
            currency:     'Not available',
            languages:    ['Not available'],
            lat:          feature._lat || 0,
            lng:          feature._lng || 0,
            accentColor:  '#00f2ff',
            _stub:        true
        };
        feature._country = stub;
        return stub;
    }

    // ── Globe Initialization ──────────────────────────────────────────────────

    _initGlobe() {
        this.container.style.background = 'transparent';

        this.globe = Globe()(this.container)
            .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
            .atmosphereColor('#00f2ff')
            .atmosphereAltitude(0.16)
            .polygonsData([])
            .polygonAltitude(0.006)
            .polygonSideColor(() => 'rgba(0,0,0,0)')
            .polygonCapColor(d => this._capColor(d))
            .polygonStrokeColor(d => this._strokeColor(d))
            .polygonLabel(() => '')
            .onPolygonHover(hoverD => this._onHover(hoverD))
            .onPolygonClick(clickedD => this._onClick(clickedD));

        this.globe.pointOfView({ lat: 20, lng: 0, altitude: 2.3 }, 1000);
        
        const ctrl = this.globe.controls();
        ctrl.autoRotate      = true;
        ctrl.autoRotateSpeed = 0.6;
        ctrl.enableDamping   = true;
        ctrl.dampingFactor   = 0.1;

        // Camera movement / rotation listener
        ctrl.addEventListener('change', () => {
            this._onCameraChange();
        });

        // Mouse leave container -> clear hover and tooltip
        this.container.addEventListener('mouseleave', () => {
            if (this.hoveredCountryCode !== null) {
                this.hoveredCountryCode = null;
                this.hoveredCountryObj  = null;
                this.onCountryHover(null, null, false);
            }
        });

        // Touch handling on mobile
        this.container.addEventListener('touchstart', () => {}, { passive: true });

        // Load country polygons asynchronously
        this._loadData();
    }

    _onCameraChange() {
        // If a country is currently hovered, update its projected screen position or hide if occluded
        if (this.hoveredCountryObj) {
            const c = this.hoveredCountryObj;
            if (c.lat != null && c.lng != null && (c.lat !== 0 || c.lng !== 0)) {
                const isVisible = this.isLocationVisible(c.lat, c.lng);
                if (isVisible) {
                    const coords = this.getCountryScreenCoords(c.lat, c.lng);
                    this.onCountryHover(c, coords, true);
                } else {
                    // Country rotated behind horizon
                    this.hoveredCountryCode = null;
                    this.hoveredCountryObj  = null;
                    this.onCountryHover(null, null, false);
                }
            }
        }
    }

    // ── Data Loading & Geometry Centroid Calculation ──────────────────────────

    async _loadData() {
        try {
            if (typeof topojson === 'undefined') {
                await this._loadScript(TOPOJSON_LIB);
            }
            const res = await fetch(TOPO_URL);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const topo = await res.json();

            const features = topojson.feature(topo, topo.objects.countries).features;

            features.forEach(f => {
                const rawName = ((f.properties && f.properties.name) || '').trim();
                const rawUpper = rawName.toUpperCase();
                f._name = rawName;

                // Calculate centroid
                const centroid = this._computeCentroid(f.geometry);
                f._lat = centroid.lat;
                f._lng = centroid.lng;

                // Match against master dataset or aliases
                let matched = null;
                if (rawUpper && this._nameMap.has(rawUpper)) {
                    matched = this._nameMap.get(rawUpper);
                } else if (rawUpper && COUNTRY_ALIASES[rawUpper]) {
                    const aliasCode = COUNTRY_ALIASES[rawUpper];
                    matched = this._iso3Map.get(aliasCode) || null;
                }

                if (matched) {
                    f._isoA3   = matched.id.toUpperCase();
                    f._country = matched;
                    if (!matched.lat || matched.lat === 0) {
                        matched.lat = f._lat;
                        matched.lng = f._lng;
                    }
                } else {
                    f._isoA3 = rawName ? rawName.substring(0, 3).toUpperCase() : `TER_${f.id}`;
                }
            });

            this.geoJsonFeatures = features;
            this.globe.polygonsData(this.geoJsonFeatures);
        } catch (err) {
            console.warn('[GlobeEngine] TopoJSON fetch failed, using fallback:', err.message);
            this._loadFallback();
        }
    }

    _computeCentroid(geometry) {
        if (!geometry || !geometry.coordinates) return { lat: 20, lng: 0 };
        let sumLat = 0;
        let sumLng = 0;
        let count  = 0;

        const extract = (coords) => {
            if (!Array.isArray(coords)) return;
            if (coords.length >= 2 && typeof coords[0] === 'number' && typeof coords[1] === 'number') {
                sumLng += coords[0];
                sumLat += coords[1];
                count++;
            } else {
                coords.forEach(extract);
            }
        };

        extract(geometry.coordinates);
        return count > 0
            ? { lat: sumLat / count, lng: sumLng / count }
            : { lat: 20, lng: 0 };
    }

    _loadScript(url) {
        return new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = url;
            s.onload  = resolve;
            s.onerror = () => reject(new Error('Script load failed: ' + url));
            document.head.appendChild(s);
        });
    }

    _loadFallback() {
        this.geoJsonFeatures = this.countries.map(c => ({
            type: 'Feature',
            id: c.id,
            _isoA3: c.id,
            _name: c.name,
            _lat: c.lat,
            _lng: c.lng,
            _country: c,
            properties: { ISO_A3: c.id, name: c.name },
            geometry: {
                type: 'Polygon',
                coordinates: [[[c.lng - 3, c.lat - 3], [c.lng + 3, c.lat - 3], [c.lng + 3, c.lat + 3], [c.lng - 3, c.lat + 3], [c.lng - 3, c.lat - 3]]]
            }
        }));

        this.globe.polygonsData(this.geoJsonFeatures);
    }

    // ── Raycasting Event Handlers ─────────────────────────────────────────────

    _onHover(hoverD) {
        if (!hoverD) {
            // Hovered over ocean / void -> clear hover immediately
            if (this.hoveredCountryCode !== null) {
                this.hoveredCountryCode = null;
                this.hoveredCountryObj  = null;
                this.onCountryHover(null, null, false);
            }
            return;
        }

        const country = this._findCountry(hoverD);
        if (!country) return;

        const targetLat = country.lat || hoverD._lat || 0;
        const targetLng = country.lng || hoverD._lng || 0;

        // Occlusion check: ignore countries located on the back-side of the Earth
        if (targetLat !== 0 || targetLng !== 0) {
            if (!this.isLocationVisible(targetLat, targetLng)) {
                if (this.hoveredCountryCode !== null) {
                    this.hoveredCountryCode = null;
                    this.hoveredCountryObj  = null;
                    this.onCountryHover(null, null, false);
                }
                return;
            }
        }

        const key = (country.id || hoverD._isoA3 || '').toUpperCase();
        this.hoveredCountryCode = key;
        this.hoveredCountryObj  = country;

        const screenCoords = this.getCountryScreenCoords(targetLat, targetLng);
        this.onCountryHover(country, screenCoords, true);
    }

    _onClick(clickedD) {
        if (!clickedD) return; // Ocean click -> nothing happens

        const country = this._findCountry(clickedD);
        if (!country) return;

        const targetLat = country.lat || clickedD._lat || 0;
        const targetLng = country.lng || clickedD._lng || 0;

        // Do not allow clicking countries that are occluded through the Earth
        if (targetLat !== 0 || targetLng !== 0) {
            if (!this.isLocationVisible(targetLat, targetLng)) {
                return;
            }
        }

        this.selectCountry(country);
    }

    // ── Public API ────────────────────────────────────────────────────────────

    selectCountry(country) {
        if (!country) return;
        this.selectedCountryCode = (country.id || '').toUpperCase();

        if (this.globe) {
            this.globe.controls().autoRotate = false;
            if (country.lat != null && country.lng != null && (country.lat !== 0 || country.lng !== 0)) {
                this.globe.pointOfView(
                    { lat: country.lat, lng: country.lng, altitude: 1.7 },
                    1200
                );
            }
        }

        this.onCountrySelect(country);
    }

    highlightContinent(continentId, continentCoords = null) {
        if (continentId === 'all') {
            this.resetView();
            return;
        }
        if (continentCoords && this.globe) {
            this.globe.controls().autoRotate = false;
            this.globe.pointOfView(
                { lat: continentCoords.lat, lng: continentCoords.lng, altitude: 2.1 },
                1200
            );
        }
    }

    resetView() {
        this.selectedCountryCode = null;
        this.hoveredCountryCode  = null;
        this.hoveredCountryObj   = null;
        if (this.globe) {
            this.globe.controls().autoRotate = true;
            this.globe.pointOfView({ lat: 20, lng: 0, altitude: 2.3 }, 1200);
        }
    }

    zoomIn() {
        if (!this.globe) return;
        const { lat, lng, altitude } = this.globe.pointOfView();
        this.globe.pointOfView({ lat, lng, altitude: Math.max(0.8, altitude - 0.5) }, 600);
    }

    zoomOut() {
        if (!this.globe) return;
        const { lat, lng, altitude } = this.globe.pointOfView();
        this.globe.pointOfView({ lat, lng, altitude: Math.min(3.5, altitude + 0.5) }, 600);
    }

    onWindowResize() {
        if (this.globe && this.container) {
            this.globe.width(this.container.clientWidth);
            this.globe.height(this.container.clientHeight);
        }
    }
}
