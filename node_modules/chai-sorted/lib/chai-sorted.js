"use strict";
var isSorted = require("./is.sorted");
module.exports = function (chai, utils) {
  var Assertion = chai.Assertion;

  Assertion.addMethod("sorted",function(descendingOrder){
    var array = utils.flag(this, "object");
    this.assert(
      isSorted(array,descendingOrder),
      "expected #{exp} to be sorted in "+(descendingOrder?"descending":"ascending")+" order",
      "expected #{exp} to not be sorted",
      JSON.stringify(array)
    );
  });

  utils.addProperty(chai.Assertion.prototype, "descending", function () {
    var array = utils.flag(this, "object");
    return isSorted(array,true);
  });

  utils.addProperty(chai.Assertion.prototype, "ascending", function () {
    var array = utils.flag(this, "object");
    return isSorted(array);
  });

  Assertion.addMethod("sortedBy",function(key,descendingOrder){
    var array = utils.flag(this, "object").map(function(item){
      return item[key];
    });
    this.assert(
      isSorted(array,descendingOrder),
      "expected #{exp} to be sorted in "+(descendingOrder?"descending":"ascending")+" order",
      "expected #{exp} to not be sorted",
      JSON.stringify(array)
    );
  });

  Assertion.addMethod("descendingBy",function(key){
    var array = utils.flag(this, "object").map(function(item){
      return item[key];
    });
    this.assert(
      isSorted(array,true),
      "expected #{exp} to be sorted in descending order",
      "expected #{exp} to not be sorted",
      JSON.stringify(array)
    );
  });

  Assertion.addMethod("ascendingBy",function(key){
    var array = utils.flag(this, "object").map(function(item){
      return item[key];
    });
    this.assert(
      isSorted(array),
      "expected #{exp} to be sorted in ascending order",
      "expected #{exp} to not be sorted",
      JSON.stringify(array)
    );
  });
};
