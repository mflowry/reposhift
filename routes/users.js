var express = require('express');
var router = express.Router();
var allInfo = require('../modules/allInfo');
var User = require('../models/user');
var mongoose = require('mongoose');

// create user list
router.get('/', function(req, res, next) {
  User.find({}, function(err, users){
    if(err){
      console.log(err);
      next(err);
    } else {
      res.render('index', {users: users});
    }
  });
});


router.get('/generate', function(req,res,next){
  var twentyArray = [];
  for(var i=0; i<20;i++){
    twentyArray.push(allInfo.newUser());
  }
  twentyArray.forEach(function(elem){
    var user = new User(elem);
    user.save(function(err){
      if(err){
        console.log(err);
        next(err);
      }
    })
  });
  res.sendStatus(200);
});

router.delete('/:id', function(req,res,next){
  User.findByIdAndRemove(req.params.id, function(err, user){
    if(err){
      console.log(err);
      next(err);
    } else {
      res.sendStatus(200);
    }
  })
});

//UPDATE index
router.get('/update', function(req, res, next) {
  User.find({}, function(err, users){
    if(err){
      console.log(err);
      next(err);
    } else {
      res.send({users: users});
    }
  });
});

module.exports = router;
