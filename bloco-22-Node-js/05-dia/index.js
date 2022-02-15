const express = require('express');
const bodyParser = require('body-parser');
const user = require('./route/user')

const app = express();

app.use(bodyParser.json());

app.get("/", (_req, res) => {
  return res.status(200).json({ message: 'Hello World!' });
})

app.use('/user', user)

app.listen('3001', () => console.log('Running on port 3001'));
