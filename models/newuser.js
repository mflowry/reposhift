var age = require('./age');
var locat = require('./location');
var name = require('./name');
var gender = require('./sex');
var tweets = require('./twitter');

function newuser(){
    this.name = name.name();
    this.age = age.age();
    this.gender = gender.gender();
    this.locat = locat.location();
    this.tweets = tweets.tweets();
}
//in users.js a new user will be created with this export
module.exports = newuser;