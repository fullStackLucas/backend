const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

function compare(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

app.use(cors());

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  return res.status(200).json({message: 'Valid Token!'});
});

app.get('/recipes', (_req, res) => {
  const orderedRecipes = recipes.sort(compare); 
  return res.json(orderedRecipes);
});

app.post('/recipes', (req, res) => {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  return res.status(201).json({ message: 'Recipe created successfully!'});
});

app.get('/recipes/search', (req, res) => {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => {
    return r.name.includes(name) && (r.price <= Number(maxPrice) && r.price >= Number(minPrice));
  });

  if(!filteredRecipes.length) return res.status(404).json({ message: 'There are no recipes matching'});
  return res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  return res.status(200).json(recipe);
});

app.get('/drinks', (_req, res) => {
  const orderedDrinks = drinks.sort(compare);
  return res.json(orderedDrinks);
});

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  return res.status(201).json({ message: 'Drink created successfully!'});
})

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const filteredDrink = drinks.filter((drink) => drink.name.toLowerCase().includes(name.toLowerCase()));

  if (!filteredDrink.length) return res.status(404).json({ message: 'There are no drinks matching'});
  return res.status(200).json(filteredDrink);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((drink) => drink.id === Number(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found' });

  return res.status(200).json(drink);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});