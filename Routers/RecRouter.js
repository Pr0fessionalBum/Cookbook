const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/RecController');

router.get('/', recipesController.getAllRecipes);
router.get('/:id', recipesController.getRecipeById);
router.post('/', recipesController.createRecipe);

module.exports = router;