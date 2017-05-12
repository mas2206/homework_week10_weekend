var assert = require("assert");
var Food = require("../food.js");

describe("Food", function() {

  var food1;
  var food2;

  beforeEach(function() {
    food1 = new Food("chicken", 20);
    food2 = new Food("lamb", 25);
  });

  it("should have a name", function() {
    assert.equal("chicken", food1.name);
  });

  it("should have a replenishment value", function() {
    assert.equal(25, food2.replenishmentValue);
  });

});