'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.pizzasGet = function pizzasGet (req, res, next) {
  var nameString = req.swagger.params['nameString'].value;
  

  var result = Default.pizzasGet(nameString);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.pizzasPost = function pizzasPost (req, res, next) {
  var pizza = req.swagger.params['pizza'].value;
  

  var result = Default.pizzasPost(pizza);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.pizzasPizzaidGet = function pizzasPizzaidGet (req, res, next) {
  var pizzaid = req.swagger.params['pizzaid'].value;
  

  var result = Default.pizzasPizzaidGet(pizzaid);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.pizzasPizzaidPut = function pizzasPizzaidPut (req, res, next) {
  var pizzaid = req.swagger.params['pizzaid'].value;
  var pizza = req.swagger.params['pizza'].value;
  

  var result = Default.pizzasPizzaidPut(pizzaid, pizza);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.pizzasPizzaidDelete = function pizzasPizzaidDelete (req, res, next) {
  var pizzaid = req.swagger.params['pizzaid'].value;
  

  var result = Default.pizzasPizzaidDelete(pizzaid);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.toppingsGet = function toppingsGet (req, res, next) {
  var nameString = req.swagger.params['nameString'].value;
  

  var result = Default.toppingsGet(nameString);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.toppingsPost = function toppingsPost (req, res, next) {
  var topping = req.swagger.params['topping'].value;
  

  var result = Default.toppingsPost(topping);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.toppingsToppingidGet = function toppingsToppingidGet (req, res, next) {
  var toppingid = req.swagger.params['toppingid'].value;
  

  var result = Default.toppingsToppingidGet(toppingid);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.toppingsToppingidPut = function toppingsToppingidPut (req, res, next) {
  var toppingid = req.swagger.params['toppingid'].value;
  var topping = req.swagger.params['topping'].value;
  

  var result = Default.toppingsToppingidPut(toppingid, topping);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.toppingsToppingidDelete = function toppingsToppingidDelete (req, res, next) {
  var toppingid = req.swagger.params['toppingid'].value;
  

  var result = Default.toppingsToppingidDelete(toppingid);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
