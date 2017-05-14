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
  }

}

module.exports = Hero;