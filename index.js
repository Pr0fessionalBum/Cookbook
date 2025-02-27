const express = require('express');
const router = express.Router();
const recipeController = require('./recipeController');
const addRecipeController = require('./addRecipeController');

router.get('/', recipeController.getHomePage);
router.get('/recipes', recipeController.getRecipesPage);
router.get('/recipe/:id', recipeController.getRecipePage);
router.get('/add-recipe', addRecipeController.getAddRecipePage);
router.post('/add-recipe', addRecipeController.postAddRecipe);

module.exports = router;