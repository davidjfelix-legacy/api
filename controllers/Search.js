'use strict';

var url = require('url');


var Search = require('./SearchService');


module.exports.allergensGET = function allergensGET (req, res, next) {
  Search.allergensGET(req.swagger.params, res, next);
};

module.exports.ingredientsGET = function ingredientsGET (req, res, next) {
  Search.ingredientsGET(req.swagger.params, res, next);
};

module.exports.mealsGET = function mealsGET (req, res, next) {
  Search.mealsGET(req.swagger.params, res, next);
};
