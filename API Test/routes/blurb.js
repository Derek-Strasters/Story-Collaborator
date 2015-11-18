var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();
var Blurb = require('../models/db');

router.use(function(req, res, next) {
  console.log("Incoming request...");
  next();
});

router.route('/blurbs')
  // POST
  .post(function(req, res) {
    var blurb = new Blurb();
    blurb.author = req.body.author || "Anonymous";
    blurb.submitted = Date.now();
    blurb.votes = 0;
    blurb.trunk = req.body.trunk || "Unspecified";
    blurb.text = req.body.text || "Empty";

    blurb.save(function (err) {
      if(err) { res.send("Save Error: " + err); }
      res.json({ message: "Blurb Created" });
    });
  })
  // GET all
  .get(function(req, res) {
    Blurb.find(function(err, blurbs) {
      if (err) { res.send(err); }
      res.json(blurbs);
    });
  });

router.route('/blurbs/:blurb_id')
  // GET by ID
  .get(function(req, res) {
    Blurb.findById(req.params.blurb_id, function(err, blurb) {
      if (err) { res.send("Get Error: " + err); }
      res.json(blurb);
    });
  })
  // PUT by ID
  .put(function(req, res){
    Blurb.findById(req.params.blurb_id, function(err, blurb){
      if (err) { res.send(err); }
      blurb.author = req.body.author || blurb.author;
      blurb.submittee = Date.now();
      blurb.votes = blurb.votes;
      blurb.trunk = req.body.trunk || blurb.trunk;
      blurb.text = req.body.text || blurb.text;

      blurb.save(function(err) {
        if (err) { res.send(err); }
        res.json({ message: 'Blurb Updated' });
      });
    });
  })
  // DELETE by ID
  .delete(function(req, res) {
    Blurb.remove({
      _id: req.params.blurb_id
    }, function(err, blurb) {
      if (err) { res.send(err); }
      res.json({ message: 'Successfully Deleted' });
    });
  });

module.exports = router;
