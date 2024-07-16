console.groupCollapsed('Keys');

let objektas = {
    pavadinimas: 'knyga',
    tirazuKiekis: 54,
    leidimoMetai: 2000,
    autorius: 'zmogus'
}

let objektoRaktai = Object.keys(objektas);

console.log(objektoRaktai);
console.log(objektas.autorius);

for (let i = 0; i < objektoRaktai.length; i++) {
    console.log(objektoRaktai[i]);
    console.log(objektas[objektoRaktai[i]]);
}

console.log('------------');

for(let raktas in objektas){
    console.log(raktas);
    console.log(objektas[raktas]);
}

console.groupEnd();


console.group('masyvu metodai');

let masyvas0 = [1,2,3,4,5,6,7,8,9]
masyvas0[1] = 4
console.log(masyvas0);
let masyvas01 = masyvas0.fill(':)', 3, 7);
console.log(masyvas0);

console.log('---------------------');

let skaiciuMasyvas = [44, 68, 46, 465, 84, 384, 64, 231, -11, 541, -1, -8, 1, 584, 84.4, -8.4, -5.84];
console.log(skaiciuMasyvas);

let blogaiRikiuotas = skaiciuMasyvas.toSorted();
console.log(blogaiRikiuotas);

let geraiRikiuotas = skaiciuMasyvas.toSorted((a,b)=>a-b);
console.log(geraiRikiuotas);

let zodziuMasyvas = ['labas', 'zylė','ate', 'azuolas', 'burbulas', 'skęsti', 'ąžuolas', 'kopija'];
console.log(zodziuMasyvas);
let blogaiRikiuotasZ = zodziuMasyvas.toSorted();
console.log(blogaiRikiuotasZ);

let geraiRikiuotasZ = zodziuMasyvas.toSorted((a,b)=>a.localeCompare(b));
console.log(geraiRikiuotasZ);


console.groupEnd();

console.groupCollapsed('veiksmai');

let sudetiAtimti = (sk1, sk2, veiksmas) => {
    if(veiksmas === '+'){
        return sk1 + sk2;
    } else {
        return sk1 - sk2
    }
}

let sudetiAtimti2 = (sk1, sk2, veiksmas) =>
    veiksmas === '+' ? sk1+sk2 : sk1-sk2;

console.log(sudetiAtimti(5,8,'+'));
console.log(sudetiAtimti2(5,8,'+'));

let skaiciuotuvas = (sk1, sk2, veiksmas) => {
    if(veiksmas === '+'){
        return sk1 + sk2;
    } else if(veiksmas === '-'){
        return sk1 - sk2;
    } else if(veiksmas === '*'){
        return sk1 * sk2;
    } else if(veiksmas === '/'){
        return sk1 / sk2;
    } else return 'error: veiksmas unknown';
}
console.log(skaiciuotuvas(54,65,'-'));


let skaiciuotuvas2 = (sk1, sk2, veiksmas) => veiksmas === '+' ? sk1+sk2 : veiksmas === '-' ? sk1-sk2 : veiksmas === '*' ? sk1*sk2 : veiksmas === '/' ? sk1/sk2 : 'error: veiksmas unknown';

console.log(skaiciuotuvas2(54,65,'-'));

5 > 6 && console.log('5 > 6');
5 < 6 && console.log('5 < 6');

console.groupEnd();

console.group('uzduotys');

//uzduotys
//  Atlikite pateiktas užduotis NENAUDODAMI iteracinių metodų.

// 1) Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.

function arrayString(array){
    let string = array.toString();
    return string;
}
console.log('1) ' + arrayString([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 2+) Parašykite funkciją, kuriai padavus kažkokį number kintamąjį (ilgą 10+ skaitmenų), jinai jį išvestų į konsolę su "-" simboliu tarp dviejų lyginių skaičių. (pvz: paduodi 645286344, grąžina '6-452-8-634-4')



// 3) Parašykite funkciją, kuri atliktų tą patį, ką daro .reverse() metodas. (žinoma nenaudokite reverse ir toReversed)

reversed = [];
function reverseArray(array){
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}
console.log('2) ' + reverseArray([1,2,3,4,5,6,7,8,9]));

// 4+) Parašykite funkciją, kuri iš jai paduoto masyvo išrinktų nurodytas reikšmes ir išvestų į konsolę likusias. (paduodama masyvas=[1,4,5,6,4,8,4,5], funkcija: func(masyvas, [4,6,8]), išveda: 1,5,5).

function skaiciuIsemimas(pradinisMasyvas, kaIsimti){
    console.log('Pradinis masyvas ' + pradinisMasyvas);
    console.log('Ka isimti ' + kaIsimti);

    for (let i = 0; i < pradinisMasyvas.length; i++){

        for (let j = 0; j < kaIsimti.length; j++){
            index = pradinisMasyvas.indexOf(kaIsimti[j])
            if (index !== -1){
            console.log(pradinisMasyvas = pradinisMasyvas.toSpliced(pradinisMasyvas.indexOf(kaIsimti[j]), 1));

        } else return 0;
    }
}
    console.log(likusios);

    return 0;
}
console.log('3) ' + skaiciuIsemimas([1,4,5,6,4,8,4,5], [4,6,8]));

// 5) Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius.

function minMax(array){
    let max = 0;
    let min = array.at(array.length - 1);
    for(let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i] ;
        }
    }
    console.log('Didziausia reiksme: ' + max);

    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i] ;
        }
    }console.log('Maziausia reiksme: ' + min);
}
console.log(minMax([5,6,7,1,5,2,9,8,2,4]));

function minMaxShort(array){
    let max = Math.max(...array);
    let min = Math.min(...array);
    console.log(min);
    console.log(max);
}
minMaxShort([5,6,7,1,5,2,9,8,2,4]);

// 6) Parašykite funkciją, kuri iš 2 jai paduotų masyvų išveda į konsolę pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę)
// 7+) Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])
// 8+) Parašykite funkciją, kuri iš jai paduoto masyvo atrinktų ir į konsolę išspausdintų tik unikalius/nesikartojančius duomenis.
// 9++) Parašykite funkciją, kuri iš jai paduotų masyvų (2 arba daugiau) atrenka ir išspausdina tik tuos duomenis, kurie kartojasi visuose masyvuose. (destruktūrizavimo (funkcijai paduoti daugiau reikšmiu, negu ji turi apsirašiusi))
// 10) Parašykite funkciją, kuri iš jai paduoto skaičių masyvo atrinktų n'tąjį didžiausią skaičių. (funkcija([12,54,1,65,78,91,45],3) grąžintų 65).



console.groupEnd();