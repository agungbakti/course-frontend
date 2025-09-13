/**
 * Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
    Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 */

function countBits(n) {
    let biner = n.toString(2)
    let jumlahSatu = 0

    for (let i = 0; i < biner.length; i++) {
        if (biner[i]=== "1") {
            jumlahSatu += 1
        }
    }
    return jumlahSatu;
}


console.log(countBits(4))
console.log(countBits(7))
console.log(countBits(9))
