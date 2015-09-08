// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

// random sex
var sex = function(){return chance.gender()};

module.exports = sex;
