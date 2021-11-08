'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const PORT= process.env.PORT || 8080;

// Esoteric Resources
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./auth/routes.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.status(200).send("All is going to work here  🤩 ");
})
app.get('/status', (req, res) => {

  res.status(200).send({
      "status": "running",
      "port": 8080

  });
})

app.get('/bad', (req, res, err) => {
  throw new Error('Something wrong happen here 😶')})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRoutes);

// Catchalls
app.use(notFound);
app.use(errorHandler);

function start() {
    app.listen(PORT, () => {
        console.log(`Listening to the port ${PORT}`);
    })
}
module.exports = {
  server: app,
  start: start
};

