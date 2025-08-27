function discountChecker(costumers, date) {
    let result = []
    
    let splitTanggal = date.split("-")
    let tanggal = parseInt(splitTanggal[0])

    // console.log(tanggal)
    costumers.forEach(pelanggan => {
        let status = pelanggan[1]
        let split = pelanggan[0].split(" ")
        let harga = parseInt(split[1])

        if (status == "member") {
            result.push(pelanggan)
        } else {
            if (tanggal % 2 == 0 && harga % 2 == 0) {
                result.push(pelanggan)
            } else if(tanggal % 2 == 1 && harga % 2 == 1) {
                result.push(pelanggan)
            }
        }
    });

    return result; // TODO: replace this
}

let costumers = [
    ["$ 228", "member"],
    ["$ 19", "non-member"],
    ["$ 238", "non-member"],
    ["$ 49", "member"]
]

console.log(discountChecker(costumers, "28-10-2022"))

var costumers2 = [
    ["$ 754", "member"],
    ["$ 233", "member"],
    ["$ 31", "non-member"],
    ["$ 332", "non-member"]
]

console.log(discountChecker(costumers2, "11-06-2022"))

module.exports = discountChecker
