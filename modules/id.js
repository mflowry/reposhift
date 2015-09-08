
var Chance = require('chance');
var id = {};
var chance = new Chance();

id.id = function() {
    return chance.ssn();
};


// export the module
module.exports = id;