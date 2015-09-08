/**
 * Created by MrComputer on 9/8/15.
 */
var Chance = require('chance');
var name = {};
var chance = new Chance();

name.name = function() {
    return chance.name();
};


// export the module
module.exports = name;