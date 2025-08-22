/**
 * Short Name
 * @param {string} name - jika name < 2 kata == "Invalid Name"
 * @param {"first"|"last"|"full"} options
 * @returns {string} - short name sesuai kemauan
 */

function shortName(name, options) {
    let nameSplit = name.split(" ");
    let result = "";

    if (nameSplit.length < 2) {
        return "Invalid Name";
    }

    if (options === "full") {
        result = name; // pakai nama lengkap
    } else if (options === "first") {
        result = nameSplit[0][0] + ". " + nameSplit[1]; // contoh: A. Purnomo
    } else if (options === "last") {
        result = nameSplit[0] + " " + nameSplit[1][0] + "."; // contoh: Ginanjar P.
    }

    return result;
}

console.log(shortName("Anton", "first")); // Invalid Name
console.log(shortName("Djarot Purnomo", "first")); // D. Purnomo
console.log(shortName("Ginanjar Prakoso", "last")); // Ginanjar P.
console.log(shortName("Andre Sembiring", "full")); // Andre Sembiring

module.exports = shortName;
