var name = require('./name');
var age = require('./age');
var locat = require('./location');
var gender = require('./sex');
var tweets = require('./twitter');
var id = require('./id');
var mongoose= require('mongoose');
var User = require('../models/user');

var allInfo = {};


allInfo.newUser= function(){
    //call the submodules and creates new user as an obj
    var randomUser = {
        name: name.name(),
        age: age.age(),
        location: locat.location(),
        sex: gender.gender(),
        // don't want to use a ssn, want the db id field
        //id: id.id(),
        twitterHandle: tweets.tweets()};
    //save user to database
    User.create(randomUser);
    //return user obj to be used by the route
    return(randomUser);
};


module.exports = allInfo;