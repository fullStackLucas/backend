const { Router } = require('express');
const { drinks } = require('../data');


const drinksRoute = Router();
const drinksSearchRoute = Router();
const drinksByIdRoute = Router();

drinksRoute.get('/', (_req, res) => {
  const ordereDrinks = drinks.sort(compare); 
  return res.json(ordereDrinks);
});

drinksRoute.post('/', (req, res) => {
  const { id, name, price, waitTime } = req.body;
  drinks.push({ id, name, price, waitTime});
  return res.status(201).json({ message: 'Drink created successfully!'});
});

drinksSearchRoute.get('/', (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredDrinks = drinks.filter(drink => drink.name.includes(name)
    && drink.price <= Number(maxPrice));

  if (!filteredDrinks.length) return res.status(404).json({ message: 'There are no drinks matching'})

  return res.status(200).json(filteredDrinks);
});

drinksByIdRoute.get('/', (req, res) => {
  const { id } = req.params;
  const findDrink = drinks.find((drink) => drink.id === Number(id));

  if (!findDrink) return res.status(404).json({ message: 'drink not found' });

  return res.status(200).json(findDrink);
})

drinksByIdRoute.put('/', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const indexOfDrink = drinks.findIndex((dr) => dr.id === Number(id));

  if (indexOfDrink === -1) return res.status(404).json({ message: 'Drink not found'});

  drinks[indexOfDrink] = {...drinks[indexOfDrink], name, price };

  return res.status(204).end();
});

drinksByIdRoute.delete('/', () => {
  const { id } = req.params;
  const { name, price } = req.body;

  const indexOfDrink = drinks.findIndex((dr) => dr.id === Number(id));

  if (indexOfDrink === -1) return res.status(404).json({ message: 'Drink not found'});

  drinks.splice(indexOfDrink, 1);

  return res.status(204).end();
})


module.exports = { drinksRoute, drinksSearchRoute, drinksByIdRoute };
