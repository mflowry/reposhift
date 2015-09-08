var express = require('express');
var router = express.Router();
var allInfo = require('../modules/allInfo');
var mongoose = require('mongoose');
var Users = require('../models/user');
var bodyparser = require('body-parser');

// create user list
router.get('/', function(req, res, next) {
  //respond with an array of 20 new users
  res.json(allInfo.newUser());

});

router.delete('/', function(req, res, next) {
 Users.findOne(req.body.id, function(err, Users){
   if (err){
       console.log(err);
   next(err);
 } else {
    Users.remove(function(err) {
      if (err) {
        console.log(err);
        next(err);
      }else{
        res.sendStatus(200);
      }
    })
  }
 });


});

module.exports = router;
