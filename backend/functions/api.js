const bodyParser = require('body-parser');
const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');

const authRoutes = require('../routes/auth');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.use(authRoutes);

app.use((error, req, res, next) => {
  const status = error.status;
  const message = error.message;
  res.status(status).json({ message: message });
});

mongoose.connect(process.env.DB).then((_) => console.log('connected to database'));

module.exports.handler = serverless(app);
