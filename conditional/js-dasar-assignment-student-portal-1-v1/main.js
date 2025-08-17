function process_argv() {
    const { argv } = process;
    const result = krsApplication(argv[2], argv[3], argv[4]);

    return result;
}

function krsApplication(name, programId, gpa) {
    let jurusan = ""
    let jumlahSks = 0
    let result = ""
    let gpaFloat = parseFloat(gpa)

    // cek gpa < 0 || >4
    if (gpaFloat < 0 || gpaFloat > 4) {
        return "Invalid gpa number"
    }

    // pengecekan program id
    switch (programId) {
        case "ACC":
            jurusan = "Akuntansi"
            break;
        case "HIN":
            jurusan = "Hubungan Internasional"
            break;
        case "IAB":
            jurusan = "Ilmu Administrasi Bisnis"
            break;
        case "IAP":
            jurusan = "Ilmu Administrasi Publik"
            break;
        case "MJN":
            jurusan = "Manajemen"
            break;
        case "TKM":
            jurusan = "Teknik Kimia"
            break;
    }  

    // pengecekan gpaFloat
    if (gpaFloat > 2.99) {
        jumlahSks = 24
    } else if (gpaFloat >= 2.5) {
        jumlahSks = 21
    } else if (gpaFloat >= 2) {
        jumlahSks = 18
    } else if (gpaFloat >= 1.5) {
        jumlahSks = 15
    } else {
        jumlahSks = 12
    }

    if (gpaFloat >= 3) {
        result = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpaFloat}, kamu dapat mengambil SKS sebanyak ${jumlahSks} SKS untuk semester depan.`
    } else {
        result = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpaFloat}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${jurusan} dan hanya dapat mengambil SKS sebanyak ${jumlahSks} SKS untuk semester depan.`
    }

    return result
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = krsApplication;
