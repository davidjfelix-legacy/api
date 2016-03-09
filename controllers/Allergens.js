'use strict';

var url = require('url');


var Allergens = require('./AllergensService');


module.exports.allergensGET = function allergensGET (req, res, next) {
  Allergens.allergensGET(req.swagger.params, res, next);
};
