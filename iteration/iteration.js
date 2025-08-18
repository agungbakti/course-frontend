// // print numbers
// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// console.log("Finish");

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }
// console.log("Finish");

// //sum
// // 1+2+3+4+...+10
// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//   sum += i;
// }

// console.log(`sum = ${sum}`);

// // faktorial
// // 1*2*3*....*10
// let faktorial = 1;
// for (let i = 1; i <= 10; i++) {
//   faktorial *= i;
// }

// console.log(`faktorial = ${faktorial}`);

// // prima
// let n = 11;
// let isPrima = true;

// for (let i = 2; i <= n - 1; i++) {
//   if (n % i === 0) {
//     isPrima = false;
//   }
// }

// console.log(n, isPrima);

// // nested lopp
// for (let baris = 1; baris <= 2; baris++) {
//   for (let kolom = 1; kolom <= 3; kolom++) {
//     console.log("ini adalah baris " + baris + ", kolom " + kolom);
//   }
// }

for (let i = 4; i >= 1; i--) {
    let star = ""
    for (let j = 1; j <= i; j++) {
        star += "*"
        
    }
    console.log(star)
}


// for (let i = 1; i <= 5; i++) {
//   let asteriskCharacter = "";
//   for (let j = 1; j <= i; j++) {
//     asteriskCharacter += "*";
//   }
//   console.log(asteriskCharacter);
// }
