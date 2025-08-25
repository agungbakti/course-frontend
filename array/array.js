let name1 = "Agung"
let name2 = "Bakti"
let name3 = "Gatau"
let name4 = "Siapa"

// solusinya masukkan ke array
// cara 1
let names = ["Agung", "Bakti", "Gatau", "Siapa"]
console.log(names[0])
console.log(names)

// cara 2
let ages = new Array()
ages[0] = 12
ages[1] = 13
ages[2] = 14
ages[3] = 15
ages[4] = 16
console.log(ages)

// cara 3 direkomendasikan
let addresses = []
addresses[0] = "jalan dorang1"
addresses[1] = "jalan dorang2"
addresses[2] = "jalan dorang3"
addresses[3] = "jalan dorang4"
console.log(addresses)

// PUSH 
// menambahkan dari belakang
addresses.push("jalan dorang5")
console.log(addresses)

// UNSHIFT
// menambahkan dari depan
addresses.unshift("jalan dorang0")
console.log(addresses)

// POP
// menghapus dari belakang
addresses.pop()
console.log(addresses)

// SHIFT
// menghapus dari depan
addresses.shift()
console.log(addresses)

// length, mengetahui panjang array
console.log(addresses.length)