# 🚀 GenMinds - Intelligence Asset Platform

**A sophisticated, cloud-native platform for managing, searching, and evaluating intelligence assets using AI-powered semantic search.**

**Live Platform:** https://trans-proposal-441718-c9.ew.r.appspot.com

## 📋 Project Overview

GenMinds is an enterprise-grade intelligence asset management platform that enables organizations to:

- **Create & Manage** intelligence assets (prompts, templates, workflows, personas)
- **Search Intelligently** using AI-powered semantic search with Gemini embeddings
- **Evaluate Assets** with quality scoring and relevance ratings
- **Track Analytics** with real-time BigQuery integration
- **Scale Globally** on Google Cloud Platform infrastructure

## 🏗️ Repository Structure

This monorepo contains the complete GenMinds platform:
```
GenMinds-B-Bm/
├── README.md                    # Project overview
├── .gitignore                   # Git configuration
├── GenMinds-B-Bm/              # Frontend application (React)
│   ├── src/components/         # Dashboard, Assets, Analytics pages
│   ├── src/lib/api.ts          # API client integration
│   └── package.json
│
└── genminds-backend/           # Backend API (Node.js/Express)
    ├── src/routes/             # Asset CRUD & search endpoints
    ├── src/services/           # Firestore, Gemini, BigQuery
    └── app.yaml                # App Engine deployment config
```

## 🎯 Key Features

- **Asset Management** - Full CRUD operations for intelligence assets
- **Semantic Search** - AI-powered search using Gemini embeddings
- **Analytics** - Real-time event logging to BigQuery
- **Asset Evaluation** - Quality scoring and relevance ratings
- **Cloud-Native** - Deployed on Google App Engine with Firestore

## 💻 Technology Stack

| Component | Technology |
|-----------|-----------|
| Frontend | React 18, TypeScript, Tailwind CSS |
| Backend | Node.js, Express, TypeScript |
| Database | Google Firestore (NoSQL) |
| AI/Search | Google Gemini API (embeddings) |
| Analytics | Google BigQuery |
| Infrastructure | Google App Engine |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- GCP account with Firestore, BigQuery, Gemini API enabled

### Installation

1. Clone repository
```bash
   git clone https://github.com/Miles-Bruce/GenMinds-B-Bm.git
   cd GenMinds-B-Bm
```

2. Backend setup
```bash
   cd genminds-backend
   npm install
   npm run dev
```

3. Frontend setup (new terminal)
```bash
   cd GenMinds-B-Bm
   npm install
   npm run dev
```

### Access
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000
- Live: https://trans-proposal-441718-c9.ew.r.appspot.com

## 📡 API Endpoints

### Assets
- `GET /api/assets` - List assets
- `POST /api/assets` - Create asset
- `GET /api/assets/:id` - Get asset
- `PUT /api/assets/:id` - Update asset
- `DELETE /api/assets/:id` - Delete asset
- `POST /api/assets/:id/evaluate` - Evaluate asset

### Search
- `POST /api/search` - Semantic search with Gemini embeddings

### Analytics
- `GET /api/analytics/dashboard` - Dashboard metrics
- `POST /api/analytics/log` - Log events to BigQuery

## 🌐 Deployment

### Deploy to Google App Engine

**Frontend:**
```bash
cd GenMinds-B-Bm
npm run build
mv dist build
gcloud app deploy
```

**Backend:**
```bash
cd genminds-backend
gcloud app deploy
```

**Live URLs:**
- Frontend: https://trans-proposal-441718-c9.ew.r.appspot.com
- Backend: https://api-backend-dot-trans-proposal-441718-c9.ew.r.appspot.com

## 🔐 Security

- API authentication via service accounts
- CORS enabled for frontend-backend communication
- Firestore security rules for data protection
- Environment-based API key management

## 📊 Data Models

### Asset
```typescript
interface Asset {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  source: string;
  riskLevel: 'low' | 'medium' | 'high';
  evaluationScore?: number;
  createdAt: timestamp;
  updatedAt: timestamp;
  embedding?: number[];
}
```

## 📈 Roadmap

- ✅ Core asset management
- ✅ Semantic search with embeddings
- ✅ Analytics logging
- ✅ Cloud deployment
- 🔄 Firebase Authentication
- 📋 Asset portfolios
- 📋 Benchmark comparisons

## 📝 License

This project is proprietary. All rights reserved.

## 📞 Support

For issues or questions, open an issue on GitHub.

# 🚀 GenMinds - Intelligence Asset Platform

**A sophisticated, cloud-native platform for managing, searching, and evaluating intelligence assets using AI-powered semantic search.**

**Live Platform:** https://trans-proposal-441718-c9.ew.r.appspot.com

## 📋 Project Overview

GenMinds is an enterprise-grade intelligence asset management platform that enables organizations to:

- **Create & Manage** intelligence assets (prompts, templates, workflows, personas)
- **Search Intelligently** using AI-powered semantic search with Gemini embeddings
- **Evaluate Assets** with quality scoring and relevance ratings
- **Track Analytics** with real-time BigQuery integration
- **Scale Globally** on Google Cloud Platform infrastructure

## 🏗️ Repository Structure

This monorepo contains the complete GenMinds platform:
```
GenMinds-B-Bm/
├── README.md                    # Project overview
├── .gitignore                   # Git configuration
├── GenMinds-B-Bm/              # Frontend application (React)
│   ├── src/components/         # Dashboard, Assets, Analytics pages
│   ├── src/lib/api.ts          # API client integration
│   └── package.json
│
└── genminds-backend/           # Backend API (Node.js/Express)
    ├── src/routes/             # Asset CRUD & search endpoints
    ├── src/services/           # Firestore, Gemini, BigQuery
    └── app.yaml                # App Engine deployment config
```

## 🎯 Key Features

- **Asset Management** - Full CRUD operations for intelligence assets
- **Semantic Search** - AI-powered search using Gemini embeddings
- **Analytics** - Real-time event logging to BigQuery
- **Asset Evaluation** - Quality scoring and relevance ratings
- **Cloud-Native** - Deployed on Google App Engine with Firestore

## 💻 Technology Stack

| Component | Technology |
|-----------|-----------|
| Frontend | React 18, TypeScript, Tailwind CSS |
| Backend | Node.js, Express, TypeScript |
| Database | Google Firestore (NoSQL) |
| AI/Search | Google Gemini API (embeddings) |
| Analytics | Google BigQuery |
| Infrastructure | Google App Engine |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- GCP account with Firestore, BigQuery, Gemini API enabled

### Installation

1. Clone repository
```bash
   git clone https://github.com/Miles-Bruce/GenMinds-B-Bm.git
   cd GenMinds-B-Bm
```

2. Backend setup
```bash
   cd genminds-backend
   npm install
   npm run dev
```

3. Frontend setup (new terminal)
```bash
   cd GenMinds-B-Bm
   npm install
   npm run dev
```

### Access
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000
- Live: https://trans-proposal-441718-c9.ew.r.appspot.com

## 📡 API Endpoints

### Assets
- `GET /api/assets` - List assets
- `POST /api/assets` - Create asset
- `GET /api/assets/:id` - Get asset
- `PUT /api/assets/:id` - Update asset
- `DELETE /api/assets/:id` - Delete asset
- `POST /api/assets/:id/evaluate` - Evaluate asset

### Search
- `POST /api/search` - Semantic search with Gemini embeddings

### Analytics
- `GET /api/analytics/dashboard` - Dashboard metrics
- `POST /api/analytics/log` - Log events to BigQuery

## 🌐 Deployment

### Deploy to Google App Engine

**Frontend:**
```bash
cd GenMinds-B-Bm
npm run build
mv dist build
gcloud app deploy
```

**Backend:**
```bash
cd genminds-backend
gcloud app deploy
```

**Live URLs:**
- Frontend: https://trans-proposal-441718-c9.ew.r.appspot.com
- Backend: https://api-backend-dot-trans-proposal-441718-c9.ew.r.appspot.com

## 🔐 Security

- API authentication via service accounts
- CORS enabled for frontend-backend communication
- Firestore security rules for data protection
- Environment-based API key management

## 📊 Data Models

### Asset
```typescript
interface Asset {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  source: string;
  riskLevel: 'low' | 'medium' | 'high';
  evaluationScore?: number;
  createdAt: timestamp;
  updatedAt: timestamp;
  embedding?: number[];
}
```

## 📈 Roadmap

- ✅ Core asset management
- ✅ Semantic search with embeddings
- ✅ Analytics logging
- ✅ Cloud deployment
- 🔄 Firebase Authentication
- 📋 Asset portfolios
- 📋 Benchmark comparisons

## 📝 License

This project is proprietary. All rights reserved.

## 📞 Support

For issues or questions, open an issue on GitHub.

**Built with ❤️ by the GenMinds Team**
