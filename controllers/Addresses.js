'use strict';

var url = require('url');


var Addresses = require('./AddressesService');


module.exports.addressGET = function addressGET (req, res, next) {
  Addresses.addressGET(req.swagger.params, res, next);
};

module.exports.addressPOST = function addressPOST (req, res, next) {
  Addresses.addressPOST(req.swagger.params, res, next);
};

module.exports.addressAddressIdGET = function addressAddressIdGET (req, res, next) {
  Addresses.addressAddressIdGET(req.swagger.params, res, next);
};

module.exports.addressAddressIdPUT = function addressAddressIdPUT (req, res, next) {
  Addresses.addressAddressIdPUT(req.swagger.params, res, next);
};

module.exports.addressAddressIdDELETE = function addressAddressIdDELETE (req, res, next) {
  Addresses.addressAddressIdDELETE(req.swagger.params, res, next);
};

module.exports.addressAddressIdPATCH = function addressAddressIdPATCH (req, res, next) {
  Addresses.addressAddressIdPATCH(req.swagger.params, res, next);
};
