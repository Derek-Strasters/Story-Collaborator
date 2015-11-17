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
var Blurb = require('./models/db');

//ROUTES---------------------------------------------
var router = express.Router();

// Configure logging for all requests
router.use(function(req, res, next) {
  console.log('Incoming request...'); // replace with logging
  next();
});

router.route('/blurbs')
  //POST
  .post(function(req, res) {
    var blurb = new Blurb();
    // Setting default values
    blurb.author = req.body.author || "Anonymous";
    blurb.submitted = Date.now();
    blurb.votes = 0;
    blurb.trunk = req.body.trunk || "Unspecified";
    blurb.text = req.body.text || "Empty";    
    
    blurb.save(function(err) {
      if (err) { res.send("Save Error: " + err); }
      res.json({ message: "Blurb created" });
    });    
  })
  //GET all blurbs
  .get(function(req, res) {
    Blurb.find(function(err, blurbs) {
      if (err) { res.send(err); }
      res.json(blurbs);
    });
  });

// Configure individual blurb lookup
router.route('blurbs/:blurb_id') 
  //GET
  .get(function(req, res) {
    Blurb.findById(req.params.blurb_id, function(err, blurb) {
      if (err) { res.send(err); }
      res.json(blurb);
    });
  })
  //PUT
  .put(function(req, res) {
    Blurb.findById(req.params.blurb_id, function(err, bear) {
      if (err) { res.send(err); }
      // Setting new parameters
      blurb.author = req.body.author || "";
      blurb.submitted = Date.now();
      blurb.votes = 0;
      blurb.trunk = req.body.trunk || "";
      blurb.text = req.body.text || "";
      
      blurb.save(function(err) {
        if (err) { res.send(err); }
        res.json({ message: 'Blurb Updated' });
      });
    });
  })
  //DELETE
  .delete(function(req, res) {
    Blurb.remove({
      _id: req.params.blurb_id
    }, function(err, blurb) {
      if (err) { res.send(err); }
      res.json({ message: 'Successfully Deleted' });
    });
  });

// Registering the routes at the root of /api
app.use('/api', router);

// Starting the server
app.listen(port);
console.log('Nodejs Server Listening on port ' + port);
