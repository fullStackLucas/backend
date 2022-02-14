const { Router } = require('express');
const helloRoute = Router();

helloRoute.post('/', (req, res, _next) => {
  const { name } = req.body;

  res.status(200).json({ message: `Hello ${name}` })
})

module.exports = helloRoute;