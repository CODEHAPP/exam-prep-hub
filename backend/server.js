const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(5001, () => {
  console.log('Server running on port 5001');
});

