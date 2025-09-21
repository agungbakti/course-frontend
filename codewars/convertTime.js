/**
 * Tulis sebuah fungsi yang menerima bilangan bulat non-negatif (detik) sebagai input dan mengembalikan waktu dalam format yang dapat dibaca manusia ( HH:MM:SS)
 * HH= jam, ditambah 2 digit, rentang: 00 - 99
 * MM= menit, ditambah 2 digit, rentang: 00 - 59
 * SS= detik, ditambah 2 digit, rentang: 00 - 59
 * Waktu maksimum tidak pernah melebihi 359999 ( 99:59:59)
 */

function humanReadable (seconds) {
    // dibagi 3600 detik => 1 jam
    // dibagi 60 detik = > 1 menit
    let jam = Math.floor(seconds/3600)
    let menit = Math.floor((seconds % 3600) / 60);
    let detik = seconds % 60


        const HH = String(jam).padStart(2, "0");
        const MM = String(menit).padStart(2, "0");
        const SS = String(detik).padStart(2, "0");

        // gabungkan
        return `${HH}:${MM}:${SS}`;
}

console.log(humanReadable(0));
console.log(humanReadable(59));
console.log(humanReadable(60));
console.log(humanReadable(90));
console.log(humanReadable(3599));
console.log(humanReadable(3600));
console.log(humanReadable(45296));
console.log(humanReadable(86399));
console.log(humanReadable(86400));
console.log(humanReadable(359999));