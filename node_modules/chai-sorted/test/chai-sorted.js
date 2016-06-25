"use strict";

var chai = require("chai");
var expect = chai.expect;

chai.use(require("../lib/chai-sorted"));

describe("to.be.sorted() in ascending order", function() {
  it("with array of numbers",function(){
    expect([1,2,3]).to.be.sorted();
  });
  it("with array of words with mixed case",function(){
    expect(["decal","process","validCharacters"]).to.be.sorted();
  });
  // Additional condition testing of values is done in test/is.sorted.js
});

describe("to.not.be.sorted() in ascending order",function(){
  it("with array of numbers",function(){
    expect([1,3,2]).to.not.be.sorted();
  });
  // Additional condition testing of values is done in test/is.sorted.js
});

describe("to.be.sortedBy() in ascending order", function() {
  it("key id of numbers",function(){
    expect([{id:1},{id:2},{id:3}]).to.be.sortedBy("id");
  });
  it("key id of strings",function(){
    expect([{id:"a"},{id:"b"},{id:"c"}]).to.be.sortedBy("id");
  });
  it("key name of words and letters",function(){
    expect([{id:1,name:"a"},{id:34,name:"apple"},{id:3,name:"b"},{size:"large",name:"ba"}]).to.be.sortedBy("name");
  });
});

describe("to.be.sortedBy() in descending order", function() {
  it("key id of numbers",function(){
    expect([{id:3},{id:2},{id:2}]).to.be.sortedBy("id",true);
  });
  it("key id of strings",function(){
    expect([{id:"c"},{id:"b"},{id:"a"}]).to.be.sortedBy("id",true);
  });
  it("key name of words and letters",function(){
    expect([{id:1,name:"cat"},{id:34,name:"bat"},{id:3,name:"b"},{size:"large",name:"apple"}]).to.be.sortedBy("name",true);
  });
});

describe("to.be.descending", function() {
  it("with array of numbers",function(){
    expect([3,2,1]).to.be.descending;
  });
  it("with array of letters",function(){
    expect(["c","b","a"]).to.be.descending;
  });
  it("with array of letters and an empty string",function(){
    expect(["c","b",""]).to.be.descending;
  });
  it("with array of words and letters",function(){
    expect(["cat","c","ba","b","apples","a"]).to.be.descending;
  });
});

describe("to.not.be.descending", function() {
  it("with array of numbers",function(){
    expect([1,2,1]).to.not.be.descending;
  });
  it("with array of letters",function(){
    expect(["z","a","r"]).to.not.be.descending;
  });
  it("with array of letters and an empty string",function(){
    expect(["a","b",""]).to.not.be.descending;
  });
  it("with array of words and letters",function(){
    expect(["cat","cozy","boat","bottle","apples","a"]).to.not.be.descending;
  });
});


describe("to.be.descendingBy(property)", function() {
  it("key id of numbers",function(){
    expect([{id:3},{id:2},{id:1}]).to.be.descendingBy("id");
  });
  it("key id of strings",function(){
    expect([{id:"c"},{id:"b"},{id:"a"}]).to.be.descendingBy("id");
  });
  it("key name of words and letters",function(){
    expect([{id:1,name:"cat"},{id:34,name:"c"},{id:3,name:"boy"},{size:"large",name:"b"}]).to.be.descendingBy("name");
  });
});

describe("to.be.ascendingBy(property)", function() {
  it("key id of numbers",function(){
    expect([{id:1},{id:2},{id:3}]).to.be.ascendingBy("id");
  });
  it("key id of strings",function(){
    expect([{id:"a"},{id:"b"},{id:"c"}]).to.be.ascendingBy("id");
  });
  it("key name of words and letters",function(){
    expect([{id:1,name:"a"},{id:34,name:"boy"},{id:3,name:"c"},{size:"large",name:"cat"}]).to.be.ascendingBy("name");
  });
});
