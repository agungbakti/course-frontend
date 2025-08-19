function printNumber(totalNumber) {
    let result = ""
    let cucupNumberNow = 1

    for (let i = 1; i <= totalNumber; i++) {
        if (cucupNumberNow > 3) {
            cucupNumberNow = 1
        }
        result += cucupNumberNow
        cucupNumberNow++
    }

    return result
}
// 4, 7, 10
console.log(printNumber(2));
console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
console.log(printNumber(30));

module.exports = printNumber
