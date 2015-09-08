/**
 * Created by MrComputer on 9/8/15.
 */
var chance = require('chance');

var chance = new chance();
var age = chance.age({type: 'adult'});

console.log(age);

// export the module
module.exports =