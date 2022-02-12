const { Router } = require('express');
const { recipes } = require('../data');
const ascendingSort = require('../data/helpers');

const recipesRoute = Router();
const recipesSearch = Router();
const recipesByIdRoute = Router();

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

module.exports = recipesRoute;