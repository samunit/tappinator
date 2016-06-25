"use strict";

var chai = require("chai");
var expect = chai.expect;
var eut = require("../lib/is.sorted");


describe("is.sorted() returns true in ascending order", function() {
  it("with array of numbers",function(){
    expect(eut([1,2,3])).to.be.true;
  });
  it("with array of letters",function(){
    expect(eut(["a","b","c"])).to.be.true;
  });
  it("with array of letters and an empty string",function(){
    expect(eut(["","b","c"])).to.be.true;
  });
  it("with array of words and letters",function(){
    expect(eut(["a","apple","b","ba","boy","c"])).to.be.true;
  });
  it("with array of words with mixed case",function(){
    expect(eut(["decal","process","validCharacters"])).to.be.true;
  });
  it("with array of booleans",function(){
    expect(eut([false,false,true,true])).to.be.true;
  });
});

describe("is.sorted() returns false when not ascending order",function(){
  it("with array of numbers",function(){
    expect(eut([1,3,2])).to.be.false;
  });
  it("with array of letters",function(){
    expect(eut(["c","a","c"])).to.be.false;
  });
  it("with array of letters and numbers",function(){
    expect(eut([2,"a",1])).to.be.false;
  });
});
