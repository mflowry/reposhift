
// user constructor function
chance.mixin({
    'randomUser': function() {
        return {
            name: name(),
            age: age(),
            sex: sex(),
            location: location(),
            twitter: twitter()
        };
    }
})

// create random user
chance.randomUser();

// save user to DB

module.exports = randomUser;