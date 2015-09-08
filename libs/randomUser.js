var age = require('./age');
var location = require('./location');
var name = require('./name');
var sex = require('./sex');
var twitter = require('./twitter');


//user constructor BASIC
var User = function(name, age, sex, location, twitter){
        this.name = name,
        this.age = age,
        this.sex = sex,
        this.location = location,
        this.twitter = twitter
};

// user constructor function
//var user = function(){chance.mixin({
//    'randomUser': function() {
//        return {
//            name: name(),
//            age: age(),
//            sex: sex(),
//            location: location(),
//            twitter: twitter()
//        };
//    }
//})};

//// create random user
//var randomUser = new User(name(), age(), sex(), location(), twitter());

var createUsers = function(quantity){
    var usersArray = [];
    for(var i = 0; i < quantity; i++){
        var randomUser = new User(name(), age(), sex(), location(), twitter());
        usersArray.push(randomUser);
    }
    return usersArray;
};

// save user to DB

module.exports = createUsers;