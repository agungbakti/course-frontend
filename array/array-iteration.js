// contoh array biasa
let names = ["John", "Mary", "Peter", "Jane"]
let ages = [20, 21, 22, 23]
let countries = ["USA", "UK", "Canada", "Germany"]

// reduce
let totalAges = ages.reduce((a, b) => a+b, 0)
console.log("Total ages: " + totalAges)

// foreach - mengembalikan satu2
countries.forEach((value) => {
    console.log(value)
    console.log(value.toLocaleLowerCase())
})

// map - mengembalikan array
let lowerCaseCountry = countries.map((value) => {
    return value.toLocaleLowerCase()
})

console.log(lowerCaseCountry)

// every - semua value harus sesuai
let isAllOld = ages.every((age) => age > 18)
console.log(isAllOld)

// some - salah satu yang sesuai
let isAllOld2 = ages.some((age) => age > 22)
console.log(isAllOld2)

// filter - mencari value
let olderAges = ages.filter((value, index, array) => {
    return value > 21
    // if (value > 21) {
    //     return true
    // } else {
    //     return false
    // }

    // if (index % 2 == 1) {
    //     return true
    // } else {
    //     return false
    // }
})

console.log("ages", ages)
console.log("olderAges", olderAges)

let nameWithJ = names.filter((value, index, array) => {
return value.startsWith("J")
})

console.log(names)
console.log("namesWithJ", nameWithJ)


// contoh multidimensi
let people = [
    ["John", 20, "USA"],
    ["Mary", 21, "UK"],
    ["Peter", 22, "Canada"],
    ["Jane", 23, "Germany"]
]

// filter
let olderPeople = people.filter((value) => {
    return value[1]>21
})

console.log(olderPeople)