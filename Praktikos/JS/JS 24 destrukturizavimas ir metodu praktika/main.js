console.groupCollapsed('Masyvo Destrukturizacija');
let masyvasDestr = ['labas',24, undefined, false, 5, 'zodis', 4,6,8,1,4];
console.log(masyvasDestr);

let el0 = masyvasDestr[0];
let el1 = masyvasDestr[1];
let el2 = masyvasDestr[2];
let el3 = masyvasDestr[4]
let elLikusieji = masyvasDestr.slice(5);
console.log(el0, el1 , el2, elLikusieji);

//su destrukturizacija
let [elDe0, elDe1, elDe2 = 'default', , elDe3, ...elDeRest] = masyvasDestr;
console.log(elDe0, elDe1, elDe2, elDe3, elDeRest);

console.groupEnd();

console.groupCollapsed('objekto Destrukturizacija');

let objektasDes = {
    vardas: 'kazys',
    amzius: 100,
    teises: true,
    zmona: 'ne',
    gyvenamojiVieta: {
        salis: 'LT',
        miestas: 'kaunas'
    },
    pomegiai: ['kartingai', 'airsoft', 'keliones'],
    vyras: 'nemanau'
}
console.log(objektasDes);

let objVardas = objektasDes.vardas;
let objAmzius = objektasDes.amzius;
let objTeises = objektasDes.teises !== undefined ? objektasDes.teises : 'nezinom';
let objVieta = objektasDes.gyvenamojiVieta.salis;
let objPomegis1 = objektasDes.pomegiai[1];

console.log(objVardas, objAmzius, objTeises, objVieta, objPomegis1);

let {vardas, amzius:metai, teises = 'nezinom', gyvenamojiVieta:{salis:kitasSaliesPav}, pomegiai:{2:pomegis}, ...objLike} = objektasDes;

console.log(vardas, metai, teises, kitasSaliesPav, pomegis, objLike);

console.groupEnd();

console.groupCollapsed('praktika fizzbuzz');

/* extra 1) Parašyti ciklą, kuris atlieka Fizz Buzz testą nuo 0 iki 100. (for ir if)
Fizz - jeigu skaičius yra 3 kartotinis/daliklis/dalijasi iš 3 be liekanos.
Buzz - jeigu skaičius yra 5 kartotinis/daliklis/dalijasi iš 5 be liekanos.
FizzBuzz - jeigu skaičius yra 3 ir 5 kartotinis/daliklis/dalijasi iš 3 ir 5 be liekanos.
skaičius - kitais atvejais. */

for (let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 === 0)
        console.log('fizzbuzz');
    else if(i % 3 === 0)
        console.log('fizz');
    else if(i % 5 === 0)
        console.log('buzz');
    else console.log(i);
    
}

console.groupEnd();

console.groupCollapsed('praktika pirminiai');
/* EXTRA 2) Parašyti ciklą, kuris atrinktų ir į konsolę išspausdintų tik pirminius skaičius intervale nuo 2 iki 100. (for(for) ir if)
    Pirminis skaičius - dalinasi TIK iš savęs paties ir iš 1 be liekanos.
pvz(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97) */
/* console.time();

let pirminiuMasyvas = [];
for( let i = 2; i <= 40000; i++){
    let arPirminis = true;
    for(let j = 2; j < i; j++){
        if(i % j === 0){
            arPirminis = false
        }
    }

    if(arPirminis === true){
        pirminiuMasyvas.push(i);
    }
}
console.timeEnd();
console.log(pirminiuMasyvas);
 */
console.groupEnd();

console.group('uzduodys')
// 11 tema array metodai
// naudojant forEach, atspausdinkite kiekvieną elementą (automobilio reikšmę). 

const cars = ["BMW", "VW", "Audi"];

cars.forEach((car) => console.log(car));

//Pakoreguokite pirmą pratimą, kad atspausdintumėte index: value (pvz: 0: BMW, 1: VW ir t.t.).

cars.forEach((car, i) => console.log(i + ': ' + car));

//Sukurkite masyvą pavadinimu names su savo draugų vardais, raidžių kapitalizaciją pamiksuokite (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padarykite, kad susikurtų naujas array (ir jį atspausdinkite), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" -> "Petras").

const vardai = ['daiNius','rokAs','luKas','edvinaS','jUrga','geDiminas','uRte','loReta','andrIus','anZelmas'];

const vardaiNaujas = vardai.map((vardas) => vardas.charAt(0).toUpperCase() + vardas.slice(1).toLowerCase());
console.log('Pradinis: ' + vardai)
console.log('Galutinis: ' + vardaiNaujas);

//Sukurkite array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter – išveskite tik tuos skaičius, kurie yra didesni arba lygūs 18.

const amziai = [15, 65, 78, 19, 9, 84, 1, 51, 94, 61, 98, 83, 18, 21, 81, 2, 38];

const pilnaAmziai = amziai.filter(amzius => amzius >= 18);
console.log(pilnaAmziai);

//Sukurkite array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find – suraskite bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

const lithuanianCities = ["Vilnius","Kaunas","Klaipėda","Šiauliai","Panevėžys","Alytus","Marijampolė","Mažeikiai","Jonava","Utena","Kėdainiai","Telšiai","Visaginas","Raseiniai","Kretinga"];
console.log(lithuanianCities.find(miestas => miestas.charAt(0) === 'K'));

//Penktame pratime esantį sprendimą pakoreguokite ir patikrinkite su some ar bent vienas miestas prasideda iš mažosios.
const lithuanianCitiesMazoji = ["Vilnius","Kaunas","klaipėda","Šiauliai","Panevėžys","Alytus","Marijampolė","Mažeikiai","Jonava","Utena","Kėdainiai","Telšiai","Visaginas","Raseiniai","Kretinga"];
console.log(lithuanianCitiesMazoji.some(miestas => miestas.charAt(0) !== miestas.charAt(0).toUpperCase()));


//Pakoreguokite šeštą pratimą, kad patikrintų ar visi miestai prasideda iš didžiosios raidės.
const lithuanianCitiesDidzioji = ["Vilnius","kaunas","Klaipėda","Šiauliai","Panevėžys","Alytus","Marijampolė","Mažeikiai","Jonava","Utena","Kėdainiai","Telšiai","Visaginas","Raseiniai","Kretinga"];
console.log(lithuanianCitiesDidzioji.every(miestas => miestas.charAt(0) !== miestas.charAt(0).toLowerCase()));

//sort---------------------------------------------------

//Pasirašykite sąrašą su draugų vardais. Išrikiuokite A-Z tvarka. 
const sortedVardai = vardaiNaujas.sort();
console.log(sortedVardai);

// Pakoreguokite pirmame pratime esantį sort, kad išrikiuotumėte Z-A tvarka.
const sortedVardaiZA = vardaiNaujas.sort((a, b) => b > a ? 1 : -1);;
console.log(sortedVardaiZA);

// Nusikopijuokite seką [5, 10, 20, 11, 12, 1, 0, 14, 25] ir su JS surūšiuokite ją mažėjimo tvarka (nuo didžiausio iki mažiausio).
const seka = [5, 10, 20, 11, 12, 1, 0, 14, 25];
console.log(seka.sort((a,b)=> b - a));

// Nusikopijuokite seką [10, 5, 20, 4] ir grąžinkite didžiausią skaičių (vieną skaičių).

const sekaMax = [10, 5, 20, 4];
sekaMax.sort((a,b) => b - a)
console.log(sekaMax[0]);
// -----------------------------------------------------------------------------------------------------------------------------------
// Užduotys su Array metodais

// Parašykite funkciją addElement, kuri naudoja push() metodą, kad pridėtų naują elementą į masyvą.

let elementuMasyvas = [];

function addElement(element){
    return elementuMasyvas.push(element);
}
addElement('svarainis');
addElement('kiwi');

console.log(elementuMasyvas);


// Sukurkite funkciją mergeArrays, kuri sujungia du masyvus į vieną.

let mergeArrays = (array1, array2) => array1.concat(array2);

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]


// Parašykite funkciją addMultipleElements, kuri naudoja spread operatorių ..., kad pridėtų kelis elementus į masyvą. 

function addMultipleElements(array, x1, x2, x3){
    return array.concat(x1, x2, x3);
}

console.log(addMultipleElements([1, 2, 3], 4, 5, 6)); // [1, 2, 3, 4, 5, 6]
 

// Parašykite funkciją doubleNumbers, kuri naudoja map() metodą, kad padvigubintų kiekvieną masyvo elementą.

// Rezultatas
// console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
 


// Parašykite funkciją findUnique, kuri grąžina unikalius elementus iš masyvo.

// Rezultatas
// console.log(findUnique([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
 


// Jūsų užduotis - sukurti funkciją planTrip, kuri nustato, ar galima atlikti kelionę neperkraunant transporto priemonės. Transporto priemonė gali pavežti iki 200 kg. Funkcija priima masyvą su daiktų svoriais ir nustato, ar bendras svoris neviršija leistinos ribos.

// console.log(planTrip([30, 70, 90])); // true
// console.log(planTrip([100, 85, 60])); // false
 

// Jūs dirbate restorane ir turite optimizuoti užsakymų aptarnavimo eilę. Sukurkite funkciją optimizeQueue, kuri surikiuoja užsakymus pagal jų dydį (mažiausi pirmi). Kiekvienas užsakymas yra objektas, turintis id ir size savybes. Funkcija grąžina masyvą su surikiuotais užsakymų ID.

// Rezultatas

// console.log(optimizeQueue([{ id: 1, size: 5 }, { id: 2, size: 3 }, { id: 3, size: 8 }])); // [2, 1, 3]
 


// Sukurkite funkciją findMostFrequent, kuri nustato ir grąžina dažniausiai pasitaikantį elementą masyve.

let masyvasFreq = [3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3];
const findMostFrequent = arr => {
    // console.log(arr);
    // raktas duomuo kurio kartojima skaiciuojame, reiksme pasikartojimo kiekis.
    let kartojimasis = {};
    let daugiausiaiKartu = 0;
    let dazniausias;
    for (let i = 0; i < arr.length; i++) {
        // console.log('iteracija: ', i);
        // console.log('reiksme: ', arr[i]);
        // console.log('objektas pries: ', kartojimasis);
        //   console.log(daugiausiaiKartu);
        //   console.log(dazniausias);
        kartojimasis[arr[i]] = (kartojimasis[arr[i]] || 0) + 1;      // kartojimasis[arr[i]] arba 0
          if (daugiausiaiKartu < kartojimasis[arr[i]]){
            daugiausiaiKartu = kartojimasis[arr[i]];
            dazniausias = arr[i];
          }
    }
    return dazniausias;
}
console.log('Dazniausias: ' + findMostFrequent(masyvasFreq));

// console.log(findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3])); // 1
 

// Sukurkite funkciją findMissingNumber, kuri randa trūkstamą skaičių iš eilės. Funkcija priima masyvą su skaičiais nuo 1 iki n. Jeigu masyve truksta bent vieno skaičiaus, funckija grąžina pirmą skaičių kurio trūksta eilėje. Jeigu visi skaičiai surašyti iš eilės, grąžina koks turėtų būti sekantis.


// console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3
// console.log(findMissingNumber([1, 2, 3, 4, 5, 6])); // 7
 

// Sukurkite funkciją generateChessBoard, kuri generuoja n x n šachmatų lentą kaip dvimatį masyvą, kur kiekvienas elementas yra arba 'B' (juoda), arba 'W' (balta). Pavyzdžiui, 3x3 lenta turėtų atrodyti: 

// console.log(generateChessBoard(3)); // [['W', 'B', 'W'], ['B', 'W', 'B'], ['W', 'B', 'W']]


console.groupEnd();