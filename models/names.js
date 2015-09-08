var Chance = require('chance');
var chance = new Chance();

var name = {};

name.newName = function(){
    return chance.name();

};

module.exports = name;
