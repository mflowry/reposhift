var Chance = require('chance');
var chance = new Chance();

// export random name
module.exports.determineSex = function() {
    return chance.gender();
};