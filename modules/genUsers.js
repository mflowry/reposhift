var age = require('./age.js');
var name = require('./name.js');
var location = require('./location.js');
var twitter = require('./twitter.js');
var gender = require('./sex.js');
var User = require('./genUser.js');
var mongoose = require('mongoose');
var dbUser = require('../models/users');


var createUsers = function (quantity){

    // empty array to store new users
    var usersArray = [];

    // for loop to create users and store in database
    for(var i = 0; i < quantity; i++){

        // call new user function, passing in random attributes
        var user = new User(name(), age(), gender(), location(), twitter());

        // write users to database
        dbUser.create(user);

        // store users in array
        usersArray.push(user);
    }

    return usersArray;
};

module.exports = createUsers;