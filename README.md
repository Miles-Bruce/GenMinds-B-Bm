# GenMinds - Intelligence Asset Platform

## Overview

GenMinds is a sophisticated intelligence asset management platform built with modern web technologies. It enables organizations to create, manage, search, and evaluate intelligence assets using AI-powered semantic search and analytics.

**Live Demo:** https://trans-proposal-441718-c9.ew.r.appspot.com

## 🎯 Key Features

- **Asset Management**: Create, read, update, and delete intelligence assets with rich metadata
- **Semantic Search**: AI-powered search using Gemini embeddings to find assets by meaning
- **Real-time Analytics**: Track asset usage and interactions with BigQuery integration
- **Asset Evaluation**: Rate and evaluate assets based on relevance and quality
- **Version Control**: Track changes and maintain asset history
- **Responsive Dashboard**: Monitor platform metrics and asset statistics
- **Cloud-Native**: Deployed on Google Cloud Platform with Firestore and BigQuery

## 🏗️ Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React hooks
- **Deployment**: Google App Engine

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: Google Firestore (NoSQL)
- **Search**: Gemini AI embeddings for semantic search
- **Analytics**: Google BigQuery
- **Deployment**: Google App Engine

### Infrastructure
- **Project**: Google Cloud Platform (Project ID: trans-proposal-441718-c9)
- **Region**: Europe West (ew)
- **Services**: Firestore, BigQuery, Gemini API

## 📁 Project Structure## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Google Cloud Platform account with Firestore, BigQuery, and Gemini API enabled

### Installation

1. Clone the repository
```bash
   git clone https://github.com/Miles-Bruce/GenMinds-B-Bm.git
   cd GenMinds-B-Bm
```

2. Frontend Setup
```bash
   cd GenMinds-B-Bm
   npm install
```

3. Backend Setup
```bash
   cd ../genminds-backend
   npm install
```

## 💻 Development

### Running Locally

**Frontend:**
```bash
cd GenMinds-B-Bm
npm run dev
```

**Backend:**
```bash
cd genminds-backend
npm run dev
```

## 🌐 API Endpoints

### Assets
- `GET /api/assets` - List all assets
- `POST /api/assets` - Create new asset
- `GET /api/assets/:id` - Get asset details
- `PUT /api/assets/:id` - Update asset
- `DELETE /api/assets/:id` - Delete asset
- `POST /api/assets/:id/evaluate` - Evaluate asset

### Search
- `POST /api/search` - Semantic search with Gemini embeddings

### Analytics
- `GET /api/analytics/dashboard` - Dashboard metrics
- `POST /api/analytics/log` - Log events to BigQuery

## 🔍 Core Functionality

### Asset Creation
Users can create intelligence assets with title, description, category, tags, source, and risk assessment.

### Semantic Search
Uses Gemini AI embeddings to find assets by semantic similarity, not just keywords.

### Asset Evaluation
Rate assets on quality and relevance with evaluation history tracking.

### Analytics Dashboard
Real-time asset metrics, usage statistics, and search trends powered by BigQuery.

## 🚢 Deployment

### To Google App Engine

**Deploy Frontend:**
```bash
cd GenMinds-B-Bm
npm run build
mv dist build
gcloud app deploy
```

**Deploy Backend:**
```bash
cd genminds-backend
gcloud app deploy
```

**Live URLs:**
- Frontend: https://trans-proposal-441718-c9.ew.r.appspot.com
- Backend API: https://api-backend-dot-trans-proposal-441718-c9.ew.r.appspot.com

## 🔐 Security

- API authentication via service accounts
- CORS enabled for frontend-backend communication
- Firestore security rules restrict unauthorized access
- BigQuery access limited to service account

## 📊 Data Models

### Asset Schema
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

## 🛠️ Technologies Used

- Frontend: React, TypeScript, Tailwind CSS, Vite
- Backend: Node.js, Express, TypeScript
- Database: Google Firestore
- Analytics: Google BigQuery
- AI/ML: Google Gemini API
- Deployment: Google App Engine

## 📈 Roadmap

- [ ] User authentication with Firebase
- [ ] Role-based access control
- [ ] Advanced filtering and faceted search
- [ ] Asset portfolios and grouping
- [ ] Benchmark comparisons
- [ ] Export functionality
- [ ] Mobile app
- [ ] Real-time collaboration features

## 📝 License

This project is proprietary. All rights reserved.

## 📞 Support

For issues or questions, please open an issue on GitHub or contact the development team.

## ✨ Current Status

**Version**: 1.0.0 (In Development)
- ✅ Core asset management
- ✅ Semantic search with embeddings
- ✅ Analytics logging
- ✅ Cloud deployment
- 🔄 Authentication system (In Progress)
- 📋 Advanced features (Planned)
