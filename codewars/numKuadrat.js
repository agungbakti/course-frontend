// Selamat datang. Dalam kata ini, Anda diminta untuk mengkuadratkan setiap digit suatu angka dan menggabungkannya.

// Misalnya, jika kita menjalankan 9119 melalui fungsi tersebut, akan muncul 811181, karena 9 2 adalah 81 dan 1 2 adalah 1. (81-1-1-81)

// Contoh #2: Input 765 akan/seharusnya menghasilkan 493625 karena 7 2 adalah 49, 6 2 adalah 36, dan 5 2 adalah 25. (49-36-25)

// Catatan: Fungsi menerima bilangan bulat dan mengembalikan bilangan bulat.

// Selamat Mengkode!

function squareDigits(num){
    /**
     * melakukan looping perangka dengan for i
     * kemudian pakai math.pow untuk kuadrat
     */
    let result = 0
    let numString = num.toString()
    
    for (let i = 0; i < numString.length; i++) {
        let numNumber = Number(numString[i])
        let kuadrat = Math.pow(numNumber, 2)
        result += `${kuadrat}`
    }
    return Number(result);
}


console.log(squareDigits(3212));
console.log(squareDigits(2112));