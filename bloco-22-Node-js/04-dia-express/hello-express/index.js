const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const recipesRoute = require('./routes/recipesRoute');
const drinksRoute = require('./routes/drinksRoute');

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

app.use('/drinks', drinksRoute);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});