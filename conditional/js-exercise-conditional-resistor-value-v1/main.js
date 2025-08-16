function resistorValue(bandColor1, bandColor2, bandColor3, bandColor4) {
  let significantFigure1 = 0
  let significantFigure2 = 0
  let multiplier = 0
  let tolerance = 0

  switch (bandColor1) {
    case "black":
      significantFigure1 = 0
      break;
    case "brown":
      significantFigure1 = 1
      break;
    case "red":
      significantFigure1 = 2
      break;
    case "orange":
      significantFigure1 = 3
      break;
    case "yellow":
      significantFigure1 = 4
      break;
    case "green":
      significantFigure1 = 5
      break;
    case "blue":
      significantFigure1 = 6
      break;
    case "violet":
      significantFigure1 = 7
      break;
    case "grey":
      significantFigure1 = 8
      break;
    case "white":
      significantFigure1 = 9
      break;
    default:
      significantFigure1
      break;
  }

  switch (bandColor2) {
    case "black":
      significantFigure2 = 0
      break;
    case "brown":
      significantFigure2 = 1
      break;
    case "red":
      significantFigure2 = 2
      break;
    case "orange":
      significantFigure2 = 3
      break;
    case "yellow":
      significantFigure2 = 4
      break;
    case "green":
      significantFigure2 = 5
      break;
    case "blue":
      significantFigure2 = 6
      break;
    case "violet":
      significantFigure2 = 7
      break;
    case "grey":
      significantFigure2 = 8
      break;
    case "white":
      significantFigure2 = 9
      break;
    default:
      significantFigure2
      break;
  }
  
  switch (bandColor3) {
    case "black":
      multiplier = 1
      break;
    case "brown":
      multiplier = 10
      break;
    case "red":
      multiplier = 100
      break;
    case "orange":
      multiplier = 1000
      break;
    case "yellow":
      multiplier = 10000
      break;
    case "green":
      multiplier = 100000
      break;
    case "blue":
      multiplier = 1000000
      break;
    case "violet":
      multiplier = 10000000
      break;
    case "gold":
      multiplier = 0.1
      break;
    case "silver":
      multiplier = 0.01
      break;
    default:
      multiplier
      break;
  }

  switch (bandColor4) {
    case "black":
      tolerance = 20
      break;
    case "brown":
      tolerance = 1
      break;
    case "red":
      tolerance = 2
      break;
    case "gold":
      tolerance = 5
      break;
    case "silver":
      tolerance = 10
      break;
    default:
      tolerance
      break;
  }

  let totalSiginificantFigure = Number(significantFigure1.toString() + significantFigure2.toString())
  let nilaiResistor = totalSiginificantFigure * multiplier
  
  return `${nilaiResistor} ohm ±${tolerance}%`
}

console.log(resistorValue('brown', 'black', 'red', 'gold'));
console.log(resistorValue('red', 'red', 'red', 'gold'));
console.log(resistorValue('yellow', 'violet', 'green', 'silver'));
console.log(resistorValue('blue', 'grey', 'green', 'silver'));

module.exports = resistorValue;
