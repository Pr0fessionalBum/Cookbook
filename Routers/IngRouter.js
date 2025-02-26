const express = require('express');
const router = express.Router();
const ingredientsController = require('../controllers/IngController');

router.get('/', ingredientsController.getAllIngredients);

module.exports = router;