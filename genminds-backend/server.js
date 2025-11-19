const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Mock assets data
const mockAssets = [
  {
    id: '1',
    title: 'Sample Intelligence Asset',
    description: 'A sample asset for demonstration',
    category: 'prompt',
    tags: ['demo', 'sample'],
    source: 'GenMinds Platform',
    riskLevel: 'low',
    createdAt: new Date().toISOString()
  }
];

// Get all assets
app.get('/api/assets', (req, res) => {
  res.json({ assets: mockAssets, count: mockAssets.length });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'GenMinds Backend running on port ' + PORT });
});

app.listen(PORT, () => {
  console.log(`GenMinds Backend running on port ${PORT}`);
});
