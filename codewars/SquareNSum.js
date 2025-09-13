function squareSum(numbers){
    let result = 0
    numbers.forEach((number) => result += Math.pow(number, 2));
    return result
}


console.log((squareSum([1,2])));
console.log((squareSum([0, 3, 4, 5])));
console.log((squareSum([])));




