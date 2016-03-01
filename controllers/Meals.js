'use strict';

var url = require('url');


var Meals = require('./MealsService');


module.exports.mealsGET = function mealsGET (req, res, next) {
  Meals.mealsGET(req.swagger.params, res, next);
};

module.exports.mealsPOST = function mealsPOST (req, res, next) {
  Meals.mealsPOST(req.swagger.params, res, next);
};

module.exports.mealsMealIdGET = function mealsMealIdGET (req, res, next) {
  Meals.mealsMealIdGET(req.swagger.params, res, next);
};

module.exports.mealsMealIdPUT = function mealsMealIdPUT (req, res, next) {
  Meals.mealsMealIdPUT(req.swagger.params, res, next);
};

module.exports.mealsMealIdDELETE = function mealsMealIdDELETE (req, res, next) {
  Meals.mealsMealIdDELETE(req.swagger.params, res, next);
};

module.exports.mealsMealIdPATCH = function mealsMealIdPATCH (req, res, next) {
  Meals.mealsMealIdPATCH(req.swagger.params, res, next);
};
