var age = require('./age');
var location = require('./location');
var name = require('./name');
var sex = require('./sex');
var twitter = require('./twitter');
var User = require('./randomUser');

// multiple users function
var createUsers = function(quantity){
    var usersArray = [];
    for(var i = 0; i < quantity; i++){
        var randomUser = new User(name(), age(), sex(), location(), twitter());
        usersArray.push(randomUser);
    }
    return usersArray;
};

module.exports = createUsers;