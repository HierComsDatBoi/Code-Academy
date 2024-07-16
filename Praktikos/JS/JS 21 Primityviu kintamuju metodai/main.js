console.groupCollapsed("paskaita");
let max = Number.MAX_VALUE;
console.log(max);

let zodis = 'labas rytas';

console.log(zodis[6]);
console.log(zodis.at(6));
console.log(zodis.charAt(6));
console.log(zodis.charCodeAt(6));
console.log(zodis.concat(' abugeli'));
console.log(zodis.startsWith('la'));
console.log(zodis.endsWith('as'));
console.log(zodis.includes('as r'));
console.log(zodis.lastIndexOf('a'));
console.log(zodis.indexOf('as'));
console.log((zodis+' ').repeat(3));

console.groupEnd();

// Didžiosios raidės
// Parašykite funkciją convertToUpperCase, kuri pakeičia visus teksto simbolius į didžiąsias raides (pvz. labas pakeitų į LABAS).

function convertToUpperCase(text){
    return text.toUpperCase();
}
console.log(convertToUpperCase('labas'));


// // Teksto iškarpa
// // Sukurkite funkciją extractSubstring, kuri grąžina iškarpos, pradedant nuo 3 iki 7 simbolio, tekstą.

function extractSubstring(string){
    return string.substring(2, 8);
}
console.log(extractSubstring("Sveikas pasauli")); // "eikas"
 

// // Iš didžiosios raidės
// // Sukurkite funkciją capitalizeFirstLetter, kuri pavertimas pirmąją kiekvieno žodžio raidę tekste į didžiąją.

function capitalizeFirstLetter(string){
    let longString = string.split(' ');
    let returnString = ' ';
for (let i = 0; i < longString.length; i++) {
    console.log(longString[i].charAt(0).toUpperCase() + longString[i].slice(1));
    returnString += longString[i].charAt(0).toUpperCase() + longString[i].slice(1) + ' ';
}
    return returnString.trim();
}

console.log(capitalizeFirstLetter("labas rytas, pasauli!")); // "Labas Rytas, Pasauli!"
 

// // Nepadorių žodžių cenzūra
// // Parašykite funkciją censorCurseWords, kuri tekste pakeičia nurodytus nepadorius žodžius į "****". Sprendimas turi nenaudoti reguliariųjų išraiškų (angl. Regular expression).




// console.log(censorCurseWords("This is a badword and another badword.", ["badword"])); // "This is a **** and another ****."


//wtf
const isLegalAge = true;

console.log(isLegalAge); // Atvaizduos kaip boolean


// 1) Pasirašyti / susikurti string kintamąjį.
// 2) Pasirašyti / susikurti number kintmąjį.
// 3) Pasirašyti / susikurti masyvą tik su string kintamaisiais.
// 4) Pasirašyti / susikurti masyvą tik su number kintamaisiais.
// 5) Pasirašyti / susikurti masyvą ir su string ir su number kintamaisiais.
// 6) Išvesti pirmąją 1'os užduoties kintamojo raidę.
// 7) Išvesti paskutinę 1'os užduoties kintamojo raidę.
// 8) Išvesti viduriniąją 1'os užduoties kintamojo raidę.
// 9) Pasirašyti funkciją, kuri iš jai pateikto string kintamojo išvestų jai nurodytą raidę (kelintąją). Pvz.:(uzd9("labas", 3) => "b").
// 10) Patikrinti ar 2'os užduoties kintamasis yra lyginis skaičius.
// 11) Patikrinti ar 2'os užduoties kintamasis yra nelyginis skaičius.
// 12) Patikrinti ar 2'os užduoties kintamasis yra sveikasis skaičius.
// 13) Parašyti funkciją, kuri pateiktų informaciją ar jai paduotas number kintamasis yra: lyginis/nelyginis skaičius. Pvz.: (uzd13(5) => nelyginis);
// 14) Iš 3'čios užduoties masyvo išvesti tik ilgesnius nei 5 simbolių žodžius.
// 15) Iš 3'čios užduoties masyvo išvesti tik trumpesnius nei 8 simbolių žodžius.
// 16+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio pirmąsias raides.
// 17+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio paskutiniąsias raides.
// 18++) Parašyti funkciją, kuri iš jai pateikto masyvo išvestų tik tuos žodžius, kurie yra ilgesni negu A, bet trumpesni negu B. Pvz.:(funkcija uzd18(masyvas, a, b) => uzd18(["Labas", "ate", "Katašunis"], 4, 8) => "Labas")
// 19) Sudėti visus 4'tos užduoties masyvo kintamuosius ir sumą išvesti į konsolę.
// 20) Sudėti kas antrą 4'tos užduoties masyvo kintamąjį ir sumą išvesti į konsolę.
// 21+) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį ir išvestų sumą į konsolę.
// 22++) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį tik tada, jeigu tas kintamasis yra lyginis arba nelyginis (nurodyti funkcijai) ir išvestų sumą į konsolę. Pvz.:(funk([1,2,3,4,5,6,7,8,9], 3, false) => 12)
// 23) Iš 5'tos užduoties masyvo atrinkite skaičius į vieną masyvą, o string'us į kitą.

let string = 'pirmas';
let number = 2;
let stringArray = ['vienas', 'du', 'trys', 'keturi', 'penki'];
let numberArray = [1, 2, 3, 4, 5];
let numStrArray = [1, 'du', 3, 'keturi', 5];

console.log(string[0]);

let stringLast = string[string.length-1];
console.log(stringLast)
