/**
 * Created by MrComputer on 9/8/15.
 */
var Chance = require('chance');
var gender = {};
var chance = new Chance();

gender.gender = function() {
    return chance.gender();
};


// export the module
module.exports = gender;