var name = require("./name");
var age = require("./age");
var sex = require("./sex");
var location = require("./location");
var twitter = require("./twitter");

//console.log(name.randomName());
//console.log(age.randomAge());
//console.log(sex.determineSex());
//console.log(location.determineLocation());
//console.log(twitter.twitter());

// object constructor
function randomUser (){
    this.name = name.randomName();
    this.age = age.randomAge();
    this.sex = sex.determineSex();
    this.location = location.determineLocation();
    this.twitter = twitter.twitter();
}

var testUser = new randomUser();

console.log(testUser);