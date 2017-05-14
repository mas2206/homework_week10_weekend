var assert = require("assert");
var Rat = require("../rat.js");
var Food = require("../food.js");

describe("Rat", function() {

  var rat1;
  var food1;

  beforeEach(function() {
    rat1 = new Rat();
    food1 = new Food("chicken", 20, false);
  });

  it("can poison food", function() {
    rat1.nibbleFood(food1);
    assert.equal(true, food1.poisoned);
  });

});