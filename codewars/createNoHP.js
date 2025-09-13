/**
 * Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
 */

function createPhoneNumber(numbers){
    // mengakses isi array
    // didalam kurung => value array 1-3
    // setalah spasi => value array 4-6
    // setalah strip => value array 7-10

    let kurung = numbers[0].toString() + numbers[1].toString() + numbers[2].toString()
    let spasi = numbers[3].toString() + numbers[4].toString() + numbers[5].toString()
    let strip = numbers[6].toString() + numbers[7].toString() + numbers[8].toString() + numbers[9].toString()
    
    return `(${kurung}) ${spasi}-${strip}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
