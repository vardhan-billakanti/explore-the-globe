# Explore The Globe

An interactive 3D WebGL Earth explorer that lets users navigate the globe, discover countries, and view rich geographical, cultural, and historical data in real-time.

## Overview

**Explore The Globe** is a lightweight, high-performance browser application designed to visualize planet Earth in full 3D. Users can rotate, zoom, and inspect sovereign countries with boundary highlighting rendered via GeoJSON datasets. Selecting a country displays comprehensive dossiers covering geography, capitals, culture, cuisine, and national facts.

## Features

- **Interactive 3D WebGL Globe**: Smooth orbital rotation, pan, and zoom controls driven by WebGL and HTML5 Canvas.
- **Dynamic Starfield**: Ambient star background rendered with multi-layered depth.
- **GeoJSON Country Outlines**: Precise vector boundary projection across spherical coordinates.
- **Search & Autocomplete**: Real-time country search with instant camera fly-to animation.
- **Country Data Dossiers**: Curated statistics on capitals, population, languages, landmarks, traditional cuisine, and history.
- **Zero Build Dependencies**: Pure modern JavaScript and CSS running natively in all evergreen browsers.

## Tech Stack

- **Frontend**: HTML5, Vanilla JavaScript (ES6+), Vanilla CSS3
- **Graphics**: WebGL / Canvas 2D
- **Data**: GeoJSON world boundary geometries and curated country datasets

## Architecture

```
User Interaction (Mouse / Touch)
        │
        ▼
   js/globe.js (WebGL Sphere & Raycasting)
        │
        ├─► js/geojson.js (Border Geometries)
        └─► js/data.js (Country Dossiers)
        │
        ▼
   js/app.js (UI Controller & Search Modal)
```

## Project Structure

```
├── index.html        # Main application layout and canvas containers
├── styles.css        # Responsive styling and glassmorphism UI
├── js/
│   ├── app.js        # Event handling, search autocomplete, UI logic
│   ├── globe.js      # 3D spherical rendering, projection, and controls
│   ├── data.js       # Curated country profiles and metadata
│   └── geojson.js    # GeoJSON boundary coordinates
└── .gitignore        # Git ignore rules
```

## Getting Started

### Prerequisites

A modern web browser with WebGL support (Chrome, Firefox, Safari, Edge).

### Installation & Running

1. Clone the repository:
   ```bash
   git clone https://github.com/vardhan-billakanti/explore-the-globe.git
   cd explore-the-globe
   ```

2. Open `index.html` directly in your browser or run a lightweight local static server:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```

3. Navigate to `http://localhost:8000` (or the port specified).

## Security

This project is a client-side static application. It requires no API tokens, external database credentials, or server-side authentication.

## Author

**Billakanti Jaya Vardhan**
- GitHub: [@vardhan-billakanti](https://github.com/vardhan-billakanti)
