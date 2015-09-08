var randomUser = require('./randomUser');

// create multiple new users
// takes in a quantity of users you wish to create
var createUsers = function(quantity){

    // empty array to store new users
    var usersArray = [];

    // for loop to create users
    for(var i = 0; i < quantity; i++){
        usersArray.push(randomUser());
    }
    return usersArray;
};

module.exports = createUsers;