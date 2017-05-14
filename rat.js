function Rat() {};

Rat.prototype = {

  poisonFood: function(food) {
    food.poisoned = true;
  }

};

module.exports = Rat;