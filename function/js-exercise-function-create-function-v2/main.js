function checkDatatype (param) {
    if(param === null) {
        return "null"
    }

    if (Array.isArray(param)) {
        return "array"
    }

    return typeof param
}

console.log(checkDatatype("string"))
console.log(checkDatatype(1))
console.log(checkDatatype(true))
console.log(checkDatatype(null))
console.log(checkDatatype([1,2,3]))


module.exports = {checkDatatype};