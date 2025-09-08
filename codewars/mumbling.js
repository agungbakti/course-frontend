function accum(s) {
	//looping stringnya
    //dapatkan dia index keberapa
    //huruf pertama uppercase
    //huruf selanjutnya di lowercase kemudian dikali jumlah indexnya
    let result = ""
    for (let i = 0; i < s.length; i++) {
        result += s[i].toUpperCase()
        for (let j = 0; j < i; j++) {
            result += s[i].toLowerCase()
        }
        if(i < s.length -1) {
            result += "-"
        }
    }

    return result;
}

console.log(accum("abcd"))
console.log(accum('ZpglnRxqenU'))