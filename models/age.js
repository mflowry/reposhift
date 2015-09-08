/**
 * Created by MrComputer on 9/8/15.
 */
var Chance = require('chance');
var age = {};
var chance = new Chance();

age.age = function() {
    return chance.age({type: 'adult'});
    };


// export the module
module.exports = age;