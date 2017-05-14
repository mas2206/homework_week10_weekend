function Hero(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
  this.gold = 0;
}

Hero.prototype = {

  talk: function() {
    return "My name is " + this.name;
  },

  eatFood: function(food) {
    if (food.name === this.favouriteFood) {
      return this.health += (food.replenishmentValue * 1.5);
    }
    return this.health += food.replenishmentValue;
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
  }

}

module.exports = Hero;