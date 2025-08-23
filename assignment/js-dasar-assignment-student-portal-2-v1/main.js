function process_argv() {
    const { argv } = process;
    const result = studentStatus(argv[2], argv[3]);

    return result;
}

// FISIP 2011 32 0091
// FE 2022 31 0004
function studentStatus(name, studentId) {
    let kodeFakultas = ""
    let tahun = ""
    let kodeProdi = ""
    let nomor = ""
    
    if (studentId.length == 15) {
        kodeFakultas = studentId.substring(0,5)
        tahun = studentId.substring(5,9)
        kodeProdi = studentId.substring(9,11)
        nomor = studentId.substring(11,15)
    } else if(studentId.length == 14) {
        kodeFakultas = studentId.substring(0,4)
        tahun = studentId.substring(4,8)
        kodeProdi = studentId.substring(8,10)
        nomor = studentId.substring(10,14)
    } else {
        kodeFakultas = studentId.substring(0,2)
        tahun = studentId.substring(2,6)
        kodeProdi = studentId.substring(6,8)
        nomor = studentId.substring(8,12)
    }

    // pengecekan nama fakultas
    let namaFakultas = ""
    switch (kodeFakultas) {
        case "FE":
            namaFakultas = "Fakultas Ekonomi"
            break;
        case "FISIP":
            namaFakultas = "Fakultas Ilmu Sosial dan Politik"
            break;
        case "FT":
            namaFakultas = "Fakultas Teknik"
            break;
        case "FTIS":
            namaFakultas = "Fakultas Teknologi Informasi dan Sains"
            break;
    }

    // pengecekan nama prodi
    let namaProdi = ""
        switch (kodeProdi) {
        case "21":
            namaProdi = "Ekonomi"
            break;
        case "22":
            namaProdi = "Manajemen"
            break;
        case "23":
            namaProdi = "Akuntansi"
            break;
        case "31":
            namaProdi = "Administrasi Publik"
            break;
        case "32":
            namaProdi = "Administrasi Bisnis"
            break;
        case "33":
            namaProdi = "Hubungan Internasional"
            break;
        case "41":
            namaProdi = "Teknik Sipil"
            break;
        case "42":
            namaProdi = "Arsitektur"
            break;
        case "51":
            namaProdi = "Matematika"
            break;
        case "52":
            namaProdi = "Fisika"
            break;
        case "53":
            namaProdi = "Informatika"
            break;
    }

    return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi ${namaProdi} pada ${namaFakultas} sejak tahun ${tahun}.`
}


// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = studentStatus;

