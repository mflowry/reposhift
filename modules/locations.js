var Chance = require('chance');
var chance = new Chance();

var locat = {};

locat.newLocation = function() {
    return chance.country({full: true});
}

module.exports = locat;