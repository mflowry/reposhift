var express = require('express');
var router = express.Router();
var users = require('randomUser');

// GET index
router.get('/', function(req, res, next) {

    // generate random users
    chance.n(randomUser(), 20);

    // pull users from DB and store in variable
    var randomUsers = ;

    // render index with randomUsers
    res.render('index', { title: 'Random User Generator', randomUsers: users });
});

module.exports = router;
