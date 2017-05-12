var assert = require("assert");
var Task = require("../task.js");

describe("Task", function() {

  var task1;
  var task2;
  var task3;

  beforeEach(function() {
    task1 = new Task("Clean the bathroom", "low", "high", 1, false);
    task2 = new Task("Clear out the bandit camp", "medium", "medium", 100, false);
    task3 = new Task("Slay the dragon", "high", "low", 5000, false);
  });

  it("should have a description", function() {
    assert.equal("Slay the dragon", task3.description);
  })

  it("should have a difficulty level", function() {
    assert.equal("low", task1.difficultyLevel);
  });

  it("should have an urgency level", function() {
    assert.equal("high", task1.urgencyLevel);
  });

  it("should have a reward amount", function() {
    assert.equal(100, task2.reward);
  });

  it("should have a 'completed' check", function() {
    assert.equal(false, task2.completed);
  });

});