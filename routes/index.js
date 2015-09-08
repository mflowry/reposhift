var express = require('express');
var router = express.Router();
var users = require('randomUser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Random User Generator', randomUsers: users });
});

module.exports = router;
