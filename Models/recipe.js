const db = require('../db/db');

const Recipe = {
  getAll: (callback) => {
    const query = 'SELECT * FROM Recipes';
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = 'SELECT * FROM Recipes WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]);
    });
  },
  create: (recipe, callback) => {
    const query = 'INSERT INTO Recipes (name, origin, safetyTips, cookTime, ingredients) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [recipe.name, recipe.origin, recipe.safetyTips, recipe.cookTime, JSON.stringify(recipe.ingredients)], callback);
  }
};

module.exports = Recipe;