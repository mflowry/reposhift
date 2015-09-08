//this module generates a User

var User = function(name, age, sex, location, twitter){
    this.name = name;
    this.age = age;
    this.location = location;
    this.sex = sex;
    this.twitter = twitter;
};

module.exports = User;

