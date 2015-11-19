var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Connect to the database
var dbURI = 'mongodb:/\/localhost/scuba-noodle';
mongoose.connect(dbURI);

// Creating the user schema
var UserSchema = new Schema({
  "firstName": String,
  "lastName": String,
  "userId": String,
  "avatar": Buffer,
  "email": { type: String, unique: true },
  "created": {type: Date, default: Date.now },
  "loggedIn": Boolean,
  "lastLogin": Date,
  "noOfBlurbs": Number,
  "blurbs": [null],
  "votedOnBlurbs": [null],
  "rating": Number
});

// Exporting the user schema
module.exports.User = mongoose.model('User', UserSchema);

// Creating the blurb schema
var BlurbSchema = new Schema ({
  "author": String,
  "submitted": Date,
  "votes": Number,
  "trunk": String,
  "text": String
});

// Exporting the blurb schema
module.exports.Blurb = mongoose.model('Blurb', BlurbSchema);

// Disconnect from the DB on App termination
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log("Mongoose disconnected through app termination");
    process.exit(0);  
  });
});
