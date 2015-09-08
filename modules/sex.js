var Chance = require('chance');
var chance = new Chance();
var determineSex = {
    determineSex: function(){
        return chance.gender();
    }
};
module.exports = determineSex;