/**
 * Calculate age into months or days
 * @param {number} age - Age in years (must be >= 1)
 * @param {"months" | "days"} unit - The unit to convert age into
 * @returns {number|string} Converted age or error message
 */

// TODO: answer here
function calcAge(age, params) {
    if (age < 1) {
        return "Age cannot be under 1 year"
    }
    
    // 1 tahun = 365 hari
    if (params === "months") {
        return age *= 12
    } else if(params === "days") {
        return age *= 365
    }
}

console.log(calcAge(-1, "months"))
console.log(calcAge(3, "months"))
console.log(calcAge(1, "days"))

module.exports = calcAge;