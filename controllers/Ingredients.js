'use strict';

var url = require('url');


var Ingredients = require('./IngredientsService');


module.exports.ingredientsGET = function ingredientsGET (req, res, next) {
  Ingredients.ingredientsGET(req.swagger.params, res, next);
};
