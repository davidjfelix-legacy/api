'use strict';

exports.addressGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = { };
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.addressPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = { };
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.addressAddressIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * addressId (UUID)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.addressAddressIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * addressId (UUID)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.addressAddressIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * addressId (UUID)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.addressAddressIdPATCH = function(args, res, next) {
  /**
   * parameters expected in the args:
  * addressId (UUID)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

