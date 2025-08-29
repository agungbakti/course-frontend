function stockOpname(items) {
    let stockItems = {
        "Ram": 10,
        "Motherboard": 4,
        "Processor": 5,
        "SSD": 8,
        "PSU": 12,
        "Cooling": 5,
    }

    // melakukan perulangan dari objek untuk mendapatkan key dan value
    // melakukan perulangan array => array[0]=key array[1]=value
    // kemudian melakukan pengecekan, jika array[0]==key maka value objec - array[1]

    if (items.length === 0) {
        return "Data not found"
    }

    for (const key in stockItems) {
        // console.log(key , stockItems[key] )
        
        for (let i = 0; i < items.length; i++) {
            let itemName = items[i][0]
            let penjualan = items[i][1]

            if (key===itemName) {
                stockItems[key] -= penjualan
            }
        }
    }

    return stockItems; // TODO: replace this
}

let items1 = [
    ["PSU", 6],
    ["SSD", 3],
    ["Motherboard", 3],
    ["Ram", 2],
    ["Cooling", 4],
    ["Processor", 5],
]

let items2 = [
    ["SSD", 5],
    ["Motherboard", 4],
    ["Processor", 1],
    ["PSU", 3],
    ["Cooling", 5],
    ["Ram", 5],
]

console.log(stockOpname(items1));
console.log(stockOpname(items2));
console.log(stockOpname([]));

module.exports = stockOpname
