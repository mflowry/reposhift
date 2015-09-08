// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

// random name
var name = chance.name();

module.exports = name;