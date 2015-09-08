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

// create single new user
var newUser = function(){
    return new User(name(), age(), sex(), location(), twitter());
};

module.exports = newUser;