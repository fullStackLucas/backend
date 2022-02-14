const { Router } = require('express');
const greetingsRoute = Router();

greetingsRoute.post('/', (req, res, _next) => {
  const { name, age } = req.body;

  if (Number(age) <= 17) return res.status(401).json({ message: 'Unauthorized'});

  return res.status(200).json({ message: `Hello, ${name}!` });
})

module.exports = greetingsRoute;