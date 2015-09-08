var express = require('express');
var router = express.Router();
var createUsers = require('../modules/genUsers');
var Users = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  var usersArray = createUsers(20);
  console.log(usersArray);
  res.render('index', { title: 'Express' });
});

module.exports = router;
