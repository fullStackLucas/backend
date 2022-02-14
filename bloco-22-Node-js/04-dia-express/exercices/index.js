const express = require('express');
const bodyParser = require('body-parser');

const pingRoute = require('./routes/Ping');
const helloRoute = require('./routes/Hello');
const greetingsRoute = require('./routes/Greetings');

const app = express();

app.use(bodyParser.json());

app.get('/', (_req, res, _next) =>{
  res.status(200).json({message: "Hello World!"})
})

app.use('/ping', pingRoute);

app.use('/hello', helloRoute);

app.use('/greetings', greetingsRoute);

app.listen('3001', () => console.log('listening on http://localhost:3001'));