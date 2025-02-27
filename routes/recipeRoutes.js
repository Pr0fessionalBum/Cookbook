const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get all recipes
router.get('/recipes', async (req, res) => {
    try {
        const [recipes] = await db.query(`
            SELECT 
                r.id,
                r.name,
                GROUP_CONCAT(DISTINCT i.name) as ingredient_names,
                GROUP_CONCAT(DISTINCT i.type) as ingredient_types
            FROM recipes r
            LEFT JOIN recipe_ingredients ri ON r.id = ri.recipe_id
            LEFT JOIN ingredients i ON ri.ingredient_id = i.id
            GROUP BY r.id, r.name
            ORDER BY r.name
        `);

        const categories = {
            'Chicken Dishes': [],
            'Beef Dishes': [],
            'Pork Dishes': [], 
            'Seafood': [],
            'Vegetarian': [],
            'Pasta & Noodles': [],
            'Soups & Stews': [],
            'Salads': [],
            'Other': []
        };

        recipes.forEach(recipe => {
            const ingredients = recipe.ingredient_names ? recipe.ingredient_names.toLowerCase() : '';
            const types = recipe.ingredient_types ? recipe.ingredient_types.toLowerCase() : '';
            
            if (ingredients.includes('chicken')) {
                categories['Chicken Dishes'].push(recipe);
            }
            else if (ingredients.includes('pork') || 
                     ingredients.includes('ham') || 
                     ingredients.includes('bacon')) {
                categories['Pork Dishes'].push(recipe);
            }
            else if (ingredients.includes('beef')) {
                categories['Beef Dishes'].push(recipe);
            }
            else if (ingredients.includes('fish') || 
                     ingredients.includes('shrimp') || 
                     ingredients.includes('salmon')) {
                categories['Seafood'].push(recipe);
            }
            else if (ingredients.includes('pasta') || 
                     ingredients.includes('noodle')) {
                categories['Pasta & Noodles'].push(recipe);
            }
            else if (ingredients.includes('soup') || 
                     ingredients.includes('stew')) {
                categories['Soups & Stews'].push(recipe);
            }
            else if (ingredients.includes('salad') || 
                     ingredients.includes('lettuce')) {
                categories['Salads'].push(recipe);
            }
            else if (!ingredients.includes('meat') && 
                     !ingredients.includes('chicken') && 
                     !ingredients.includes('fish') && 
                     !ingredients.includes('pork') && 
                     !ingredients.includes('beef')) {
                categories['Vegetarian'].push(recipe);
            }
            else {
                categories['Other'].push(recipe);
            }
        });

        // Remove empty categories
        Object.keys(categories).forEach(key => {
            if (categories[key].length === 0) {
                delete categories[key];
            }
        });

        res.render('recipes', {
            categorizedRecipes: categories,
            currentTime: '2025-02-27 04:47:07',
            currentUser: 'Pr0fessionalBum'
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).render('error', { 
            error: 'Error fetching recipes'
        });
    }
});

// Get add recipe form
router.get('/add-recipe', async (req, res) => {
    try {
        const [ingredients] = await db.query(`
            SELECT id, name, type, info
            FROM ingredients
            ORDER BY FIELD(type, 'protein', 'vegetable', 'grain', 'dairy', 'spice', 'other'), name
        `);

        // Group ingredients by type
        const groupedIngredients = {};
        ingredients.forEach(ingredient => {
            if (!groupedIngredients[ingredient.type]) {
                groupedIngredients[ingredient.type] = [];
            }
            groupedIngredients[ingredient.type].push(ingredient);
        });

        res.render('add-recipe', {
            ingredients: groupedIngredients
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).render('error', { 
            error: 'Error loading add recipe form'
        });
    }
});

// Get single recipe
router.get('/recipe/:id', async (req, res) => {
    try {
        const [recipe] = await db.query(`
            SELECT 
                r.*,
                GROUP_CONCAT(DISTINCT i.name SEPARATOR ', ') as ingredient_names,
                GROUP_CONCAT(DISTINCT i.type SEPARATOR ', ') as ingredient_types
            FROM recipes r
            LEFT JOIN recipe_ingredients ri ON r.id = ri.recipe_id
            LEFT JOIN ingredients i ON ri.ingredient_id = i.id
            WHERE r.id = ?
            GROUP BY r.id
        `, [req.params.id]);

        if (!recipe[0]) {
            return res.status(404).render('error', { 
                error: 'Recipe not found'
            });
        }

        const instructionSteps = recipe[0].instructions ? recipe[0].instructions.split('\n').filter(step => step.trim()) : [];

        // Determine recipe category
        let category = 'Other';
        const ingredients = recipe[0].ingredient_names ? recipe[0].ingredient_names.toLowerCase() : '';
        
        if (ingredients.includes('chicken')) {
            category = 'Chicken Dishes';
        } else if (ingredients.includes('pork') || 
                   ingredients.includes('ham') || 
                   ingredients.includes('bacon')) {
            category = 'Pork Dishes';
        } else if (ingredients.includes('beef')) {
            category = 'Beef Dishes';
        } else if (ingredients.includes('fish') || 
                   ingredients.includes('shrimp') || 
                   ingredients.includes('salmon')) {
            category = 'Seafood';
        }

        res.render('recipe', { 
            recipe: {
                ...recipe[0],
                category,
                instructionSteps
            },

        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).render('error', { 
            error: 'Error fetching recipe'
        });
    }
});

// Add new recipe
router.post('/add-recipe', async (req, res) => {
    const conn = await db.getConnection();
    try {
        await conn.beginTransaction();

        const { name, instructions, ingredients } = req.body;
        
        // Validate input
        if (!name || !instructions || !ingredients) {
            throw new Error('Missing required fields');
        }

        // Insert recipe
        const [recipeResult] = await conn.query(
            'INSERT INTO recipes (name, instructions) VALUES (?, ?)',
            [name, instructions]
        );

        const ingredientArray = Array.isArray(ingredients) ? ingredients : [ingredients];

        if (ingredientArray.length > 0) {
            const ingredientValues = ingredientArray.map(id => [recipeResult.insertId, parseInt(id)]);
            await conn.query(
                'INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES ?',
                [ingredientValues]
            );
        }

        await conn.commit();
        res.redirect('/recipes');

    } catch (error) {
        await conn.rollback();
        console.error('Error:', error);
        res.status(500).render('error', {
            error: 'Error adding recipe'
        });
    } finally {
        conn.release();
    }
});

router.get('/api/ingredients', async (req, res) => {
    try {
        const [ingredients] = await db.query('SELECT name, info FROM ingredients');
        res.json(ingredients);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error fetching ingredients' });
    }
});

module.exports = router;