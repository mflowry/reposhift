// require chance and create new instance of chance
var Chance = require('chance'),
    chance = new Chance();


// create object to export
var name = {

    // getName function uses chance to generate new name and returns name
    getName : function() {
        var name = chance.name();
        return name;
    }

};

// export module
module.exports = name;