const db = require('./db');

exports.getHomePage = (req, res) => {
    res.render('pages/home');
};

exports.getRecipesPage = (req, res) => {
    let query = "SELECT * FROM Recipes";
    db.query(query, (err, results) => {
        if (err) throw err;
        res.render('pages/recipes', { recipes: results });
    });
};

exports.getRecipePage = (req, res) => {
    let query = `SELECT * FROM Recipes WHERE id = ${req.params.id}`;
    db.query(query, (err, result) => {
        if (err) throw err;
        let recipe = result[0];
        let ingredientQuery = `SELECT * FROM Ingredients WHERE id IN (${recipe.ingredients})`;
        db.query(ingredientQuery, (err, ingredients) => {
            if (err) throw err;
            res.render('pages/recipe', { recipe, ingredients });
        });
    });
};