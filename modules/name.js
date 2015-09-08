// require chance and create new instance of chance
var Chance = require('chance');
var chance = new Chance();

// export random name
module.exports.randomName = function() {
    return chance.name();
};