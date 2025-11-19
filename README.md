# GenMinds - Intelligence Asset Management Platform

## Project Description

GenMinds is an AI-powered intelligence asset management platform designed for managing, versioning, evaluating, and licensing intelligence assets. This platform enables organizations to efficiently manage AI intelligence assets including prompts, templates, workflows, and personas with AI-powered semantic search and evaluation capabilities.

## Core Functionality for Intelligence Asset Management

### Asset Management
- Create, read, update, delete intelligence assets
- Track asset versions and changes
- Manage metadata for intelligence assets
- Support for multiple asset types (prompts, templates, workflows, personas)

### AI-Powered Features
- Semantic search using Google Gemini AI embeddings
- Asset evaluation and quality scoring
- Intelligent asset recommendations

### Versioning & Licensing
- Complete version control for assets
- Track asset modifications over time
- Licensing management for intelligence assets

### Analytics & Monitoring
- Real-time analytics logging via BigQuery
- Asset usage tracking
- Performance metrics

## Repository Structure
```
GenMinds-B-Bm/
├── README.md                                    # Project documentation
├── GenMinds-B-Bm/                              # Frontend (React)
│   ├── src/components/
│   │   ├── Dashboard.tsx                       # Analytics dashboard
│   │   ├── Assets.tsx                          # Asset management UI
│   │   ├── CreateAsset.tsx                     # Asset creation form
│   │   └── Analytics.tsx                       # Analytics visualization
│   ├── src/lib/api.ts                          # API integration
│   └── package.json
│
└── genminds-backend/                           # Backend API (Node.js/Express)
    ├── server.js                               # Express server
    ├── app.yaml                                # App Engine config
    └── package.json
```

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **AI/ML**: Google Gemini API (embeddings, semantic search)
- **Database**: Google Firestore
- **Analytics**: Google BigQuery
- **Deployment**: Google App Engine
- **Version Control**: Git/GitHub

## API Endpoints for Intelligence Asset Management

### Asset CRUD Operations
- `GET /api/assets` - List all intelligence assets
- `POST /api/assets` - Create new intelligence asset
- `GET /api/assets/:id` - Get specific asset details
- `PUT /api/assets/:id` - Update asset
- `DELETE /api/assets/:id` - Delete asset

### AI-Powered Search
- `POST /api/search` - Semantic search using Gemini embeddings

### Asset Evaluation
- `POST /api/assets/:id/evaluate` - Evaluate asset quality and relevance

### Analytics
- `GET /api/analytics` - Get asset analytics and metrics

## Live Deployment

- **Frontend**: https://trans-proposal-441718-c9.ew.r.appspot.com
- **Backend API**: https://api-backend-dot-trans-proposal-441718-c9.ew.r.appspot.com

## Key Features

1. **Intelligence Asset Management** - Comprehensive CRUD for managing AI assets
2. **Semantic Search** - AI-powered search using Gemini embeddings
3. **Versioning** - Track changes and versions of assets
4. **Evaluation** - Quality scoring and relevance evaluation
5. **Analytics** - Real-time usage tracking and metrics
6. **Licensing** - Asset licensing and rights management

## Installation & Development
```bash
# Clone repository
git clone https://github.com/Miles-Bruce/GenMinds-B-Bm.git
cd GenMinds-B-Bm

# Backend setup
cd genminds-backend
npm install
npm run dev

# Frontend setup (new terminal)
cd GenMinds-B-Bm
npm install
npm run dev
```

## Data Models

### Intelligence Asset Schema
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "category": "prompt|template|workflow|persona",
  "tags": ["string"],
  "source": "string",
  "riskLevel": "low|medium|high",
  "evaluationScore": "number",
  "version": "number",
  "license": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp",
  "embedding": ["number"]
}
```

## Status

**Version**: 1.0.0 (Production Ready)

- ✅ Intelligence asset CRUD operations
- ✅ AI-powered semantic search with Gemini
- ✅ Asset evaluation system
- ✅ Versioning and change tracking
- ✅ Analytics dashboard
- ✅ Cloud deployment
- 🔄 Advanced licensing features (planned)

## License

Proprietary - All rights reserved

## Repository

https://github.com/Miles-Bruce/GenMinds-B-Bm
