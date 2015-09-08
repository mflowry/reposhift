//this is a module that randomly generates a gender

var Chance = require('chance');

//Instantiate Chance so that it can be used
var chance = new Chance();

var gender = function(){return chance.gender()};

module.exports =  gender;

