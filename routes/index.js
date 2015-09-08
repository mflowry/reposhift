var express = require('express');
var router = express.Router();
var createUsers = require('../modules/genUsers');
var Users = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  Users.find({}, function(err, users){
    if(err){
      console.log(err);
      next(err);
    } else{
      res.render('index', {users: users });
    }
  });
});

router.delete('/all', function(req, res, next){
  Users.remove({}, function(err, users){
    if(err){
      console.log(err);
      next(err);
    } else {
      res.sendStatus(200);
    }
  })
});

router.get('/generate', function(req,res,next){
    createUsers(20);
    res.sendStatus(200);
});

router.delete('/:id', function(req,res,next){
  Users.findByIdAndRemove(req.params.id, function(err, user){
    if(err){
      console.log(err);
      next(err);
    } else {
      res.sendStatus(200);
    }
  })
});

//UPDATE index
router.get('/update', function(req, res, next) {
  Users.find({}, function(err, users){
    if(err){
      console.log(err);
      next(err);
    } else {
      res.send({users: users});
    }
  });
});

module.exports = router;
