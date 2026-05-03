📍 Organization Mapping System (Kazakhstan)
🧠 Overview

This project is a full-stack geospatial data visualization system designed to map and analyze organizations across Kazakhstan. It integrates large-scale datasets from multiple sources, processes and merges them using Python, and provides an interactive web interface for visualization and exploration.

The system allows users to explore ~16,000+ organizations on an interactive map with filtering, search, and regional analytics.

🎯 Key Features
Interactive map visualization of organizations across Kazakhstan
Region-based analytics with dynamic pie charts
Search and filtering by:
organization name
BIN
address
region
Clustering and performance optimization for large datasets
Real-time data interaction between frontend and backend
Aggregated statistics per region (total / connected organizations)
🏗️ System Architecture
Data Sources (CSV)
        ↓
Python (Pandas ETL Pipeline)
        ↓
MongoDB Database
        ↓
Node.js (Express API)
        ↓
Frontend (Leaflet.js + HTML/JS)
⚙️ Tech Stack
Backend & Data Processing
Python (Pandas, NumPy)
MongoDB
Node.js (Express.js)
Frontend
JavaScript
Leaflet.js
HTML / CSS
Data Engineering
ETL pipelines
Data cleaning & normalization
Geospatial data processing
📊 Data Processing Pipeline
Merged multiple datasets using BIN as a primary key
Cleaned inconsistent formats (missing zeros, float conversions, duplicates)
Normalized organizational and regional identifiers
Combined administrative, address, and registry data into a unified dataset

Final dataset contains:

Organization metadata
Location data
Administrative hierarchy
Regional classification
🗺️ Visualization Features
Marker-based organization display
Region polygons with hover interaction
Pie charts showing distribution of organizations per region
Dynamic filtering system with instant map updates
🚀 Performance Optimizations
Batch rendering of markers
Caching of map elements
Lazy updates during zoom levels
Reduced DOM re-rendering for large datasets
📦 How to Run
1. Start MongoDB
mongod
2. Load data into database
python database.py
3. Start backend server
node server.js
4. Open frontend
open org_map.html
📈 Dataset Size
~16,000+ organizations
Nationwide coverage (Kazakhstan regions)
Multiple merged administrative datasets
👨‍💻 Author

Abzal Tleules
Computer Science Student
Astana IT University

🔥 Notes

This project was built as a data engineering + full-stack visualization system focusing on:

large-scale data processing
geospatial visualization
backend integration
interactive UI design
⚡ If you want to improve it further

You can later add:

Docker support
deployment (Vercel / Render)
authentication
clustering library (Leaflet.markercluster)
live API instead of local server
