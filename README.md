# GenMinds - Enterprise Intelligence Asset Management Platform

GenMinds is an enterprise-grade AI intelligence asset management platform designed to help organizations manage, version, evaluate, and license intelligence assets at scale.

## What is GenMinds?

GenMinds is a comprehensive platform for:
- **Managing Intelligence Assets** - Create and manage prompts, templates, workflows, and personas
- **Versioning & Change Tracking** - Track all changes and versions of intelligence assets
- **AI-Powered Evaluation** - Use machine learning to evaluate and score asset quality
- **Licensing Management** - Manage intellectual property and licensing for AI assets
- **Semantic Search** - Find assets using AI-powered semantic understanding

## GenMinds Goals & Objectives

1. **Centralized Management** - Single platform to manage all intelligence assets
2. **Quality Assurance** - Evaluate and score assets for quality and relevance
3. **Version Control** - Track every change and iteration of assets
4. **Intelligent Discovery** - Use AI embeddings for smart semantic search
5. **Scalability** - Handle enterprise-scale asset libraries

## GenMinds Architecture
```
GenMinds Platform
│
├── Frontend Application (React)
│   ├── Asset Dashboard - View and manage assets
│   ├── Asset Editor - Create/edit intelligence assets
│   ├── Search Interface - Semantic search powered by AI
│   └── Analytics - Track usage and performance
│
├── Backend API (Node.js/Express)
│   ├── Asset Management Service - CRUD operations
│   ├── AI Search Service - Gemini embeddings
│   ├── Evaluation Service - Quality scoring
│   └── Analytics Service - BigQuery logging
│
└── Infrastructure (Google Cloud)
    ├── Firestore - Asset storage
    ├── Gemini AI - Embeddings & search
    └── BigQuery - Analytics database
```

## GenMinds Features

### 1. Intelligence Asset Management
- Create new intelligence assets (prompts, templates, workflows, personas)
- Edit and update existing assets
- Delete and archive assets
- Full CRUD operations via REST API

### 2. AI-Powered Semantic Search
- Powered by Google Gemini AI embeddings
- Search assets by meaning, not just keywords
- Intelligent asset discovery and recommendations

### 3. Asset Evaluation System
- Automated quality scoring
- Relevance evaluation
- Performance metrics
- Version comparison

### 4. Versioning & Change Tracking
- Complete version history
- Track who changed what and when
- Rollback to previous versions
- Change annotations

### 5. Analytics & Insights
- Real-time usage tracking
- Asset performance metrics
- Search analytics
- User engagement tracking

## GenMinds API

### Asset Management Endpoints
```
GET    /api/assets              - List all intelligence assets
POST   /api/assets              - Create new intelligence asset
GET    /api/assets/:id          - Get specific asset details
PUT    /api/assets/:id          - Update intelligence asset
DELETE /api/assets/:id          - Delete intelligence asset
```

### AI-Powered Search
```
POST   /api/search              - Semantic search using Gemini AI
```

### Asset Evaluation
```
POST   /api/assets/:id/evaluate - Evaluate asset quality
GET    /api/analytics           - Get analytics data
```

## GenMinds Data Model

### Intelligence Asset Schema
Each asset in GenMinds contains:
```json
{
  "id": "unique identifier",
  "title": "asset name",
  "description": "detailed description",
  "category": "prompt | template | workflow | persona",
  "tags": ["relevant", "keywords"],
  "source": "asset origin",
  "riskLevel": "low | medium | high",
  "version": "version number",
  "license": "licensing info",
  "evaluationScore": "quality score 0-100",
  "embedding": "AI embedding vector",
  "createdAt": "creation timestamp",
  "updatedAt": "last modification timestamp"
}
```

## GenMinds Technology Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Frontend | React 18, TypeScript, Tailwind CSS | Intelligence asset UI |
| Backend | Node.js, Express | API for asset management |
| AI/ML | Google Gemini API | Embeddings & semantic search |
| Database | Google Firestore | Intelligence asset storage |
| Analytics | Google BigQuery | Usage tracking |
| Deployment | Google App Engine | Cloud hosting |

## GenMinds Repository Structure
```
GenMinds-B-Bm/
├── README.md                           # GenMinds documentation
├── GenMinds-B-Bm/                     # Frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.tsx           # Asset dashboard
│   │   │   ├── Assets.tsx              # Asset management
│   │   │   ├── CreateAsset.tsx         # Asset creation form
│   │   │   └── Analytics.tsx           # Analytics view
│   │   ├── lib/
│   │   │   └── api.ts                  # GenMinds API client
│   │   └── App.tsx
│   └── package.json
│
└── genminds-backend/                  # GenMinds Backend API
    ├── server.js                       # Express server
    ├── app.yaml                        # App Engine config
    └── package.json
```

## GenMinds Live Deployment

- **Frontend**: https://trans-proposal-441718-c9.ew.r.appspot.com
- **Backend API**: https://api-backend-dot-trans-proposal-441718-c9.ew.r.appspot.com

## GenMinds Installation
```bash
# Clone GenMinds repository
git clone https://github.com/Miles-Bruce/GenMinds-B-Bm.git
cd GenMinds-B-Bm

# Setup GenMinds Backend
cd genminds-backend
npm install
npm run dev

# Setup GenMinds Frontend (new terminal)
cd GenMinds-B-Bm
npm install
npm run dev
```

## GenMinds Project Goals

1. ✅ **Intelligent Asset Management** - Manage AI-generated and AI-related assets
2. ✅ **Automated Evaluation** - Score and evaluate asset quality
3. ✅ **Enterprise Versioning** - Track all asset changes and versions
4. ✅ **AI-Powered Discovery** - Smart semantic search using embeddings
5. ✅ **Scalable Architecture** - Handle large-scale asset libraries
6. ✅ **Cloud-Native** - Deployed on Google Cloud Platform

## GenMinds Status

**Version**: 1.0.0

- ✅ Intelligence asset CRUD operations
- ✅ Gemini AI-powered semantic search
- ✅ Asset evaluation system
- ✅ Change versioning
- ✅ Analytics dashboard
- ✅ Cloud deployment
- 🔄 Advanced licensing (planned)

## License

Proprietary - All rights reserved

---

**GenMinds: Manage Intelligence Assets with AI**
