require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const ingredientsRoutes = require('./routes/ingredients');
const recipesRoutes = require('./routes/recipes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/ingredients', ingredientsRoutes);
app.use('/recipes', recipesRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});