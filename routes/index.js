const express = require('express');
const router = express.Router();
const name = require('../modules/name');
const age = require('../modules/age');
const twitter = require('../modules/twitter');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendStatus(200);
});

module.exports = router;
