function quantityDiscount(quantity, price) {
  let totalHarga = quantity * price
  let diskon = 0

  if (quantity >= 10) {
    diskon = totalHarga * 0.20
  } else if (quantity >= 5) {
    diskon = totalHarga * 0.15
  } else {
    diskon = totalHarga * 0
  }

  let hargaDiskon = totalHarga - diskon
  let hargaPajak = hargaDiskon * 0.11
  let hargaBayar = hargaDiskon + hargaPajak

  return hargaBayar
}

console.log(quantityDiscount(1, 100));
console.log(quantityDiscount(3, 100));
console.log(quantityDiscount(5, 100));
console.log(quantityDiscount(10, 100));
console.log(quantityDiscount(15, 3));
console.log(quantityDiscount(3, 10000));
console.log(quantityDiscount(12, 10000));
console.log(quantityDiscount(7, 10000));

module.exports = quantityDiscount;
