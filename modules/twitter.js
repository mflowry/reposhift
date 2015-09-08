/**
 * Created by MrComputer on 9/8/15.
 */
var Chance = require('chance');
var tweets = {};
var chance = new Chance();

tweets.tweets = function() {
    return chance.twitter();
};



// export the module
module.exports = tweets;