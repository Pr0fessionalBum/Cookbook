const express = require('express');
const path = require('path');
require('dotenv').config();

// Import routes
const indexRoutes = require('./routes/indexRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Global middleware to add user and time info to all routes
app.use((req, res, next) => {
  res.locals.currentUser = 'Pr0fessionalBum';
  res.locals.currentTime = '2025-02-27 02:21:03';
  next();
});

// Routes
app.use('/', indexRoutes);
app.use('/', recipeRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});