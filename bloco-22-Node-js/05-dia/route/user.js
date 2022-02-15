const { Router } = require('express');
const { validateUsername ,validateRegister} = require('../middlewares/validateRegister');
const user = Router();

user.post('/register', validateUsername, validateRegister, (_req, res) => {
  res.status(201).json({ message: 'user created' });
});

user.post('/login', validateRegister, (_req, res) => {
  Math.random().toString(36).substring(7);
  res.status(201).json({ message: 'user created' });
});
