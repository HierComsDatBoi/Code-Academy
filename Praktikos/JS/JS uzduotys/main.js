// // Masyvo papildymas
// const room = ["bed", "chair", "lamp", "desk", "carpet"];
// const arrayLength = room.length;
// console.log(arrayLength);

// const result = room.indexOf('desk');
// console.log(result);

// const array = ['two', 'three', 'four'];
// console.log(array);

// array.unshift('one');
// console.log(array);

// // Tik teigiami
// const skaiciai = [-3, 1, -2, 4, -5, 6];
// const teigiamiSkaiciai = [];
// for (let i = 0; i < skaiciai.length; i++) {
//     if(skaiciai[i] > 0){
//        teigiamiSkaiciai.push(skaiciai[i])
//     }
// }
// console.log(teigiamiSkaiciai);

// // Ar elementas pasikartoja?
// const skaiciaiKartojimas = [1, 2, 3, 4, 4, 3 , 4, 3, 5];
// const elementas = 3;
// const arKartojasi = skaiciaiKartojimas.indexOf(elementas) !== skaiciaiKartojimas.lastIndexOf(elementas);
// console.log(arKartojasi);


// // Pakeiskite kiekvieną masyvo skaičių: jei skaičius yra lyginis, jį padalinkite iš dviejų; jei nelyginis, padauginkite iš trijų. Išveskite transformuotą masyvą į console.
// // [1, 2, 3, 4, 5] -> [3, 1, 9, 2, 15]

// const arLyginisMasyvas = [1, 2, 3, 4, 5];
// transformuotas = [];
// for (let i = 0; i < arLyginisMasyvas.length; i++) {
//     if (arLyginisMasyvas[i] % 2 === 0){
//         transformuotas.push(arLyginisMasyvas[i] / 2)
//     }
//     else {
//         transformuotas.push(arLyginisMasyvas[i] * 3);
//     } 
// }
// console.log(transformuotas);


// // Parašykite JavaScript ciklą, kuris atspausdina skaičius nuo 1 iki 5.

// belekas = 0;
// for (let i = 0; i <= 5; i++) {
// console.log(belekas++);    
// }

// // Sukurkite JavaScript programą, kuri suskaičiuoja sumą nuo 1 iki 5 
// let sum = 0;
// for (let i = 0; i <= 5; i++) {
//     sum += i;
// }
// console.log(sum);


// Sukurkite JavaScript programą, kuri naudojant while ciklą suskaičiuoja, kiek yra skaičių (nuo 1 iki 20), kurie dalijasi iš 3.

// let skaitiklis = 0;
// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0){
//         skaitiklis++;
//     }    
// }
// console.log(skaitiklis);


// Parašykite JavaScript programą, kuri randa didžiausią skaičių iš masyvo naudojant for ciklą.

const masyvas = [1, 3, 5, 9, 7, 6];
let max = masyvas[0];

for (let i = 0; i < masyvas.length; i++){
    if (masyvas[i] > max) {
        max = masyvas[i];
    }
}
console.log(max);