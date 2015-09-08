var express = require('express');
var router = express.Router();
var allinfo = require('../models/allinfo.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //all users generate - index.jade contains button, app.js needs to pull info, mongoose not set up yet. 
  var users = [];
  var i = 0;
  while(i < 20) {
    users.push(new allinfo);
    i++
  }
  res.json(users);
});

module.exports = router;
