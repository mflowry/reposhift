// require chance and create new instance of chance
var Chance = require('chance'),
    chance = new Chance();

// export random twitter
module.exports.twitter = function() {
    return chance.twitter();
};