const express = require('express');
const app = express();

const bodyParser = require('body-parser')   //to pass json data
const mysql = require('mysql2')
const connection = require ('../database/config-db')
/*======================================================= */
const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'India',
];

app.get('/api/countries', (req, res) => {
  res.json(countries);
});

/*======================================================= */
module.exports = app;