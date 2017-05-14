var assert = require("assert");
var Task = require("../task.js");

describe("Task", function() {

  var task1;
  var task2;
  var task3;

  beforeEach(function() {
    task1 = new Task("Clear out the bandit camp", 4, 5, 200, false);
    task2 = new Task("Slay the dragon", 9, 2, 1000000, false);
    task3 = new Task("Clean the bathroom", 1, 10, 0, false);
  });

  it("should have a description", function() {
    assert.equal("Slay the dragon", task2.description);
  })

  it("should have a difficulty level", function() {
    assert.equal(4, task1.difficultyLevel);
  });

  it("should have an urgency level", function() {
    assert.equal(10, task3.urgencyLevel);
  });

  it("should have a reward amount", function() {
    assert.equal(1000000, task2.reward);
  });

  it("should have a boolean 'completed' value", function() {
    assert.equal(false, task1.completed);
  });

});