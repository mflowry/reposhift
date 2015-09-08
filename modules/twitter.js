//this is a module that randomly generates an twitter handle

var Chance = require('chance');

//Instantiate Chance so that it can be used
var chance = new Chance();

var twitter = function() {
    return '@' + chance.word() + chance.word();
};

module.exports =  twitter;

