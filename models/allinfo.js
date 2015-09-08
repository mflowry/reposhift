var name = require('./names.js');
var age = require('./ages.js');
var locat = require('./locations.js');
var gender = require('./genders.js');
var tweets = require('./tweets');

function allinfo() {
        this.name = name.newName();
        this.age = age.newAge();
        this.location = locat.newLocation();
        this.gender = gender.newGender();
        this.twitter = tweets.newTweets();
    }

module.exports = allinfo;