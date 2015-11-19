var express = require('express'),
  mongoose = require('mongoose'),
  router = express.Router(),
  User = require('../models/db');

router.use(function(req, res, next) {
  console.log("Incoming request...");
  next();
});

router.route('/')
  // POST
  .post(function(req, res){
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.userName = req.body.userName;
    user.avatar = req.body.avatar || null;
    user.email = req.body.email;
    user.created = Date.now();
    user.loggedIn = false;
    user.lastLogin = Date.now();
    user.noOfBlurbs = 0;
    user.blurbs = [null];
    user.votedOnBlurbs = [null];
    user.rating = 0;

    user.save(function (err) {
      if (err) { res.send(err); }
      res.json({ message: "User created" });
    });  
  })
  // GET all
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err) { res.send(err); }
      res.json(users);
    });
  });

router.route('/:user_id')
  //GET by ID
  .get(function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err) { res.send(err); }
      res.json(user);
    });
  })
  //PUT by ID
  .put(function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err) { res.send(err); }
      user.firstName = req.body.firstName || user.firstName;  
      user.lastName = req.body.lastName || user.lastName;
      user.userName = req.body.userName || user.userName;
      user.avatar = req.body.avatar || user.avatar;
      user.email = req.body.email || user.email;
  
      user.save(function(err, user) {
        if (err) { res.send(err); }
        res.json({ message: "User update" });
      });
    });
  })
  // DELETE by ID
  .delete(function(req, res) {
    User.remove({
      _id: req.params.user_id
    }, function(err, user) {
      if (err) { res.send(err); }
      res.json({ message: "Successfully Deleted" });
    });
  });

var userRouter = router;
module.exports = userRouter;
