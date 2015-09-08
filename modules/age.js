//this is a module that randomly generates an age

var Chance = require('chance');

//Instantiate Chance so that it can be used
var chance = new Chance();

var age = {
    age: function(){return chance.age();}
};

module.exports =  age;

