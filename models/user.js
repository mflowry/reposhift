var mongoose = require('mongoose'),
    Schema= mongoose.Schema;

var UserSchema =  new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    sex: {type: String, required: true},
    location: {type: String, required: true},
    twitterHandle: {type: String, required: true}
});

module.exports=mongoose.model('User', UserSchema);