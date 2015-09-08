var name = require("./name");
var age = require("./age");
var sex = require("./sex");
var location = require("./location");
var twitter = require("./twitter");
function User(array) {
    this.name=name.name();
    this.age=age.age();
    this.sex=sex.determineSex();
    this.location=location.determineLocation();
    this.twitter=twitter.twitter();
}
module.exports = User;