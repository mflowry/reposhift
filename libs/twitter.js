// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

// random Twitter handle
var twitter = chance.twitter();

module.exports = twitter;