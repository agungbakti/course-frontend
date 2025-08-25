function vocalCounter(array) {
    let result = ""
    let huruf = array.filter((value) => {
        if (value === "A" || value === "a" ||
            value === "I" || value === "i" ||
            value === "U" || value === "u" ||
            value === "E" || value === "e" ||
            value === "O" || value === "o"
        ) {
            return true
        } else{ 
            return false
        }
    })

    if (huruf.length !== 0) {
        result += `Jumlah vokal yang ditemukan sebanyak ${huruf.length} berupa ${huruf.join("")}`
    } else {
        return "Tidak ada huruf vokal yang ditemukan"
    }

    return result; // TODO: replace this
}

console.log(vocalCounter(['x', 'A', 5, 'o', 1, 'T', 'b']));
console.log(vocalCounter([-10, 'E', 'e', 'z', 'p', 'i', 4]));
console.log(vocalCounter(['q', 'W', 'r', 't', 'Y']));

module.exports = vocalCounter
