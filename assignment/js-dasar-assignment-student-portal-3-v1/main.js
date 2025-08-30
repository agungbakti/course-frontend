function process_argv() {
    const { argv } = process;
    const result = studentData(argv[2], argv[3]);

    return result;
}

function studentData(name, studentId) {
    let facultyList = [
        ["Fakultas Ekonomi", "Ekonomi"],
        ["Fakultas Ekonomi", "Manajemen"],
        ["Fakultas Ekonomi", "Akuntansi"],
        ["Fakultas Ilmu Sosial dan Politik", "Administrasi Publik"],
        ["Fakultas Ilmu Sosial dan Politik", "Administrasi Bisnis"],
        ["Fakultas Ilmu Sosial dan Politik", "Hubungan Internasional"],
        ["Fakultas Teknik", "Teknik Sipil"],
        ["Fakultas Teknik", "Arsitektur"],
        ["Fakultas Teknologi Informasi dan Sains", "Matematika"],
        ["Fakultas Teknologi Informasi dan Sains", "Fisika"],
        ["Fakultas Teknologi Informasi dan Sains", "Informatika"],
    ];

    let tahun = studentId.substring(0,4)
    let kodeProdi = studentId.substring(4,6)
    let nomorUrut = studentId.substring(6,10)

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
        default:
            return "Invalid Student's ID"
            break
    }

    // pengecekan nama fakultas yang diambil dari array
    let namaFakultas = ""
    facultyList.forEach(element => {
        let fakultasArr = element[0]
        let prodiArr = element[1]

        if (prodiArr === namaProdi) {
            namaFakultas+= fakultasArr
        }
    });

    // mendapatkan nama dosen
    let dosen = getLecturer(namaProdi)

    let result = {
        id: studentId,
        name: name,
        prody: namaProdi,
        faculty: namaFakultas,
        thesisLecturer: dosen
    }

    return result; // TODO: replace this
}

function getLecturer(prody) {
    const lecturerList = [
        ["Dr. Ulbert Silalahi, Drs., MA.", "Administrasi Publik"],
        ["Prof. Dr. Martinus Yuwana Marjuka, M.Si.", "Ekonomi"],
        ["Dott. Thomas Anung Basuki, ST., MKom.", "Informatika"],
        ["Dr. Cecilia Lauw Giok Swan, Ir., M.T.", "Teknik Sipil"],
        ["Catharina Tan Lian Soei,Dra.,MM.", "Manajemen"],
        ["Aldyfra Luhulima Lukman, S.T., M.T., Ph.D.", "Arsitektur"],
        ["Sapta Dwikardana, Drs., M.Si., Ph.D.", "Hubungan Internasional"],
        ["Agus, S.Sos., BAC., MBA., M.Phil", "Administrasi Bisnis"],
        ["Dr. Julius Dharma Lesmono, SSi., SE., MT., MSc.", "Matematika"],
        ["Liem Chin, SSi., MSi.", "Fisika"],
        ["Dr. Elizabeth Tiur Manurung, M.Si.,Ak., CA., CIRR.", "Akuntansi"],
    ];

    let dosen = ""

    lecturerList.forEach(element => {
        let dosenArr = element[0]
        let prodiArr = element[1]

        if (prody === prodiArr) {
            dosen += dosenArr
        }
    });

    return dosen; // TODO: replace this
}


// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = {
    studentData,
    getLecturer,
};
