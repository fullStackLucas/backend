const { Router } = require('express');
const pingRoute = Router();

pingRoute.get('/', (_req, res, _next) => {
  res.status(200).json({ message: 'pong' })
})

module.exports = pingRoute;