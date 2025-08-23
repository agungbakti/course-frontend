/**
 * 
 * @param {"STD" | "CORP"} id - ambil kata tersebut diawal, jika id kosong = Maaf, voucher yang anda miliki tidak valid! 
 * @param {20000 | 50000} amount - std diskon 20% penumpang > 20, corp diskon 25 penumpang > 30 
 * @returns {string} - Harga Total - (Harga Total * Diskon)
 * "Selamat! Voucher untuk <status> dengan id <id> berhasil di redeem, total yang harus dibayarkan sebesar Rp. <total harga>."
 */


function travelDiscount(id, amount) {
    let status = "";
    let hargaPerOrang = 0;
    let diskon = 0;

    if (id.includes("STD")) {
        status = "STUDENT";
        hargaPerOrang = 20000;
        if (amount > 20) diskon = 0.20;
    } else if (id.includes("CORP")) {
        status = "CORPORATE";
        hargaPerOrang = 50000;
        if (amount > 30) diskon = 0.25;
    } else {
        return "Maaf, voucher yang anda miliki tidak valid!";
    }

    let totalHarga = amount * hargaPerOrang;
    totalHarga = totalHarga - (totalHarga * diskon);

    return `Selamat! Voucher untuk ${status} dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${totalHarga}.`;
}

console.log(travelDiscount("STD9845-846-1121", 21)); 
console.log(travelDiscount("STD9845-8461-121", 11)); 
console.log(travelDiscount("CORP8135-4612-912", 30));
console.log(travelDiscount("STD7601-639-184", 36));
console.log(travelDiscount("CORP5611-8456-999", 31));
console.log(travelDiscount("8347-7-9124365", 99));
console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount
