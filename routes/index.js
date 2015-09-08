var express = require('express');
var router = express.Router();
var createUsers = require('../modules/genUsers');
var Users = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
    var usersArray = createUsers(20);
    res.render('index', { usersJSON: usersArray });
});

module.exports = router;
