function rekapSalesByName(data, name) {
    let total = 0

    for (const element of data) {
        if (element.salesName === name) {
            total += element.totalSales
        }
    }

    return total
}

function salesReport(data, correction) {
     // Terapkan correction
    for (let fix of correction) {
        if (fix.type === "tambah") {
        // push data baru
        data.push({
            salesName: fix.salesName,
            totalSales: fix.totalSales,
            salesDate: fix.salesDate,
        });
        } else if (fix.type === "koreksi") {
        // cari data lama dan ganti totalSales
        let found = data.find(
            (d) => d.salesName === fix.salesName && d.salesDate === fix.salesDate
        );
        if (found) {
            found.totalSales = fix.totalSales; // pakai =, bukan +=
        }
        }
    }

    console.log("Data setelah correction:", data);
    
    // hitung total penjumlahan per nama dan diurutkan, menggunakan rekapSalesByName
    let salesNames = ["Adi", "Budi", "Poltak", "Sri", "Udin"]
    let totalSalesByName = {}
    
    for (const name of salesNames) {
        totalSalesByName[name] = rekapSalesByName(data, name)
    }

    console.log(totalSalesByName)
    
    // hitung total penjualan bulanan
    let monthlySales = data.reduce((a,b) => a + b.totalSales ,0)
    console.log(monthlySales);

    // cari best salesman
    let bestName = null
    let bestTotal = 0

    // mengubah totalsalesbyname menjadi array
    for (const key in totalSalesByName) {
        let name = key;
        let total = totalSalesByName[key];

        if (total > bestTotal) {
            bestTotal = total
            bestName = name
        }
    }

    console.log(bestName);
    console.log(bestTotal);
    
    return {
        monthlySales: monthlySales,
        totalSalesByName: totalSalesByName,
        bestSalesman: `Penjualan terbanyak dilakukan oleh ${bestName} dengan total penjualan dalam 1 bulan sebesar ${bestTotal}`
    }

}

let data = [
    {
        salesName: 'Udin',
        totalSales: 100,
        salesDate: 1 
    },
    {
        salesName: 'Poltak',
        totalSales: 100,
        salesDate: 1
    },
    {
        salesName: 'Poltak',
        totalSales: 50,
        salesDate: 2
    },
];

let correction = [
    {
        type: 'tambah',
        salesName: 'Udin',
        totalSales: 100,
        salesDate: 2
    },
    {
        type: 'koreksi',
        salesName: 'Udin',
        totalSales: 20,
        salesDate: 2
    }
]

console.log(salesReport(data, correction));
// console.log(rekapSalesByName(data, "Poltak"));
// console.log(rekapSalesByName(data, "Udin"));


module.exports = {
    salesReport,
};
