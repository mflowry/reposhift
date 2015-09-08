var mongoose = require('mongoose')
var Schema = mongoose.Schema

// user schema
var UserSchema = new Schema({
   name: { type: string, required: true},
   age: {type: number, required: true},
   sex: {type: string, require: true},
   location: {type: string, require: true},
   twitter: {type: string, require: true}
});

module.exports = mongoose.model('User', UserSchema);