var express = require('express');
var router = express.Router();
var allInfo = require('../modules/allInfo');
var mongoose = require('mongoose');
var user = require('../models/user.js')

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

router.delete('/:id', function(req,res,next){
  var id = req.body.id;
  user.findByIdAndRemove(id, function(err, removed){
    if(err){
      return res.status(500).send('Something broke!');
    }else {
      return res.status(200).send('ok');
    }
  })

});

module.exports = router;
