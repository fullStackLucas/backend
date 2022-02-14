const express = require('express');
const bodyParser = require('body-parser');

const pingRoute = require('./routes/Ping');

const app = express();

app.use(bodyParser.json());

app.get('/', (_req, res, _next) =>{
  res.status(200).json({message: "Hello World!"})
})

app.use('/ping', pingRoute);

app.listen('3001', () => console.log('listening on http://localhost:3001'));