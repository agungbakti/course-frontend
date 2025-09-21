// mengambil semuanya
const data = require("./data")

console.log(data.nama);
console.log(data.umur);
data.save()

// mengambil sebagian

const {nama, umur} = require("./data")

console.log(nama);
console.log(umur);

