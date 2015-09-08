// require chance and create new instance of chance
var Chance = require('chance'),
    chance = new Chance();


// create object to export
var age = {

    // getAge function uses chance to generate age and returns age
    getAge : function() {
        var age = chance.age({type: 'adult'});
        return age;
    }

};

// export module
module.exports = age;