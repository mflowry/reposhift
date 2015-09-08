var express = require('express');
var router = express.Router();
var Chance = require('chance');
var randomUser = require('../libs/randomUser');
var userDB = require('../models/user.js');

var chance = new Chance();

// GET index
router.get('/', function(req, res, next) {
    userDB.find({}, function(err, users){
       if(err){
           console.log(err);
           next(err);
       } else {
           console.log(users);
           res.render('index', { title: 'Random User Generator', users: users});
       }
    });
    // render index with randomUsers
    //res.render('index', { title: 'Random User Generator', user: users});
});


//when generate button is clicked add 20 users to the database
router.get('/generate', function(req, res, next) {

    //create userArray of 20 random users
    var users = randomUser(20);

    //saves each user in database
    users.forEach(function(elem){
       var user = new userDB(elem);
        user.save(function(err){
            if(err){
                console.log(err);
                next(err);
            }
        })
    });

    res.sendStatus(200);

});

router.delete('/:id', function(req, res, next) {

   userDB.findByIdAndRemove(req.params.id, function(err, user){
       if(err){
           console.log(err);
           next(err);
       } else {
           res.sendStatus(200);
       }
   })

});

module.exports = router;
