var express = require('express');
var router = express.Router();
var allInfo = require('../modules/allInfo');
var User=require('../models/user');
var mongoose = require('mongoose');

// create user list
router.get('/', function(req, res, next) {
  var twentyArray = [];
  //calls the newUser constructor 20 times
  //push each returned user to an array to aggregate users to send back to client
  for(var i=0; i<20;i++){
    twentyArray.push(allInfo.newUser());
  }
  //respond with an array of 20 new users
  res.json(twentyArray);

});

module.exports = router;
