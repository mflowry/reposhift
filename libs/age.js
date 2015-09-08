// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

// random age
var age = chance.age();

module.exports = age;