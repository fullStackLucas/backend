const { Router } = require('express');
const { recipes } = require('../data');
const compare = require('../data/helpers');

const recipesRoute = Router();

recipesRoute.get('/', (_req, res) => {
  const orderedRecipes = recipes.sort(compare); 
  return res.json(orderedRecipes);
});

recipesRoute.post('/', (req, res) => {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  return res.status(201).json({ message: 'Recipe created successfully!'});
});

module.exports = recipesRoute;