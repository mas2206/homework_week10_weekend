function Hero(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype = {

  talk: function() {
    return "My name is " + this.name;
  }

}

module.exports = Hero;