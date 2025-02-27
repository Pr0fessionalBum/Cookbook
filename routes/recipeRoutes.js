const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get all recipes
router.get('/recipes', async (req, res) => {
  try {
    // First get all recipes
    const [recipes] = await db.query(`
      SELECT * FROM recipes ORDER BY name
    `);

    // For each recipe, get its ingredients
    const enrichedRecipes = await Promise.all(recipes.map(async (recipe) => {
      const [ingredients] = await db.query(`
        SELECT i.* 
        FROM ingredients i 
        JOIN recipe_ingredients ri ON i.id = ri.ingredient_id 
        WHERE ri.recipe_id = ?
      `, [recipe.id]);
      
      return {
        ...recipe,
        ingredients: ingredients
      };
    }));

    // Create categories based on protein types
    const categorizedRecipes = {
      chicken: [],
      beef: [],
      tofu: [],
      other: []
    };

    // Categorize recipes based on their protein ingredients
    enrichedRecipes.forEach(recipe => {
      const proteins = recipe.ingredients.filter(i => i.type === 'protein');
      
      if (proteins.length === 0) {
        categorizedRecipes.other.push(recipe);
      } else {
        proteins.forEach(protein => {
          const category = protein.name.toLowerCase();
          if (categorizedRecipes[category]) {
            categorizedRecipes[category].push(recipe);
          } else {
            categorizedRecipes.other.push(recipe);
          }
        });
      }
    });

    res.render('recipes', { categorizedRecipes });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).render('error', { error: 'Error fetching recipes' });
  }
});

// Get single recipe
router.get('/recipe/:id', async (req, res) => {
  try {
    // Get recipe details
    const [recipes] = await db.query('SELECT * FROM recipes WHERE id = ?', [req.params.id]);
    
    if (recipes.length === 0) {
      return res.status(404).render('error', { error: 'Recipe not found' });
    }

    // Get recipe ingredients
    const [ingredients] = await db.query(`
      SELECT i.* 
      FROM ingredients i 
      JOIN recipe_ingredients ri ON i.id = ri.ingredient_id 
      WHERE ri.recipe_id = ?
    `, [req.params.id]);

    const recipe = {
      ...recipes[0],
      ingredients: ingredients
    };

    res.render('recipe', { recipe });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).render('error', { error: 'Error fetching recipe' });
  }
});

// Add recipe form
router.get('/add-recipe', async (req, res) => {
  try {
    const [ingredients] = await db.query(`
      SELECT * FROM ingredients 
      ORDER BY FIELD(type, 'protein', 'vegetable', 'grain', 'dairy', 'spice', 'other'), name
    `);
    res.render('add-recipe', { ingredients });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).render('error', { error: 'Error loading add recipe form' });
  }
});

// Handle new recipe submission
router.post('/add-recipe', async (req, res) => {
  const { name, instructions, ingredients } = req.body;
  
  if (!Array.isArray(ingredients)) {
    return res.status(400).render('error', { error: 'Invalid ingredients format' });
  }

  const conn = await db.getConnection();
  try {
    await conn.beginTransaction();

    // Insert recipe
    const [recipeResult] = await conn.query(
      'INSERT INTO recipes (name, instructions) VALUES (?, ?)',
      [name, instructions]
    );

    // Insert recipe ingredients
    if (ingredients.length > 0) {
      const ingredientValues = ingredients.map(id => [recipeResult.insertId, parseInt(id)]);
      await conn.query(
        'INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES ?',
        [ingredientValues]
      );
    }

    await conn.commit();
    res.redirect(`/recipe/${recipeResult.insertId}`);
  } catch (error) {
    await conn.rollback();
    console.error('Error:', error);
    res.status(500).render('error', { error: 'Error adding recipe' });
  } finally {
    conn.release();
  }
});

module.exports = router;