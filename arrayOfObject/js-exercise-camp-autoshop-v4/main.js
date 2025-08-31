function convertItems(items) {
    let result = []

    items.forEach(item => {
        result.push(item.split("|"))
        // console.log(itemSplit)
    });

    return result; // TODO: replace this
}

function filterItems(items) {
    let result = []

    items.forEach(item => {
        parseInt(item[1])
        if (item.length > 1) {
            item[1] = parseInt(item[1])
            result.push(item)
        }
    });
    
    return result // TODO: replace this
}

function generateSpareParts(items) {
    let result = []
    // console.log(generate);

    items.forEach(item => {
        let obj = {
            name: item[0],
            price: item[1],
            category: item[2]
        }

        result.push(obj)
    });
    
    return result; // TODO: replace this
}

function itemsStatistics(items) {
    let result = {}

    items.forEach(jumlah => {
        let type = jumlah[2]

        if(result[type] === undefined) {
            result[type] = 1
        } else {
            result[type]++
        }

    });
    return result; // TODO: replace this
}

function generateItemsData(items) {
    let result = {}

    let convertedItems = convertItems(items)
    let filteredItems = filterItems(convertedItems)
    let generate = generateSpareParts(filteredItems)
    let statistik = itemsStatistics(filteredItems)

    result = {
        spare_parts: generate,
        statistics: statistik
    }
    
    return result// TODO: replace this
}

const items = [
    "Spakbor Gordon|150000|variation",
    "Head Lamp",
    "USD KX150|8500000|bodyParts",
    "Handle Expedition|275000|variation",
    "Karet Body",
    "Body set KTM|1899950|bodyParts",
    "Jok Gordon|250000|variation",
    "Behel Bodyset Gordon",
    "CDI BRT KLX|625000|electricity",
    "Cover jok KLX|185000|variation",
]

console.log(generateItemsData(items));

module.exports = {
    convertItems,
    filterItems,
    generateSpareParts,
    itemsStatistics,
    generateItemsData
}