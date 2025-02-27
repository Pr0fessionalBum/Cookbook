const db = require('./db');

exports.getAddRecipePage = (req, res) => {
    let query = "SELECT * FROM Ingredients";
    db.query(query, (err, results) => {
        if (err) throw err;
        res.render('./add-recipe', { ingredients: results });
    });
};

exports.postAddRecipe = (req, res) => {
    let { name, origin, safetyTips, cookTime, ingredients } = req.body;
    let ingredientsJson = JSON.stringify(ingredients.map(Number));
    let query = `INSERT INTO Recipes (name, origin, safetyTips, cookTime, ingredients) VALUES ('${name}', '${origin}', '${safetyTips}', ${cookTime}, '${ingredientsJson}')`;
    db.query(query, (err, result) => {
        if (err) throw err;
        res.redirect('./recipes');
    });
};