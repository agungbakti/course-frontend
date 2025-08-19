function generateParenthesesPair(numberOfPairs) {
  let result = ""
  let kurungBuka = ""
  let kurungTutup = ""

  for (let i = 1; i <= numberOfPairs; i++) {
    kurungBuka += "("
    kurungTutup += ")"
  }
  result = kurungBuka + kurungTutup

  return result // TODO: replace this
}

console.log(generateParenthesesPair(0)); // ''
console.log(generateParenthesesPair(1)); // '()'
console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;
