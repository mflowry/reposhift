var Chance = require('chance');
var chance = new Chance();
var determineLocation = {
    determineLocation: function(){
        return chance.city();
    }
};
console.log(determineLocation.determineLocation());
module.exports = determineLocation;