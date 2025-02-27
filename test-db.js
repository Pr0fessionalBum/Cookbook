const db = require('./db');

function testGetIngredients() {
    db.query('SELECT * FROM Ingredients', (err, results) => {
        if (err) {
            console.error('Error fetching ingredients:', err);
            return;
        }
        console.log('Ingredients:', results);
    });
}

function testGetRecipes() {
    db.query('SELECT * FROM Recipes', (err, results) => {
        if (err) {
            console.error('Error fetching recipes:', err);
            return;
        }
        console.log('Recipes:', results);
    });
}

function testGetRecipeById(id) {
    db.query(`SELECT * FROM Recipes WHERE id = ${id}`, (err, results) => {
        if (err) {
            console.error(`Error fetching recipe with id ${id}:`, err);
            return;
        }
        console.log(`Recipe with id ${id}:`, results);
    });
}

function testGetIngredientsByRecipeId(id) {
    db.query(`SELECT * FROM Recipes WHERE id = ${id}`, (err, results) => {
        if (err) {
            console.error(`Error fetching recipe with id ${id}:`, err);
            return;
        }
        let recipe = results[0];
        let ingredientQuery = `SELECT * FROM Ingredients WHERE id IN (${recipe.ingredients})`;
        db.query(ingredientQuery, (err, ingredients) => {
            if (err) {
                console.error(`Error fetching ingredients for recipe with id ${id}:`, err);
                return;
            }
            console.log(`Ingredients for recipe with id ${id}:`, ingredients);
        });
    });
}

module.exports = {
    testGetIngredients,
    testGetRecipes,
    testGetRecipeById,
    testGetIngredientsByRecipeId
};