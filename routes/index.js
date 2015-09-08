const express = require('express');
const router = express.Router();
var newUser = require('../modules/newUser');
const chance = require('chance');


var Users = require('../models/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var i = 20;
  var userArray = [];
  while(i > 0) {
    var user = newUser;
    var usermodel = new Users(user);
    console.log(user);
    i--;
    userArray.push(user);


    usermodel.save(function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
  console.log (JSON.stringify(userArray));

  res.sendStatus(200);
});



module.exports = router;
