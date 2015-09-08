var express = require('express');
var router = express.Router();
var newuser = require('../models/newuser.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var user = new newuser; // this will create a newuser.
  console.log(user);
  res.send('respond with a resource');
});

module.exports = router;
