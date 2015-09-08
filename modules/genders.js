var Chance = require('chance');
var chance = new Chance();

var gender = {};

gender.newGender = function(){
    return chance.gender();
};

module.exports = gender;