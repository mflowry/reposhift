var Chance = require('chance');
var chance = new Chance();

// export random city
module.exports.determineLocation = function() {
    return chance.city();
};