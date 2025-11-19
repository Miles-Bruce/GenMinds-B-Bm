# GenMinds - Intelligence Asset Platform

GenMinds is a platform for discovering and sharing intelligence assets, built with React and Node.js.

## Project Overview

This repository contains the GenMinds Intelligence Asset Platform - a full-stack web application featuring:
- Landing page with asset showcase
- Asset discovery interface
- Backend API for asset management
- Cloud deployment on Google App Engine

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

## Features

- Responsive landing page
- Asset showcase and discovery
- REST API for asset data
- Cloud-native deployment
- Responsive UI with Tailwind CSS

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

- `GET /api/assets` - Retrieve asset list
- `GET /health` - Health check

## License

Proprietary - All rights reserved
