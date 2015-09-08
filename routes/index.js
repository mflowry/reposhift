var express = require('express');
var router = express.Router();
var allinfo = require('../models/allinfo');

/* GET home page. */
router.get('/', function(req, res, next) {
  var newUser = new allinfo();
  console.log(newUser);
  res.render('index', { title: 'Express' });
});

module.exports = router;
