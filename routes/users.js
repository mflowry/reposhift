var express = require('express');
var router = express.Router();
var allinfo = require('../models/allinfo.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = [];
  var i = 0;
  while(i < 20) {
    users.push(new allinfo);
    i++
  }
  console.log(users);
  res.json(users);
});

module.exports = router;
