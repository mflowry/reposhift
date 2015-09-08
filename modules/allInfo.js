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

    var twentyArray = [];
    //calls the newUser constructor 20 times
    //push each returned user to an array to aggregate users to send back to client
    for(var i=0; i<20;i++){
        //call the submodules and creates new user as an obj
        var randomUser = {

            name: name.name(),
            age: age.age(),
            location: locat.location(),
            sex: gender.gender(),
            id: id.id(),
            twitterHandle: tweets.tweets()

        };
        twentyArray.push(randomUser)

        User.create(randomUser);

    }

    //save user to database
    //return user obj to be used by the route
    return(twentyArray);
};


module.exports = allInfo;