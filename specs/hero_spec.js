var assert = require("assert");
var Hero = require("../hero.js");
var Food = require("../food.js");
var Task = require("../task.js");

describe("Hero", function() {

  var hero1;
  var food1;
  var food2;
  var task1;
  var task2;
  var task3;
  var task4;

  beforeEach(function() {
    hero1 = new Hero("Gardven", 100, "lamb");
    food1 = new Food("chicken", 20);
    food2 = new Food("lamb", 30);
    task1 = new Task("Clear out the bandit camp", 4, 5, 200, false);
    task2 = new Task("Slay the dragon", 9, 2, 1000000, false);
    task3 = new Task("Clean the bathroom", 1, 10, 0, false);
    task4 = new Task("Completed task", 0, 0, 0, true);
  });

  it("should have a name", function() {
    assert.equal("Gardven", hero1.name);
  });

  it("should have a health value", function() {
    assert.equal(100, hero1.health);
  });

  it("should have a favourite food", function() {
    assert.equal("lamb", hero1.favouriteFood);
  });

  it("can talk", function() {
    assert.equal("My name is Gardven", hero1.talk());
  })

  it("eating food should increase hero health", function() {
    hero1.eatFood(food1);
    assert.equal(120, hero1.health);
  });

  it("eating favourite food should give a 1.5x bonus to replenishment value", function() {
    hero1.eatFood(food2);
    assert.equal(145, hero1.health);
  });

  it("task list starts empty", function() {
    assert.equal(0, hero1.tasks.length);
  });

  it("can add task(s) to task list", function() {
    hero1.addTask(task1);
    assert.equal(1, hero1.tasks.length);
  });

  it("can sort tasks by difficulty level (easiest to hardest)", function() {
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    assert.deepEqual([task3, task1, task2], hero1.sortTasksByDifficulty());
  });

  it("can sort tasks by urgency level (most urgent to least urgent)", function() {
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    assert.deepEqual([task3, task1, task2], hero1.sortTasksByUrgency());
  });

  it("can sort tasks by reward (highest to lowest)", function() {
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    assert.deepEqual([task2, task1, task3], hero1.sortTasksByReward());
  });

  it("can view completed tasks", function() {
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.addTask(task4);
    assert.deepEqual([task4], hero1.viewCompletedTasks());
  });

});