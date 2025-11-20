# GenMinds - Implementation Details

## Project: GenMinds - Enterprise Intelligence Asset Management Platform

### Code Structure

#### Frontend Implementation
Location: `GenMinds-B-Bm/src/`

Key Components:
- `App.tsx` - Main application component
- `components/DashboardLayout.tsx` - Dashboard layout for asset management
- `components/Navigation.tsx` - Navigation component
- `pages/Dashboard.tsx` - Dashboard page for intelligence assets
- `pages/Assets.tsx` - Asset listing and management page
- `pages/CreateAsset.tsx` - Create new intelligence asset page
- `pages/Benchmarks.tsx` - Benchmarking system for AI models
- `pages/Portfolios.tsx` - Portfolio management for asset collections
- `pages/Personas.tsx` - AI personas management
- `lib/` - Utility libraries and API clients

Technology: React 18, TypeScript, Tailwind CSS, Vite

#### Backend Implementation
Location: `genminds-backend/`

Key Files:
- `server.js` - Express.js server for GenMinds API
- `app.yaml` - Google App Engine configuration

API Endpoints:
- GET /api/assets - Retrieve intelligence assets
- GET /health - Health check endpoint

Technology: Node.js, Express.js

#### Deployment
- `app.yaml` - App Engine configuration for static file serving
- `package.json` - Node.js dependencies and scripts
- `server.js` - Express server

### Live Deployment
- **Frontend**: https://trans-proposal-441718-c9.ew.r.appspot.com
- **Backend API**: https://api-backend-dot-trans-proposal-441718-c9.ew.r.appspot.com/api/assets

### Repository Files
- `README.md` - Project overview and documentation
- `GENMINDS_PROJECT.md` - Project confirmation
- `GenMinds_Info.txt` - Project identification
- `IMPLEMENTATION.md` - This file, showing code implementation
- `server.js` - Express backend server
- `package.json` - Node.js project configuration
- `app.yaml` - Deployment configuration

### What GenMinds Does
1. **Intelligence Asset Management** - Create, read, update, delete AI assets
2. **Asset Discovery** - Search and browse AI intelligence assets
3. **Benchmarking** - Evaluate AI model performance
4. **Portfolios** - Organize assets into packages
5. **Analytics** - Track asset usage and performance

This is the official GenMinds Enterprise Intelligence Asset Management Platform implementation.
