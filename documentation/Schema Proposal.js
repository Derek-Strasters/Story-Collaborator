/*SCHEMA PROPOSAL
(Working Document)*/

// User Schema
User {
	"firstName": String,
	"lastName": String,
	"userId": String,
	"avatar": Buffer, // i.e. binary (picture)
	"email": Email,
	"created": Date,
	"loggedIn": Boolean,
	"lastLogin": Date,
	"noOfBlurbs": Number,
	"blurbs": [null], // Will contain the user's submitted blurbs
	"votedOnBlurbs": [null], // Will contain blurbs that the user has voted on
	
    // I'm back and forth on this one. It would be based on (1) The number of blubs submitted,
	// (2) the number of votes on the user's submitted blurbs, (3) the number of blurbs voted
	// into the main story trunk. The problem is that it might skew user voting habits by 
	// voting for highly-rated authors without regard to their blurb's content
	"rating": Number
}

// Blurb Schema
Blurb {
	"author": String,
	"submitted": Date,
	"votes": Number,
	"trunk": String,
	"text": String,
}

