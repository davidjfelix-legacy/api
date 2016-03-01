'use strict';

exports.ingredientsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "ingredients" : [ {
    "name" : "aeiou",
    "description" : "aeiou"
  } ]
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.mealsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * lat (Double)
  * lng (Double)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "meals" : [ {
    "portionsAvailable" : "",
    "metadata" : [ { } ],
    "lng" : "",
    "description" : "aeiou",
    "isActive" : true,
    "availableFrom" : { },
    "availableTo" : "",
    "allergens" : [ {
      "name" : "aeiou",
      "description" : "aeiou"
    } ],
    "lastUpdated" : "",
    "price" : 1.3579000000000001069366817318950779736042022705078125,
    "name" : "aeiou",
    "ingredients" : [ {
      "name" : "aeiou",
      "description" : "aeiou"
    } ],
    "meal_id" : { },
    "lat" : { },
    "portions" : ""
  } ]
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

