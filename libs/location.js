// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

// random zip code
var location = function(){return chance.zip();};

module.exports = location;