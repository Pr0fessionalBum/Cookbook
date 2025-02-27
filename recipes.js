const express = require('express');
const router = express.Router();
const recipeController = require('./recipeController');
const addRecipeController = require('./addRecipeController');

router.get('/', recipeController.getRecipesPage);
router.get('/:id', recipeController.getRecipePage);
router.get('/add', addRecipeController.getAddRecipePage);
router.post('/add', addRecipeController.postAddRecipe);

module.exports = router;