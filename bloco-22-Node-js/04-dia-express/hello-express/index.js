const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {
  recipesRoute,
  recipesSearch,
  recipesById,
} = require('./routes/recipesRoute');
const { 
  drinksRoute,
  drinksSearchRoute,
  drinksByIdRoute,
} = require('./routes/drinksRoute');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', (_req, res) => {
  res.json('Hello World!')
})

app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  return res.status(200).json({message: 'Valid Token!'});
});

app.use('/recipes', recipesRoute);

app.use('/recipes/search', recipesSearch);

app.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  return res.status(204).end();
});

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  return res.status(204).end();
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  return res.status(200).json(recipe);
});

app.use('/drinks', drinksRoute);

app.use('/drinks/search', drinksSearchRoute);

app.use('/drinks/:id', drinksByIdRoute);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});