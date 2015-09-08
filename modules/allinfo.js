var name = require('./names.js');
var age = require('./ages.js');
var locat = require('./locations.js');
var gender = require('./genders.js');
var tweets = require('./tweets');
var mongoose= require('mongoose');
var User = require('../models/user');

var allInfo = {};


allInfo.newUser= function(){
    //call the submodules and creates new user as an obj
    var randomUser = {   name: name.newName(),
        age: age.newAge(),
        location: locat.newLocation(),
        sex: gender.newGender(),
        twitterHandle: tweets.newTweets()};
    //save user to database
        User.create(randomUser);
    //return user obj to be used by the route
        return(randomUser);
};


module.exports = allInfo;