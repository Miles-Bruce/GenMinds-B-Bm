const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from build directory
app.use(express.static(path.join(__dirname, 'build')));

// SPA: Send index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`GenMinds server running on port ${PORT}`);
});
