'use strict';

var url = require('url');


var Users = require('./UsersService');


module.exports.meGET = function meGET (req, res, next) {
  Users.meGET(req.swagger.params, res, next);
};

module.exports.meByTokenPOST = function meByTokenPOST (req, res, next) {
  Users.meByTokenPOST(req.swagger.params, res, next);
};

module.exports.usersPOST = function usersPOST (req, res, next) {
  Users.usersPOST(req.swagger.params, res, next);
};

module.exports.usersUserIdGET = function usersUserIdGET (req, res, next) {
  Users.usersUserIdGET(req.swagger.params, res, next);
};
