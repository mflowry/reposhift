const express = require('express');
const router = express.Router();
const newUser = require('../modules/newUser');
const chance = require('chance');



/* GET home page. */
router.get('/', function(req, res, next) {
  var i = 20;
  var userArray = [];
  while(i > 0){

    i--;
    userArray.push(newUser);
  }
  console.log(newUser.User());

  res.sendStatus(200);
});


module.exports = router;
