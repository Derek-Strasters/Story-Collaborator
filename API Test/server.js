// Call packages
var express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

// Create the server
var app = express();

// Configure bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting the port
var port = process.env.PORT || 8080;

// Setting up the DB and accessing the blurb  model
mongoose.connect('mongodb:/\/localhost/blurb');

// Calling the routes
var router = require('./routes/blurb');

// Registering the routes at the root of /api
app.use('/api', router);

// Starting the server
app.listen(port);
console.log('Nodejs Server Listening on port ' + port);
