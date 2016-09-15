module.exports = function(models){
  var express = require('express');
  var router = express.Router();
  var Ad = models.Ad;

  /* Get a single Ad*/
  router.get('/:id', function(req, res, next) {
    Ad.findById(req.params.id).then(function(ad){
      res.send(ad);
    }).error(function(err){
      //TODO:LOGGING look into error handling/logging
    });
  });

  /*Gets all Ads*/
  router.get('/', function(req, res, next) {
    Ad.findAll({
    }).then(function(ad){
      res.send(ad);
    }).error(function(err){
      //TODO:LOGGING look into error handling/logging
    });
  });


  router.put('/', function(req, res, next) {
    Ad.create({
      Title: req.body.Title,
      Description: req.body.Description,
      CategoryId: req.body.CategoryId,
      MarketId: req.body.MarketId,
      PreferredContactMethod: req.body.PreferredContactMethod,
      UserId: req.body.UserId,
      AdStateId: req.body.AdStateId
    }).then( function(obj){
      res.sendStatus(200);
    });
  });

  return router;
};
