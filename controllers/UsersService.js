'use strict';

exports.meGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "user_id" : { },
  "name" : "aeiou",
  "email" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.meByTokenPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * jwt (JWT)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "user" : {
    "user_id" : { },
    "name" : "aeiou",
    "email" : "aeiou"
  },
  "token" : {
    "data" : "aeiou",
    "type" : "aeiou"
  }
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.usersPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.usersUserIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (UUID)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "user_id" : { },
  "name" : "aeiou",
  "email" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

