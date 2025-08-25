function splitToArr(str) {
    let result = []
    let name = ""

    // pengecekan array kosong / undefined
    if(str == "") {
        return "Data not available"
    }

    if (str == undefined) {
        return "Invalid input"
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ";" && str[i] !== "-") {
            if(name.length === 0) {
                name += str[i].toUpperCase()
            } else {
                name += str[i]
            }
            console.log(name)
        } else {
            result.push(name)
            name = ""
        }
    }
    result.push(name)

    return result; // TODO: replace this
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"))
console.log(splitToArr("ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"))
console.log(splitToArr(""))
console.log(splitToArr())

module.exports = splitToArr 