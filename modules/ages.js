var Chance = require('chance');
var chance = new Chance();

var age = {};

age.newAge = function() {
    return chance.age();
};

module.exports = age;