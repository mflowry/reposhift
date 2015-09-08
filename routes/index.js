var express = require('express');
var router = express.Router();
var allinfo = require('../models/allinfo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
