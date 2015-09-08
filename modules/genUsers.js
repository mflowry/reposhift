var age = require('./age.js');
var name = require('./name.js');
var location = require('./location.js');
var twitter = require('./twitter.js');
var gender = require('./sex.js');
var User = require('./genUser.js');


var createUsers = function (quantity){
    var usersArray = [];

    for(var i = 0; i <= quantity; i++){
        var user = new User(name());
        usersArray.push(user);
    }

    return usersArray;
};

module.exports = createUsers;