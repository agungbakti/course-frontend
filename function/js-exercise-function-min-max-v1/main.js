/**
 * @param {string} str
 * @returns {string} - menemukan min dan max str
 * min str nilainya sama => Nilai terkecil dan terbesar adalah <angka>
 * max str nilainya beda => Nilai terkecil adalah <angka>, dan terbesar adalah <angka>
 **/

// TODO: answer here
function minMax(str) {
    let min = Number(str[0]) //1 | 9
    let max = Number(str[0]) //1 | 9
    
    for (let i = 0; i < str.length; i++) {
        let num = Number(str[i])
        if (num < min) {
            min = num
        }

        if (num > max) {
            max = num
        }
    }

    if (min === max) {
        return `Nilai terkecil dan terbesar adalah ${max}`
    } else {
        return `Nilai terkecil adalah ${min}, dan terbesar adalah ${max}`
    }
}


console.log(minMax("1"))
console.log(minMax("9746532"))
module.exports = minMax;