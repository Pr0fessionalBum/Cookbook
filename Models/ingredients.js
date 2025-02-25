const db = require('../db/db');

const Ingredient = {
  getAll: (callback) => {
    const query = 'SELECT * FROM Ingredients';
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = 'SELECT * FROM Ingredients WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]);
    });
  },
  getByIds: (ids, callback) => {
    const query = 'SELECT * FROM Ingredients WHERE id IN (?)';
    db.query(query, [ids], callback);
  }
};

module.exports = Ingredient;