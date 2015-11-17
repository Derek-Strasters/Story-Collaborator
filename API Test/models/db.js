var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Creating the user schema
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
module.exports = mongoose.model('User', UserSchema);*/

// Creating the blurb schema
var BlurbSchema = new Schema ({
  "author": String,
  "submitted": Date,
  "votes": Number,
  "trunk": String,
  "text": String
});

// Exporting the blurb schema
module.exports = mongoose.model('Blurb', BlurbSchema);
