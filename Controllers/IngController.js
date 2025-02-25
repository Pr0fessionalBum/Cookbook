const Ingredient = require('../models/Ingredient');

exports.getAllIngredients = (req, res) => {
  Ingredient.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};