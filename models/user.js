var mongoose = require('mongoose')
var Schema = mongoose.Schema

// user schema
var UserSchema = new Schema({
   name: { type: String, required: true},
   age: {type: Number, required: true},
   sex: {type: String, require: true},
   location: {type: String, require: true},
   twitter: {type: String, require: true}
});

module.exports = mongoose.model('User', UserSchema);