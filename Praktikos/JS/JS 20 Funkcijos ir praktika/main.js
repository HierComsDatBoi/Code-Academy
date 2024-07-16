console.groupCollapsed('uzduoteles is praeitu temu');
//Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir parodysite panaudodami alert.

function uzduotis1(vardas){
    console.log(vardas);
}
uzduotis1('vardas'); // function uduotis1 call



//Taip pat ne visos funkcijos turi parametrus – sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

function uzduotis2(){
    let skaicius = Math.random()*4+1;
    return skaicius;
}
console.log(uzduotis2());



//Sukurkite funkciją, kuri paims du parametrus – vardą ir pavardę, tada grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

function uzduotis3(vardas, pavarde){
    return vardas.length + pavarde.length;
}
let ats3 = uzduotis3('Dainius', 'Slekonis');
console.log(ats3)


// Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abėcėlės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). 

const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function uzduotis4(i){
    return abc[i - 1];
}
console.log(uzduotis4(4))

console.groupEnd();

/* Kintamieji

String, number, boolean, array ir object.
let / var / const pavadinimas = data
masyvas = [1, 2, 3, 4];
objektas = {
    Kategorija: 1,
    Kategorija: 2,
    Kategorija: 3,
    Kategorija: 4,
}

*/

console.groupCollapsed('kestucio pem du');

let objektas = {
    vardas: 'dainius',
    amzius: 29,
    ugis: 181,
    svoris: 68,
    turiKatina: false,
    pomegiai: ['DnD', 'Filmai', 'Zaidimai'],
    gyvenamojiVieta: {
        salis: 'Lietuva',
        miestas: 'Kaunas',
        gatve: 'Kestucio',
        namoNumeris: 52,
        butoNumeris: 4
    }
};
console.log(objektas); // visas objektas
console.log(objektas.vardas); //kreipimas ir objekto vidu
console.log(objektas.pomegiai[0]); // kreipimasis i objekto masyve esanti elementa
console.log(objektas.gyvenamojiVieta.miestas); // kreipimasis i objekto masyve esancio objekto elementa

console.groupEnd();

console.groupCollapsed('masyvas masyve');

let masyvas = [1, 2, 3, 4, 5];
console.log(masyvas[masyvas.length - 1])

masyvasMasyve = [
    [11, 12, 13],
    [21, 22, 23],
    [31, 32, 33]
]
console.log(masyvasMasyve);
console.log( masyvasMasyve[1][1] ); //kreipimasis i masyva masyve 22

console.groupEnd();



console.groupCollapsed('objektai masyve');
let objektaiMasyve = [
    {
        vardas: 'Dainius1',
        pavarde: 'Slekonis1',
        amzius: 291
    },  {
        vardas: 'Dainius2',
        pavarde: 'Slekonis2',
        amzius: 292
    },  {
        vardas: 'Dainius3',
        pavarde: 'Slekonis3',
        amzius: 293
    }
];
console.log(objektaiMasyve);
console.log(objektaiMasyve[0]);
console.log(objektaiMasyve[0].vardas1)

console.groupEnd();


console.groupCollapsed('if');{
let vartotojas = {
    username: 'dainius',
    role: 'user'
};
if (vartotojas.role === 'user'){
    console.log('matys iprastus user duomenis');
} else if(vartotojas.role === 'admin'){
    console.log('matys admin panele');
} else {
    console.log('vartotojas neprisijunges');
}
}
console.groupEnd();


console.groupCollapsed('switch');

let vartotojas = {
    username: 'dainius',
    role: 'admin'
};

switch(vartotojas.role){
    case 'admin': 
    console.log('matys admin panele');
    break;

    case 'user': 
    console.log('matys iprastus user duomenis');
    break;

    default: 
    console.log('vartotojas neprisijunges');
}

console.groupEnd();



console.groupCollapsed('m/s => km/h')
//funkciją convertMStoKMH, kuri konvertuoja greitį iš metrų per sekundę į kilometrus per valandą.

function convertMStoKMH(ms){
    console.log(ms*3.6);
}
convertMStoKMH(10);

console.groupEnd();



console.groupCollapsed('Paprastas skaičių palyginimas')
//funkciją compareNumber, kuri palygina du skaičius ir grąžina didesnįjį iš jų. Jei skaičiai yra lygūs, funkcija turėtų grąžinti "lygūs". Įsitikinkite, kad abu argumentai yra skaičiai; jei ne, grąžinkite klaidos pranešimą.

function compareNumber(num1, num2){
if(num1 !== num2 || num2 !== num1){
    console.log('Error: arguments must be numbers');
    }
    else if(num1 < num2){
        console.log(num2);
    }
    else if(num1 > num2){
        console.log(num1);
    }
    else if(num1 == num2){
        console.log('equal');
    }
}
compareNumber(4, 4);

//Rezultatai
// console.log(compareNumber(4, 7)); // 7
// console.log(compareNumber(5, 5)); // "equal"
// console.log(compareNumber(8, 5)); // 8
// console.log(compareNumber("5", 5)); // "Error: most arguments must be numbers"
console.groupEnd();


console.groupCollapsed('Keliamieji metai?')
//funkciją isLeapYear, kuri priima year ir pasako ar metai yra keliamieji. Funkcija turi grąžinti true, jei metai keliamieji, ir false priešingu atveju.

let isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0 || (year % 400 === 0));
console.log(isLeapYear(2020));
console.groupEnd();


console.groupCollapsed('Didžiausias masvyo elementas')
//funkciją findMaxInArray, kuri ras ir grąžins didžiausią elementą masyve. Galime daryti prielaidą, kad visi array elementai yra skaičiai.
function findHighest(biggest) {
    let max = -9999;
    for (let i = 0; i < biggest.length; i++) {
        if(max < biggest[i])
        max = biggest[i];
    }
    
    return max;
}
console.log(findHighest([1, 3, 2, 5, 4]));

console.groupEnd();


console.groupCollapsed('Masyvo elementų suma')
//Parašykite funkciją sumArray, kuri suskaičiuoja ir grąžina visų elementų sumą masyve. Kaip ir užduotyje prieš tai, galime daryti prielaidą, kad visi array elementai yra skaičiai.
function sumArray(array){
    sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([4, 2, 3, 4, 5])); // 15

console.groupEnd();


console.groupCollapsed('Lygūs masyvai?')
//funkciją arMasyvaiLygūs, kuri palygina du masyvus ir grąžina true, jei jie yra identiški, kitu atveju - false.

function areArraysEqual(array1, array2){
if(array1.length !== array2.length)
    return false;
    
    for (let i = 0; i < array1.length; i++){
        if(array1[i] !== array2[i]){
            return false
        } 
    } 
    return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysEqual([1, 2, 3], [1, 2, 4])); // false

console.groupEnd();


console.groupCollapsed('Eilutės apvertimas')
//funkciją reverseString, kuri apverčia eilutę be jokių išorinių funkcijų ar metodų.

function reverseString(zodis){
    console.log(zodis);
    let apverstas = '';
    for(let i = word.length-1; i >= 0; i--){
        apverstas += word[i];
    }
    return apverstas;
}

console.log(reverseString('vienas'))
console.groupEnd();

