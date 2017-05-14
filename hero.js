function Hero(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
  this.gold = 0;
};

Hero.prototype = {

  talk: function() {
    return "My name is " + this.name;
  },

  eatFood: function(food) {
    if (food.poisoned === true) {
      return this.health -= 50;
    }
    else if (food.name === this.favouriteFood) {
      return this.health += (food.replenishmentValue * 1.5);
    }
    else {
    return this.health += food.replenishmentValue;
    };
  },

  addTask: function(task) {
    this.tasks.push(task);
  },

  sortTasksByDifficulty: function() {
    this.tasks.sort(function(task1, task2) {
      return task1.difficultyLevel - task2.difficultyLevel;
    });
    return this.tasks;
  },

  sortTasksByUrgency: function() {
    this.tasks.sort(function(task1, task2) {
      return task1.urgencyLevel - task2.urgencyLevel;
    });
    return this.tasks.reverse();
  },

  sortTasksByReward: function() {
    this.tasks.sort(function(task1, task2) {
      return task1.reward - task2.reward;
    });
    return this.tasks.reverse();
  },

  viewCompletedTasks: function() {
    var completedTasks = [];
    this.tasks.filter(function(task) {
      if (task.completed === true) {
        completedTasks.push(task);
      }
    });
    return completedTasks;
  },

  viewUncompletedTasks: function() {
    var uncompletedTasks = [];
    this.tasks.filter(function(task) {
      if (task.completed === false) {
        uncompletedTasks.push(task);
      }
    });
    return uncompletedTasks;
  },

  completeTask: function(task) {
    task.completed = true;
    this.gold += task.reward;
  }

};

module.exports = Hero;