var assert = require("assert");
var Hero = require("../hero.js");
var Food = require("../food.js");

describe("Hero", function() {

  var hero1;
  var food1;

  beforeEach(function() {
    hero1 = new Hero("Gardven", 100, "chicken");
    food1 = new Food("chicken", 20);
  });

  it("should have a name", function() {
    assert.equal("Gardven", hero1.name);
  });

  it("should have a health value", function() {
    assert.equal(100, hero1.health);
  });

  it("should have a favourite food", function() {
    assert.equal("chicken", hero1.favouriteFood);
  });

  it("can talk", function() {
    assert.equal("My name is Gardven", hero1.talk());
  })

  it("eating food should increase hero health", function() {
    hero1.eatFood(food1);
    assert.equal(120, hero1.health);
  });

});