/**
 * Explore The Globe - Main Application Controller
 * Handles country interactions, details panel, multi-attribute search, and responsive UX.
 */

import { COUNTRIES, CONTINENTS } from './data.js';
import { GlobeEngine } from './globe.js';

class App {
    constructor() {
        this.countries       = COUNTRIES;
        this.continents      = CONTINENTS;
        this.activeContinent = 'all';
        this.selectedCountry = null;
        this.activeTab       = 'places';

        this._initDOM();
        this._initGlobe();
        this._initEventListeners();
    }

    // ── DOM References ────────────────────────────────────────────────────────

    _initDOM() {
        this.container        = document.getElementById('globe-canvas-container');
        this.searchInput      = document.getElementById('search-input');
        this.autocompleteList = document.getElementById('autocomplete-list');
        this.continentChips   = document.getElementById('continent-chips');
        this.tooltip          = document.getElementById('globe-tooltip');
        this.tooltipFlag      = document.getElementById('tooltip-flag');
        this.tooltipName      = document.getElementById('tooltip-name');

        this.drawer          = document.getElementById('country-drawer');
        this.drawerAccent    = document.getElementById('drawer-accent');
        this.drawerFlag      = document.getElementById('drawer-flag');
        this.drawerName      = document.getElementById('drawer-name');
        this.drawerOfficial  = document.getElementById('drawer-official');

        this.statCapital    = document.getElementById('stat-capital');
        this.statRegion     = document.getElementById('stat-region');
        this.statSubregion  = document.getElementById('stat-subregion');
        this.statPopulation = document.getElementById('stat-population');
        this.statCurrency   = document.getElementById('stat-currency');
        this.statIsoCodes   = document.getElementById('stat-iso-codes');
        this.statLanguages  = document.getElementById('stat-languages');

        this.sectionTabs    = document.querySelectorAll('.section-tab');
        this.sectionContent = document.getElementById('drawer-section-content');
        this.btnCloseDrawer = document.getElementById('btn-close-drawer');

        this.btnZoomIn        = document.getElementById('btn-zoom-in');
        this.btnZoomOut       = document.getElementById('btn-zoom-out');
        this.btnResetView     = document.getElementById('btn-reset-view');
        this.btnRotateToggle  = document.getElementById('btn-rotate-toggle');
        this.btnRandomCountry = document.getElementById('btn-random-country');

        this._renderContinentChips();
    }

    // ── Globe Engine Initialization ───────────────────────────────────────────

    _initGlobe() {
        this.globe = new GlobeEngine(this.container, this.countries, {
            onCountryHover: (country, coords, isVisible) => this._handleHover(country, coords, isVisible),
            onCountrySelect: (country) => this._openPanel(country, false, true)
        });
    }

    // ── Tooltip Handling ──────────────────────────────────────────────────────

    _handleHover(country, coords, isVisible) {
        if (!isVisible || !country || !coords) {
            this._hideTooltip();
            return;
        }

        this.tooltipFlag.textContent = country.flag || '🌐';
        this.tooltipName.textContent = country.name;

        // Position tooltip relative to projected coordinates
        const tooltipW = 160;
        const x = Math.max(12, Math.min(coords.x + 16, window.innerWidth - tooltipW));
        const y = Math.max(12, Math.min(coords.y - 36, window.innerHeight - 50));

        this.tooltip.style.left      = `${x}px`;
        this.tooltip.style.top       = `${y}px`;
        this.tooltip.style.transform = 'none';
        this.tooltip.style.display   = 'flex';
        this.tooltip.classList.add('visible');
    }

    _hideTooltip() {
        this.tooltip.classList.remove('visible');
        this.tooltip.style.display = 'none';
    }

    // ── Country Details Panel ─────────────────────────────────────────────────

    /**
     * Open details panel and populate exact country information.
     *
     * @param {object} country
     * @param {boolean} writeSearchInput  true when triggered via search autocomplete
     * @param {boolean} skipGlobeCall     true when globe already triggered selection
     */
    _openPanel(country, writeSearchInput = false, skipGlobeCall = false) {
        if (!country) return;

        // Immediately replace any previous selection
        this.selectedCountry = country;
        this._hideTooltip();

        if (writeSearchInput) {
            this.searchInput.value = country.name;
        }
        this.autocompleteList.classList.remove('active');

        // Header
        const accent = country.accentColor || '#38b000';
        this.drawerAccent.style.background = `linear-gradient(90deg, ${accent}, #00ff87)`;
        this.drawerFlag.textContent     = country.flag || '🌐';
        this.drawerName.textContent     = country.name || 'Not available';
        this.drawerOfficial.textContent = country.officialName || country.name || 'Not available';

        // Statistics Grid
        this.statCapital.textContent    = country.capital    || 'Not available';
        this.statRegion.textContent     = country.region     || 'Not available';
        this.statSubregion.textContent  = country.subregion  || 'Not available';
        this.statPopulation.textContent = country.population || 'Not available';
        this.statCurrency.textContent   = country.currency   || 'Not available';

        const iso2 = country.iso2 || '-';
        const iso3 = country.id   || '-';
        this.statIsoCodes.textContent   = `${iso2} / ${iso3}`;

        if (Array.isArray(country.languages) && country.languages.length > 0) {
            this.statLanguages.textContent = country.languages.join(', ');
        } else if (country.languages) {
            this.statLanguages.textContent = country.languages;
        } else {
            this.statLanguages.textContent = 'Not available';
        }

        // Render Active Tab Content
        this._renderTabContent(country, this.activeTab);

        // Tell Globe to fly to country if not already initiated by globe click
        if (!skipGlobeCall && this.globe) {
            this.globe.selectCountry(country);
        }

        this.drawer.classList.add('open');
    }

    // ── Tab Content Rendering ─────────────────────────────────────────────────

    _switchTab(tabName) {
        this.activeTab = tabName;
        this.sectionTabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tabName));
        if (this.selectedCountry) {
            this._renderTabContent(this.selectedCountry, tabName);
        }
    }

    _renderTabContent(country, tabName) {
        this.sectionContent.innerHTML = '';

        switch (tabName) {
            case 'places': {
                if (country.places && country.places.length > 0) {
                    country.places.forEach(place => {
                        const card = document.createElement('div');
                        card.className = 'place-card';

                        const imgHtml = place.image
                            ? `<div class="card-img-wrapper">
                                 <img class="card-img" src="${place.image}" alt="${place.name}"
                                      loading="lazy" onerror="this.closest('.card-img-wrapper').innerHTML='<div class=\\'card-placeholder-banner\\'><span class=\\'placeholder-icon\\'>🏛️</span><span class=\\'placeholder-text\\'>${place.name}</span></div>'">
                               </div>`
                            : `<div class="card-img-wrapper">
                                 <div class="card-placeholder-banner">
                                   <span class="placeholder-icon">🏛️</span>
                                   <span class="placeholder-text">${place.name}</span>
                                 </div>
                               </div>`;

                        card.innerHTML = `
                            ${imgHtml}
                            <div class="place-header">
                                <h4 class="place-title">${place.name || 'Historic Landmark'}</h4>
                                <span class="location-badge">${place.location || country.name}</span>
                            </div>
                            <p class="place-desc">${place.description || 'Not available'}</p>
                            ${place.significance ? `<div class="significance-pill">✨ ${place.significance}</div>` : ''}`;
                        this.sectionContent.appendChild(card);
                    });
                } else {
                    this.sectionContent.innerHTML =
                        '<div class="info-fallback">Famous places information coming soon.</div>';
                }
                break;
            }

            case 'food': {
                if (country.foods && country.foods.length > 0) {
                    country.foods.forEach(food => {
                        const card = document.createElement('div');
                        card.className = 'food-card';

                        const imgHtml = food.image
                            ? `<div class="card-img-wrapper">
                                 <img class="card-img" src="${food.image}" alt="${food.name}"
                                      loading="lazy" onerror="this.closest('.card-img-wrapper').innerHTML='<div class=\\'card-placeholder-banner\\'><span class=\\'placeholder-icon\\'>🍜</span><span class=\\'placeholder-text\\'>${food.name}</span></div>'">
                               </div>`
                            : `<div class="card-img-wrapper">
                                 <div class="card-placeholder-banner">
                                   <span class="placeholder-icon">🍜</span>
                                   <span class="placeholder-text">${food.name}</span>
                                 </div>
                               </div>`;

                        card.innerHTML = `
                            ${imgHtml}
                            <div class="food-header">
                                <h4 class="food-title">${food.name || 'Traditional Dish'}</h4>
                                <span class="region-badge">${food.region || country.name}</span>
                            </div>
                            <p class="food-desc">${food.description || 'Not available'}</p>`;
                        this.sectionContent.appendChild(card);
                    });
                } else {
                    this.sectionContent.innerHTML =
                        '<div class="info-fallback">Cuisine information coming soon.</div>';
                }
                break;
            }

            case 'culture': {
                const d = country.cultureDetails;
                if (d) {
                    const grid = document.createElement('div');
                    grid.className = 'culture-grid';
                    grid.innerHTML = `
                        <div class="culture-card">
                            <div class="culture-card-title">🎎 Traditions</div>
                            <div class="culture-card-text">${d.traditions || 'Not available'}</div>
                        </div>
                        <div class="culture-card">
                            <div class="culture-card-title">🎆 Festivals</div>
                            <div class="culture-card-text">${d.festivals || 'Not available'}</div>
                        </div>
                        <div class="culture-card">
                            <div class="culture-card-title">🎨 Arts &amp; Heritage</div>
                            <div class="culture-card-text">${d.arts || 'Not available'}</div>
                        </div>
                        <div class="culture-card">
                            <div class="culture-card-title">🌿 Lifestyle</div>
                            <div class="culture-card-text">${d.lifestyle || 'Not available'}</div>
                        </div>`;
                    this.sectionContent.appendChild(grid);
                } else {
                    this.sectionContent.innerHTML =
                        '<div class="info-fallback">Culture information coming soon.</div>';
                }
                break;
            }

            case 'history': {
                if (country.historyTimeline && country.historyTimeline.length > 0) {
                    const timeline = document.createElement('div');
                    timeline.className = 'history-timeline';
                    country.historyTimeline.forEach(step => {
                        const item = document.createElement('div');
                        item.className = 'timeline-step';
                        item.innerHTML = `
                            <div class="timeline-node"></div>
                            <div class="timeline-era">${step.era || ''}</div>
                            <div class="timeline-period">${step.period || ''}</div>
                            <h4 class="timeline-title">${step.title || ''}</h4>
                            <p class="timeline-desc">${step.description || ''}</p>`;
                        timeline.appendChild(item);
                    });
                    this.sectionContent.appendChild(timeline);
                } else {
                    this.sectionContent.innerHTML =
                        '<div class="info-fallback">Historical timeline coming soon.</div>';
                }
                break;
            }

            case 'facts': {
                if (country.facts && country.facts.length > 0) {
                    country.facts.forEach(fact => {
                        const card = document.createElement('div');
                        card.className = 'fact-card';
                        card.textContent = `💡 ${fact}`;
                        this.sectionContent.appendChild(card);
                    });
                } else {
                    this.sectionContent.innerHTML =
                        '<div class="info-fallback">Facts coming soon.</div>';
                }
                break;
            }
        }
    }

    // ── Continent Chips ───────────────────────────────────────────────────────

    _renderContinentChips() {
        this.continentChips.innerHTML = '';
        this.continents.forEach(c => {
            const chip = document.createElement('button');
            chip.className = `continent-chip ${c.id === this.activeContinent ? 'active' : ''}`;
            chip.textContent = c.name;
            chip.addEventListener('click', () => this._filterByContinent(c));
            this.continentChips.appendChild(chip);
        });
    }

    _filterByContinent(continentObj) {
        this.activeContinent = continentObj.id;
        this._renderContinentChips();
        this.globe.highlightContinent(continentObj.id, continentObj);
    }

    // ── Event Listeners ───────────────────────────────────────────────────────

    _initEventListeners() {
        // Tab buttons
        this.sectionTabs.forEach(tab =>
            tab.addEventListener('click', e => this._switchTab(e.currentTarget.dataset.tab))
        );

        // Search Input
        this.searchInput.addEventListener('input', e => this._handleSearchInput(e.target.value));
        this.searchInput.addEventListener('focus', () => {
            if (this.searchInput.value) this._handleSearchInput(this.searchInput.value);
        });

        // Search Enter Key Selection
        this.searchInput.addEventListener('keydown', e => {
            if (e.key !== 'Enter') return;
            e.preventDefault();
            const q = this.searchInput.value.trim().toLowerCase();
            if (!q) return;

            const match = this._searchCountries(q)[0];
            if (match) {
                this._openPanel(match, true, false);
            }
        });

        // Click Outside Search -> Close Dropdown
        document.addEventListener('click', e => {
            if (!this.searchInput.contains(e.target) && !this.autocompleteList.contains(e.target)) {
                this.autocompleteList.classList.remove('active');
            }
        });

        // Close Details Drawer
        this.btnCloseDrawer.addEventListener('click', () => {
            this.drawer.classList.remove('open');
            this.selectedCountry = null;
            this._hideTooltip();
            this.globe.selectedCountryCode = null;
        });

        // HUD Controls
        this.btnZoomIn.addEventListener('click',  () => this.globe.zoomIn());
        this.btnZoomOut.addEventListener('click', () => this.globe.zoomOut());

        this.btnResetView.addEventListener('click', () => {
            this.selectedCountry = null;
            this.activeContinent = 'all';
            this.searchInput.value = '';
            this.drawer.classList.remove('open');
            this._hideTooltip();
            this._renderContinentChips();
            this.globe.resetView();
        });

        this.btnRotateToggle.addEventListener('click', () => {
            if (this.globe && this.globe.globe) {
                const ctrl = this.globe.globe.controls();
                ctrl.autoRotate = !ctrl.autoRotate;
                this.btnRotateToggle.style.color = ctrl.autoRotate ? '#38b000' : '#94a3b8';
            }
        });

        // Random Country
        this.btnRandomCountry.addEventListener('click', () => {
            const r = this.countries[Math.floor(Math.random() * this.countries.length)];
            this._openPanel(r, false, false);
        });

        // Window resize
        window.addEventListener('resize', () => {
            this.globe.onWindowResize();
        });
    }

    // ── Search Algorithm & Dropdown ───────────────────────────────────────────

    _normalizeStr(str) {
        return (str || '')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .trim();
    }

    _searchCountries(query) {
        const q = this._normalizeStr(query);
        if (!q) return [];

        const scored = [];
        this.countries.forEach(c => {
            const nameNorm = this._normalizeStr(c.name);
            const iso3Norm = this._normalizeStr(c.id);
            const iso2Norm = this._normalizeStr(c.iso2);
            const capNorm  = this._normalizeStr(c.capital);
            const offNorm  = this._normalizeStr(c.officialName);

            let score = 0;
            if (iso3Norm === q) score += 100;
            else if (iso2Norm === q) score += 90;
            else if (nameNorm === q) score += 80;
            else if (nameNorm.startsWith(q)) score += 50;
            else if (capNorm === q) score += 40;
            else if (capNorm.startsWith(q)) score += 30;
            else if (offNorm.startsWith(q)) score += 20;
            else if (nameNorm.includes(q)) score += 15;
            else if (capNorm.includes(q)) score += 10;
            else if (offNorm.includes(q)) score += 5;
            else if (iso3Norm.includes(q)) score += 5;

            if (score > 0) {
                scored.push({ country: c, score });
            }
        });

        scored.sort((a, b) => b.score - a.score);
        return scored.map(s => s.country);
    }

    _handleSearchInput(query) {
        const q = query.trim();
        if (!q) {
            this.autocompleteList.classList.remove('active');
            this.autocompleteList.innerHTML = '';
            return;
        }

        const matches = this._searchCountries(q);
        this.autocompleteList.innerHTML = '';

        if (matches.length === 0) {
            const nf = document.createElement('div');
            nf.className = 'autocomplete-item not-found';
            nf.textContent = 'No countries found';
            this.autocompleteList.appendChild(nf);
            this.autocompleteList.classList.add('active');
            return;
        }

        matches.forEach(country => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.innerHTML = `
                <div class="autocomplete-left">
                    <span class="autocomplete-flag">${country.flag || '🌐'}</span>
                    <div class="autocomplete-info">
                        <span class="autocomplete-name">${country.name}</span>
                        <span class="autocomplete-meta">${country.id} • ${country.capital || country.region}</span>
                    </div>
                </div>`;

            item.addEventListener('click', () => this._openPanel(country, true, false));
            this.autocompleteList.appendChild(item);
        });

        this.autocompleteList.classList.add('active');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
