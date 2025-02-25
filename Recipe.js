const db = require('../db/db');

const Recipe = {
    getAll: function(callback) {
        return db.query("Select * from recipes", callback);
    },
    getById: function(id, callback) {
        return db.query("select * from recipes where id=?", [id], callback);
    },
    add: function(Recipe, callback) {
        return db.query("Insert into recipes values(?,?)", [Recipe.id, Recipe.name], callback);
    },
    delete: function(id, callback) {
        return db.query("delete from recipes where id=?", [id], callback);
    },
    update: function(id, Recipe, callback) {
        return db.query("update recipes set name=? where id=?", [Recipe.name, id], callback);
    }
};    