module.exports = function(models){
  var express = require('express');
  var router = express.Router();
  var User = models.User;

  /* Get single user*/
  router.get('/:id', function(req, res, next) {
    console.log(req);
    User.findById(req.params.id).then(function(user){
      res.send(user);
    }).error(function(err){
      //TODO:LOGGING look into error handling/logging
    });
  });

  /* Get all users*/
  router.get('/', function(req, res, next){
    User.findAll({
  }).then(function(users){
      res.send(users);
    }).error(function(err){
        //TODO:LOGGING look into error handling/logging
    });
  });


  /* Save new user*/
  router.put('/', function(req, res){
    User.create({
      Username: req.body.UserName,
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Email: req.body.Email,
      LastAccess: req.body.LastAccess,
      LastLogin: req.body.LastLogin,
      SessionToken: req.body.SessionToken
    }).then(function(user){
        console.log(user.UserId);
        res.send(user.UserId);
      }).error(function(err){
          //TODO:LOGGING look into error handling/logging
      });
  });


  return router;
};
