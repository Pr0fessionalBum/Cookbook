const express = require('express');
const path = require('path');
require('dotenv').config();

const indexRoutes = require('./routes/indexRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
const port = process.env.PORT || 3000;

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

// Routes
app.use('/', indexRoutes);
app.use('/', recipeRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});