const k = {
    raktas: 'reiksme',
    kita: 'reiksme'
};

// console.log('pries fetch');

fetch(`https://randomuser.me/api/`)
.then(response =>{
    console.log(response);
    return response.json();
})
.then(data =>{
    const user = data.results[0];
    // klase?
    //toliau koda cia rasyti
});

// console.log('po fetch');
// console.log(duomenys);



/* const fetchISS = () => fetch('https://api.wheretheiss.at/v1/satellites/25544')
.then(res => res.json())
.then(data => {
    console.log(data);
    });
    
    // setInterval(fetchISS, 10000); gauna info kas 10000ms
    
    // kaip fetch su post metodu
    fetch('url', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            },
            body: json.stringify(data)
            }).then(res => console.log(res)) //nebutinas. tam kad pasiziuret response info
            .catch(err => console.error(err)); // gaudo fetchinimo klaidas */
            
// dating website 
/* Įsivazduokite, kad dirbate prie pažinčių portalo produkto – jūsų užduotis greitai sukurti puslapį, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų puslapyje.

Svarbu atvaizduoti:
Nuotrauką
Vardą 
Amžių
El. pašto adresą */

fetch(`https://randomuser.me/api/`)
.then(response =>{return response.json()})
.then(data =>{
const duomenys = data.results[0];
console.log(duomenys);

const userPic = duomenys.picture.large;
const userName = duomenys.name.first;
const userAge = duomenys.dob.age;
const userEmail = duomenys.email;
console.log(userPic + ' ' + userName + ' ' + userAge + ' ' + userEmail);

const profilis = document.querySelector('#profilis');
const fotoDiv = document.createElement('div'); // ideti i profilis
fotoDiv.classList.add('foto');

const image = document.createElement('img');
image.setAttribute('src', userPic);
image.setAttribute('alt', userName + ' picture');
fotoDiv.appendChild(image);

const infoDiv = document.createElement('div'); // ideti i profilis
infoDiv.classList.add('info');

const vardasSpan = document.createElement('span');
vardasSpan.textContent = userName;
const amziusSpan = document.createElement('span');
amziusSpan.textContent = userAge;
const emailSpan = document.createElement('span');
emailSpan.textContent = userEmail;
infoDiv.append(vardasSpan, amziusSpan, emailSpan);

profilis.append(fotoDiv, infoDiv);

console.log(profilis);
});
