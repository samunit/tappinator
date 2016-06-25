var expect = require("chai").expect;
var beerInfo = require('../mockdata/beerInfo');

console.log(beerInfo.response.beer.beer_name);

describe("Beer information", function(){
  describe("Beer ABV value", function(){
    it("will return alchol %", function(){
      var abv = beerInfo.response.beer.beer_abv;

      expect(abv).to.equal(5.4);
    });
  });

  describe("Beer description", function(){
    it("Should return beer information", function(){
      var beerDesc = "Awsome beer with awsome taste";

      expect(beerDesc).to.equal("Awsome beer with awsome taste");
    })
  });
});
