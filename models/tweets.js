var Chance = require('chance');
var chance = new Chance();


var tweets = {};

tweets.newTweets = function(){
    return chance.twitter();
};

module.exports = tweets;