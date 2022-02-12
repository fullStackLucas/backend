const { Router } = require('express');
const { recipes } = require('../data');
const ascendingSort = require('../data/helpers');

const recipesRoute = Router();
const recipesSearch = Router();
const recipesById = Router();

recipesRoute.get('/', (_req, res) => {
  const orderedRecipes = recipes.sort(ascendingSort); 
  return res.json(orderedRecipes);
});

recipesRoute.post('/', (req, res) => {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  return res.status(201).json({ message: 'Recipe created successfully!'});
});

recipesSearch.get('/', (req, res) => {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => {
    return r.name.includes(name) && (r.price <= Number(maxPrice) && r.price >= Number(minPrice));
  });

  if(!filteredRecipes.length) return res.status(404).json({ message: 'There are no recipes matching'});
  return res.status(200).json(filteredRecipes);
});

recipesById.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  return res.status(200).json(recipe);
});

recipesById.put('/', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'recipe not found' });
  
  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  return res.status(204).end();
});

recipesById.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  return res.status(204).end();
});

module.exports = { recipesRoute, recipesById, recipesSearch };