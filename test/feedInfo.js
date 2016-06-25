var chai = require("chai"),
    expect = chai.expect;

//Plugins
chai.use(require("chai-sorted"));

var user = require("../controllers/user");

describe("Feed Information", function(){
  describe("returns an array with feed item ratings", function(){
    it("Should be sorted DESC", function(){
      var topRatingArray = user.getTopFiveLatestCheckins();

      expect(topRatingArray).to.be.sorted(true);
    });
  });
});
