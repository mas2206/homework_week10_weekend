function Rat() {};

Rat.prototype = {

  nibbleFood: function(food) {
    food.poisoned = true;
  }

};

module.exports = Rat;