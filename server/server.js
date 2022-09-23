const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());

const dogRoutes = require('./controllers/dogs');
app.use('/dogs', dogRoutes);

module.exports = app;
