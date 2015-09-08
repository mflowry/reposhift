var mongoose = require('mongoose');
var schema = mongoose.Schema;

// create a Mongoose Schema
var userSchema = new schema({
    name: String,
    age: Number,
    sex: String,
    location: String,
    twitter: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;