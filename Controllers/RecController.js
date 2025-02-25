const Recipe = require('../Models/recipe');
const Ingredient = require('../Models/Ingredient');

exports.getAllRecipes = (req, res) => {
    Recipe.getAll((err, recipes) => {
      if (err) return res.status(500).send(err);
  
      const categorizedRecipes = {};
  
      recipes.forEach(recipe => {
        const ingredients = JSON.parse(recipe.ingredients);
  
        ingredients.forEach(ingredientId => {
          Ingredient.getById(ingredientId, (err, ingredient) => {
            if (err) return res.status(500).send(err);
  
            if (ingredient.isProtein) {
              if (!categorizedRecipes[ingredient.name]) {
                categorizedRecipes[ingredient.name] = [];
              }
              categorizedRecipes[ingredient.name].push(recipe);
            }
          });
        });
      });
  
      setTimeout(() => {
        res.render('recipes', { categorizedRecipes });
      }, 1000); 
    });
  };
  
exports.getRecipeById = (req, res) => {
    const id = req.params.id;
    Recipe.getById(id, (err, recipe) => {
      if (err) return res.status(500).send(err);
  
      const ingredients = JSON.parse(recipe.ingredients);
      Ingredient.getByIds(ingredients, (err, ingredientDetails) => {
        if (err) return res.status(500).send(err);
        res.render('recipe', { recipe, ingredients: ingredientDetails });
      });
    });
  };

exports.createRecipe = (req, res) => {
  const recipe = req.body;
  Recipe.create(recipe, (err, results) => {
    if (err) return res.status(500).send(err);
    res.redirect('/recipes');
  });
};