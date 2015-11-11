'use strict';

exports.pizzasGet = function(nameString) {

  var examples = {};
  
  examples['application/json'] = [ {
  "id" : 1,
  "name" : "Maui Wowie",
  "toppings" : [ 2, 3 ]
}, {
  "id" : 2,
  "name" : "Kirsten's Pizza",
  "toppings" : [ 1 ]
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.pizzasPost = function(pizza) {

  var examples = {};
  
  examples['application/json'] = {
  "id" : 1,
  "location" : "/pizzas/1.2.3.4",
  "name" : "Maui Wowie",
  "toppings" : [ 2, 3 ]
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.pizzasPizzaidGet = function(pizzaid) {

  var examples = {};
  
  examples['application/json'] = {
  "id" : 1,
  "name" : "Maui Wowie",
  "toppings" : [ 2, 3 ]
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.pizzasPizzaidPut = function(pizzaid, pizza) {

  var examples = {};
  

  
}
exports.pizzasPizzaidDelete = function(pizzaid) {

  var examples = {};
  

  
}
exports.toppingsGet = function(nameString) {

  var examples = {};
  
  examples['application/json'] = [ {
  "id" : "1",
  "name" : "pepperoni"
}, {
  "id" : "2",
  "name" : "ham"
}, {
  "id" : "3",
  "name" : "pineapple"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.toppingsPost = function(topping) {

  var examples = {};
  

  
}
exports.toppingsToppingidGet = function(toppingid) {

  var examples = {};
  
  examples['application/json'] = {
  "id" : "1",
  "name" : "Pepperoni"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.toppingsToppingidPut = function(toppingid, topping) {

  var examples = {};
  

  
}
exports.toppingsToppingidDelete = function(toppingid) {

  var examples = {};
  

  
}
