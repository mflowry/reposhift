/**
 * Created by MrComputer on 9/8/15.
 */
var Chance = require('chance');
var locat = {};
var chance = new Chance();

locat.location = function() {
    return chance.country({full: true});
};


// export the module
module.exports = locat;