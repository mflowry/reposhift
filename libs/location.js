// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

// random zip code
var location = chance.zip();

module.exports = location;