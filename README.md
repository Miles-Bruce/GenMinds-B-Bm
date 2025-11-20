# GenMinds - Enterprise Intelligence Asset Management Platform

**GenMinds** is a comprehensive **Enterprise Intelligence Asset Management Platform** designed for organizations to discover, evaluate, manage, and deploy AI intelligence assets at scale.

## What is GenMinds?

GenMinds enables enterprises to:
- **Manage Intelligence Assets**: Create, version, and organize AI prompts, personas, workflows, and blueprints
- **Benchmark AI Performance**: Evaluate and compare AI models across different use cases
- **Build Asset Portfolios**: Package and license collections of intelligence assets
- **Enterprise Analytics**: Track usage, performance metrics, and ROI of AI assets
- **Collaborative Workspaces**: Team-based asset development and approval workflows

## Project Overview

This repository contains the **GenMinds Intelligence Asset Platform** - a full-stack enterprise web application featuring:
- **Frontend React Application**: Modern dashboard for intelligence asset management
- **Backend REST API**: Node.js/Express API for asset data and operations
- **Asset Discovery Interface**: Browse, filter, and search intelligence assets
- **Benchmarking System**: Evaluate AI model performance
- **Portfolio Management**: Organize assets into licensed packages
- **Cloud Deployment**: Production deployment on Google App Engine

## Repository Structure
```
GenMinds-B-Bm/
├── GenMinds-B-Bm/                  # Frontend React Application
│   ├── src/
│   │   ├── components/
│   │   │   ├── HeroSection.tsx     # Landing page hero
│   │   │   ├── PromptCard.tsx      # Asset card display
│   │   │   ├── DashboardLayout.tsx # Main layout
│   │   │   ├── Navigation.tsx      # Site navigation
│   │   │   └── ...
│   │   └── main.tsx
│   └── package.json
│
└── genminds-backend/               # Backend API (Node.js/Express)
    ├── server.js                   # Express server
    ├── app.yaml                    # App Engine deployment
    └── package.json
```

## Core Features

### Intelligence Asset Management
- Create and manage AI prompts, personas, workflows, and blueprints
- Version control for intelligence assets
- Tagging, categorization, and metadata management
- Asset cloning and templating

### Benchmarking & Evaluation
- Compare AI model performance (GPT-4, Claude, Gemini, etc.)
- Run automated benchmarks on intelligence assets
- Historical performance tracking
- Model recommendation engine

### Portfolio & Licensing
- Package assets into licensed portfolios
- Support for Open, Paid, Enterprise, and Restricted licenses
- Pricing management and distribution

### Enterprise Features
- Multi-workspace collaboration
- Role-based access control
- Usage analytics and reporting
- API integrations

### Technical Features
- Modern React 18 with TypeScript
- Responsive UI with Tailwind CSS design system
- REST API for all operations
- Cloud-native architecture on Google App Engine

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Node.js, Express
- **Deployment**: Google App Engine
- **Database**: Mock data API

## Live Deployment

- **Frontend**: https://trans-proposal-441718-c9.ew.r.appspot.com
- **Backend API**: https://api-backend-dot-trans-proposal-441718-c9.ew.r.appspot.com

## Installation
```bash
git clone https://github.com/Miles-Bruce/GenMinds-B-Bm.git
cd GenMinds-B-Bm

# Frontend
cd GenMinds-B-Bm
npm install
npm run dev

# Backend
cd ../genminds-backend
npm install
npm run dev
```

## API Endpoints

The GenMinds backend API provides comprehensive endpoints for intelligence asset management:

### Assets
- `GET /api/assets` - List all intelligence assets with filtering
- `GET /api/assets/:id` - Get detailed asset information
- `POST /api/assets` - Create new intelligence asset
- `PUT /api/assets/:id` - Update existing asset
- `POST /api/assets/:id/clone` - Clone an asset

### Benchmarks
- `GET /api/benchmarks/compare` - Compare AI model performance
- `GET /api/benchmarks/history` - Benchmark execution history
- `POST /api/benchmarks/run` - Execute benchmark on assets

### Portfolios
- `GET /api/portfolios` - List asset portfolios
- `POST /api/portfolios` - Create new portfolio
- `GET /api/portfolios/:id` - Portfolio details

### System
- `GET /health` - API health check status

## License

Proprietary - All rights reserved
