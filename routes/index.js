var express = require('express');
var router = express.Router();
var randomUsers = require('../libs/randomUsers');
var userDB = require('../models/user.js');


// GET index on page load
router.get('/', function(req, res, next) {
    userDB.find({}, function(err, users){
       if(err){
           console.log(err);
           next(err);
       } else {
           res.render('index', { title: 'Random User Generator', users: users});
       }
    });
});

//UPDATE index
router.get('/update', function(req, res, next) {
    userDB.find({}, function(err, users){
        if(err){
            console.log(err);
            next(err);
        } else {
            var users = users;
            res.send({users: users});
        }
    });
});


//when generate button is clicked add 20 users to the database
router.get('/generate', function(req, res, next) {

    //create userArray of 20 random users
    var users = randomUsers(20);

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

//find and delete user by id
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
