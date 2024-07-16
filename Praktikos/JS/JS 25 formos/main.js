console.groupCollapsed('teorija');
document.querySelector('#testForm').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    //BLOGAI NES EILISKUMAS GALI KISTI ------------------------------------------------
    // const vardas = event.target[0].value;
    // const dob = event.target[2].value;
    // const amzius = event.target[3].valueAsNumber;
    // console.log(vardas, dob, amzius);

    // Ne blogai, bet nera gerai, nes per nauja kreiptis i dokumeta nera gerai
    // const vardas = document.querySelector('#userName').value;
    // console.log(vardas);

    // geras budas
    // const vardas = event.target.elements.userName.value;
    // const amzius = event.target.elements.userAge.valueAsNumber;
    // const lytis = event.target.elements.userSex.value;
    // const batai = [];
    // event.target.elements.userBoots.forEach(element => element.checked && batai.push(element.value));
    // const muzika = event.target.elements.userMusicTaste.value;

    // console.log(vardas, amzius, lytis, batai, muzika);

    //viskas objekte
    const ete = event.target.elements;
    const userInfo = {
    amzius : ete.userAge.valueAsNumber,
    lytis : ete.userSex.value,
    batai : [],
    muzika : ete.userMusicTaste.value,
    }
    ete.userBoots.forEach(element => element.checked && userInfo.batai.push(element.value));
    console.log(userInfo);
    //
});

document
.querySelector('#sudetis')
.addEventListener('submit', e => {
    e.preventDefault();
    const sk1 = e.target.elements.sk1.valueAsNumber;
    const sk2 = e.target.elements.sk2.valueAsNumber;
    console.log(sk1 + sk2);
});

console.groupEnd();

console.groupCollapsed('prakitka');
//Parašykite funkciją createPerson, kuri sukuria objektą su savybėmis: name, lastname ir age. Funkcija turi priimti šias savybes kaip argumentus ir grąžinti sukurtą objektą.
function createPerson(name, lastName, age){
    return {
        name,
        lastName,
        age
    }
}
console.log(createPerson("Jonas", "Jonaitis", 30)); // { name: "Jonas", lastname: "Jonaitis", age: 30 }

//Sukurkite funkciją printCarInfo, kuri atspausdina visą automobilio informaciją. Automobilis yra objektas su savybėmis: brand (markė), model (modelis), ir year (metai). Funkcija turi grąžinti eilutę su visomis automobilio savybėmis.


console.groupEnd();


console.groupCollapsed('Skaiciuotuvas');

document.querySelector('#skaiciuotuvas').addEventListener('submit', event => {
    event.preventDefault();
    const skaicius1 = event.target.elements.skaicius1.valueAsNumber;
    const veiksmas = event.target.elements.veiksmas.value;
    const skaicius2 = event.target.elements.skaicius2.valueAsNumber;
    if(veiksmas === '/'){
        console.log(skaicius1 / skaicius2);
    } else if (veiksmas === '*'){
        console.log(skaicius1 * skaicius2);
    } else if (veiksmas === '-'){
        console.log(skaicius1 - skaicius2);
    } else if (veiksmas === '+'){
        console.log(skaicius1 + skaicius2);
    } else {
        console.log('Error: Veiksmas privalo buti +, -, *, /.');
    }
});


//Object.keys(objektas)
//forEach(elementas => clg 'name:  ${elementas}')
//
//

console.groupEnd();

