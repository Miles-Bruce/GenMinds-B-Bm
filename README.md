# GenMinds - Intelligence Asset Platform

A sophisticated, cloud-native platform for managing, searching, and evaluating intelligence assets using AI-powered semantic search.

**Live Platform:** https://trans-proposal-441718-c9.ew.r.appspot.com

## Project Overview

GenMinds is an enterprise-grade intelligence asset management platform that enables organizations to create, manage, search, and evaluate intelligence assets using AI-powered semantic search and analytics.

## Implementation Details

### Architecture
- **Frontend:** React 18 with TypeScript, Tailwind CSS, Vite
- **Backend:** Node.js with Express.js
- **Database:** Google Firestore
- **AI/Search:** Google Gemini API for embeddings
- **Analytics:** Google BigQuery
- **Deployment:** Google App Engine

### Repository Structure
- `GenMinds-B-Bm/` - Frontend React application
  - `src/components/` - Dashboard, Assets, Analytics, CreateAsset components
  - `src/lib/api.ts` - API client for backend integration
  - `package.json` - Frontend dependencies
  
- `genminds-backend/` - Backend API (Node.js/Express)
  - `src/routes/` - Asset CRUD and search endpoints
  - `src/services/` - Firestore, Gemini, BigQuery services
  - `app.yaml` - App Engine deployment configuration

### Key Features
- Asset Management - Full CRUD operations
- Semantic Search - AI-powered search using Gemini embeddings
- Analytics - Real-time event logging to BigQuery
- Asset Evaluation - Quality scoring and ratings
- Cloud-Native - Deployed on Google App Engine

### API Endpoints
- `GET /api/assets` - List assets
- `POST /api/assets` - Create asset
- `GET /api/assets/:id` - Get asset
- `PUT /api/assets/:id` - Update asset
- `DELETE /api/assets/:id` - Delete asset
- `POST /api/search` - Semantic search
- `POST /api/assets/:id/evaluate` - Evaluate asset
- `GET /api/analytics/dashboard` - Dashboard metrics

### Data Models
```
Asset: {
  id, title, description, category, tags, source, 
  riskLevel, evaluationScore, createdAt, updatedAt, embedding
}

Event: {
  id, timestamp, eventType, assetId, metadata
}
```

### Deployment
- **Frontend:** https://trans-proposal-441718-c9.ew.r.appspot.com
- **Backend API:** https://api-backend-dot-trans-proposal-441718-c9.ew.r.appspot.com
- **Project ID:** trans-proposal-441718-c9

### Security
- Service account authentication
- CORS enabled
- Firestore security rules
- Environment-based API keys

### Development Setup
1. Clone: `git clone https://github.com/Miles-Bruce/GenMinds-B-Bm.git`
2. Backend: `cd genminds-backend && npm install && npm run dev`
3. Frontend: `cd GenMinds-B-Bm && npm install && npm run dev`

### Status
- ✅ Core asset management
- ✅ Semantic search with embeddings
- ✅ Analytics logging
- ✅ Cloud deployment
- 🔄 Firebase Authentication (in progress)
