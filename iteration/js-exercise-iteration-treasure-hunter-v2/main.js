function trasureHunter(dailyLog) {
  let result = 0
  for (let i = 0; i <= dailyLog.length; i++) {
    // console.log(dailyLog[i])
    if(dailyLog[i] == "$") {
      result += 100
    }

    if(dailyLog[i] == "x") {
      if(result < 10) {
        result = 0
      } else {
        result -= 10
      }
    }

    if(dailyLog[i] == "#") {
      if (result == 0) {
        result = 0
      }else{
        result *= 0.5
      }
    }
  }

  return result
}

console.log(trasureHunter("$x$#x$")); // 185
console.log(trasureHunter("#######xx$")); // 100
console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("x$#x$#x$")); // 160
console.log(trasureHunter("xx$#$#$#$###xx")); // 3.4375

module.exports = trasureHunter;
