// require chance and create new instance of chance
var Chance = require('chance'),
    chance = new Chance();


// create object to export
var twitter = {

    // handle function uses chance to generate new twitter handle and returns handle
    handle : function() {
        var handle = chance.twitter();
        return handle;
    }

};

// export module
module.exports = twitter;