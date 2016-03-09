'use strict';

exports.mealsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * lat (Double)
  * lng (Double)
  * range (BigDecimal)
  * limit (BigDecimal)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "meals" : [ {
    "portions_available" : "",
    "last_updated" : "",
    "metadata" : [ { } ],
    "is_active" : true,
    "available_to" : "",
    "description" : "aeiou",
    "available_from" : { },
    "allergens" : [ {
      "name" : "aeiou",
      "description" : "aeiou",
      "id" : ""
    } ],
    "price" : 1.3579000000000001069366817318950779736042022705078125,
    "preview_image_url" : { },
    "name" : "aeiou",
    "ingredients" : [ {
      "name" : "aeiou",
      "description" : "aeiou"
    } ],
    "location" : {
      "coordinates" : "",
      "type" : "aeiou"
    },
    "meal_id" : { },
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

exports.mealsPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * meal (NewMeal)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "portions_available" : "",
  "last_updated" : "",
  "metadata" : [ { } ],
  "is_active" : true,
  "available_to" : "",
  "description" : "aeiou",
  "available_from" : { },
  "allergens" : [ {
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : ""
  } ],
  "price" : 1.3579000000000001069366817318950779736042022705078125,
  "preview_image_url" : { },
  "name" : "aeiou",
  "ingredients" : [ {
    "name" : "aeiou",
    "description" : "aeiou"
  } ],
  "location" : {
    "coordinates" : "",
    "type" : "aeiou"
  },
  "meal_id" : { },
  "portions" : ""
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.mealsMealIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * mealId (UUID)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "portions_available" : "",
  "last_updated" : "",
  "metadata" : [ { } ],
  "is_active" : true,
  "available_to" : "",
  "description" : "aeiou",
  "available_from" : { },
  "allergens" : [ {
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : ""
  } ],
  "price" : 1.3579000000000001069366817318950779736042022705078125,
  "preview_image_url" : { },
  "name" : "aeiou",
  "ingredients" : [ {
    "name" : "aeiou",
    "description" : "aeiou"
  } ],
  "location" : {
    "coordinates" : "",
    "type" : "aeiou"
  },
  "meal_id" : { },
  "portions" : ""
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.mealsMealIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * mealId (UUID)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "portions_available" : "",
  "last_updated" : "",
  "metadata" : [ { } ],
  "is_active" : true,
  "available_to" : "",
  "description" : "aeiou",
  "available_from" : { },
  "allergens" : [ {
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : ""
  } ],
  "price" : 1.3579000000000001069366817318950779736042022705078125,
  "preview_image_url" : { },
  "name" : "aeiou",
  "ingredients" : [ {
    "name" : "aeiou",
    "description" : "aeiou"
  } ],
  "location" : {
    "coordinates" : "",
    "type" : "aeiou"
  },
  "meal_id" : { },
  "portions" : ""
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.mealsMealIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * mealId (UUID)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "portions_available" : "",
  "last_updated" : "",
  "metadata" : [ { } ],
  "is_active" : true,
  "available_to" : "",
  "description" : "aeiou",
  "available_from" : { },
  "allergens" : [ {
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : ""
  } ],
  "price" : 1.3579000000000001069366817318950779736042022705078125,
  "preview_image_url" : { },
  "name" : "aeiou",
  "ingredients" : [ {
    "name" : "aeiou",
    "description" : "aeiou"
  } ],
  "location" : {
    "coordinates" : "",
    "type" : "aeiou"
  },
  "meal_id" : { },
  "portions" : ""
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.mealsMealIdPATCH = function(args, res, next) {
  /**
   * parameters expected in the args:
  * mealId (UUID)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "portions_available" : "",
  "last_updated" : "",
  "metadata" : [ { } ],
  "is_active" : true,
  "available_to" : "",
  "description" : "aeiou",
  "available_from" : { },
  "allergens" : [ {
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : ""
  } ],
  "price" : 1.3579000000000001069366817318950779736042022705078125,
  "preview_image_url" : { },
  "name" : "aeiou",
  "ingredients" : [ {
    "name" : "aeiou",
    "description" : "aeiou"
  } ],
  "location" : {
    "coordinates" : "",
    "type" : "aeiou"
  },
  "meal_id" : { },
  "portions" : ""
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

