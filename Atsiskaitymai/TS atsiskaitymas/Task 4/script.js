"use strict";
/* ------------------------------ TASK 4 -----------------------------------
Parašykite TS funkciją, kuri priima tekstą ir grąžina skaičių susidedantį iš vienetų ir nulių tokio ilgio, kokio yra pats žodis. Skaičius visada prasideda vienetu.

Pvz.:
  "labas"   --> 10101
  "kebabas" --> 1010101
  "a"       --> 1
-------------------------------------------------------------------------- */
// let word:string = 'Dainius';
function zeroOne(word) {
    let array = [];
    for (let i = 0; i < word.length; i++) {
        if (i == 0 || i % 2 != 1) {
            array.push(1);
        }
        else {
            array.push(0);
        }
    }
    return Number(array.join(''));
}
;
console.log(zeroOne('Dainius'));
