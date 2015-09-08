// require chance and create new instance of chance
var Chance = require('chance'),
    chance = new Chance();

// export random age
module.exports.randomAge = function() {
    return chance.age();
};