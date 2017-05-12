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
    return this.health += food.replenishmentValue;
  }

}

module.exports = Hero;