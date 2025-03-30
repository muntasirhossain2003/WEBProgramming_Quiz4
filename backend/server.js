const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// MongoDB connection (remove deprecated options)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Server setup
const PORT = process.env.PORT || 5002;  // Use port from .env or fallback to 5002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
