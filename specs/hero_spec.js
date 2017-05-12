var assert = require("assert");
var Hero = require("../hero.js");

describe("Hero", function() {

  var hero1;

  beforeEach(function() {
    hero1 = new Hero("Gardven", 100, "chicken");
  });

  it("should have a name", function() {
    assert.equal("Gardven", hero1.name);
  });

  it("should have a health value", function() {
    assert.equal(100, hero1.health);
  });

  it("should have a favourite food", function() {
    assert.equal("chicken", hero1.favouriteFood)
  });

});