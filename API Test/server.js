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

// Setting up the DB and accessing the blurb  model. Be aware that
// this also contains the user information.
//mongoose.connect('mongodb:/\/localhost/blurb');

// Registering the routes at the root of /api
// app.use('/api', route);
app.use('/api/blurbs', require('./routes/blurb'));
app.use('/api/users', require('./routes/user'));

// Starting the server
app.listen(port);
console.log('Nodejs Server Listening on port ' + port);
