const {
    testGetIngredients,
    testGetRecipes,
    testGetRecipeById,
    testGetIngredientsByRecipeId
} = require('./test-db');

console.log('Testing fetching all ingredients...');
testGetIngredients();

console.log('Testing fetching all recipes...');
testGetRecipes();

console.log('Testing fetching a recipe by ID (ID: 1)...');
testGetRecipeById(1);

console.log('Testing fetching ingredients for a recipe by ID (ID: 1)...');
testGetIngredientsByRecipeId(1);