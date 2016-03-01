'use strict';

var url = require('url');


var Auth = require('./AuthService');


module.exports.authGoogleByJwtPOST = function authGoogleByJwtPOST (req, res, next) {
  Auth.authGoogleByJwtPOST(req.swagger.params, res, next);
};
