var age = require('./age');
var location = require('./location');
var name = require('./name');
var sex = require('./sex');
var twitter = require('./twitter');


// user constructor
var User = function(name, age, sex, location, twitter){
        this.name = name,
        this.age = age,
        this.sex = sex,
        this.location = location,
        this.twitter = twitter
};

// multiple users function
//var createUsers = function(quantity){
//    var usersArray = [];
//    for(var i = 0; i < quantity; i++){
//        var randomUser = new User(name(), age(), sex(), location(), twitter());
//        usersArray.push(randomUser);
//    }
//    return usersArray;
//};

module.exports = User;