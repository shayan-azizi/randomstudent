const { random } = require("colors")

const l = ["hello" , "goodbye" , "morgh"]
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
console.log(l[getRndInteger(0,2)])