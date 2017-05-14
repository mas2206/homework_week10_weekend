var assert = require("assert");
var Food = require("../food.js");

describe("Food", function() {

  var food1;
  var food2;

  beforeEach(function() {
    food1 = new Food("chicken", 20, false);
    food2 = new Food("lamb", 30, false);
  });

  it("should have a name", function() {
    assert.equal("chicken", food1.name);
  });

  it("should have a replenishment value", function() {
    assert.equal(30, food2.replenishmentValue);
  });

  it("should have a boolean 'poisoned' value", function() {
    assert.equal(false, food1.poisoned);
  })

});