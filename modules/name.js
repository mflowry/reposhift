//this is a module that randomly generates a name

var Chance = require('chance');

//Instantiate Chance so that it can be used
var chance = new Chance();

var name = function(){return chance.name()};

module.exports =  name;

