const pyramidOfAsterisks = function (steps = 12) {
  for (let i = 0; i < steps; i++) {
    var output = "";
    for (let j = 1; j < steps - i; j++) output += " ";
    for (let k = 0; k <= 2 * i; k++) output += "* ";
    console.log(output);
  }
};

pyramidOfAsterisks(6);
