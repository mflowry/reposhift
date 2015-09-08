//this is a module that randomly generates a location (country)

var Chance = require('chance');

//Instantiate Chance so that it can be used
var chance = new Chance();

var country = function(){return chance.country({ full: true })};

module.exports =  country;

