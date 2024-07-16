document
.querySelector('#names')
.addEventListener('submit', e => { // submitui sukuriamas eventas
    e.preventDefault();
    const name = e.target.elements.name.value; // paimama name reiksme
    const times = e.target.elements.times.value || 1; // paimama kartu reiksme
    // console.log(name, times);
    const outputDiv = document.querySelector('#namesOutput'); // pasirenkamas outputo divas
    outputDiv.innerHTML = '';  // isvalomas output divas

    for(let i = 0; i < times; i++){
    const par = document.createElement('p'); // sukuriamas paragragrafas
    par.textContent = name.repeat(i+1); // irasomas tekstas i paragrafa
    outputDiv.appendChild(par); 
    }
    e.target.reset(); // resetina laukus, kad neliktu reiksmiu
});

//fizz buzz

// document
// .querySelector('#fizzBuzz')
// .addEventListener('submit', e => {
//     e.preventDefault();
//     const ete = e.target.elements;
//     const from = ete.from.valueAsNumber;
//     const to = ete.to.valueAsNumber;
//     // console.log(from, to);

//     const outputDiv = document.querySelector('#fizzBizzOutput');
//     outputDiv.innerHTML = '';

//     if(from > to){
//         outputDiv.textContent = 'Nuo negali buti mazesnis nei iki';
//     } else {
//         for (let i = from; i <= to; i++){
//             const iterationDiv = document.createElement('div');
//             if(i%5 === 0 && i%3 === 0){
//                 iterationDiv.textContent = 'fizz buzz';
//             } else if (i%5 === 0){
//                 iterationDiv.textContent = 'buzz';
//             } else if (i%3 === 0){
//                 iterationDiv.textContent = 'fizz';
//             } else {
//                 iterationDiv.textContent = i;
//             }
//             outputDiv.appendChild(iterationDiv);
//         }
//         e.target.reset();
//     }
// });

//fizzbuzz

document
  .querySelector('#fizzBuzz')
  .addEventListener('submit', e => {
    e.preventDefault();
    const ete = e.target.elements;
    const from = ete.from.valueAsNumber;
    const to = ete.to.valueAsNumber;
    // console.log(from, to);
    const outputDiv = document.querySelector('#fizzBuzzOutput');
    outputDiv.innerHTML = '';
    if(from > to){
      outputDiv.textContent = `Nuo negali būti mažesnis negu iki. Prašome pakeisti įvestis.`;
    } else {
      for(let i = from; i <= to; i++){
        const iterationDiv = document.createElement('div');
        if(i % 5 === 0 && i % 3 === 0){
          // console.log('FizzBuzz');
          iterationDiv.textContent = 'Fizz\nBuzz';
        } else if(i % 5 === 0){
          // console.log('Buzz');
          iterationDiv.textContent = 'Buzz';
        } else if(i % 3 === 0){
          // console.log('Fizz');
          iterationDiv.textContent = 'Fizz';
        } else {
          // console.log(i);
          iterationDiv.textContent = i;
        }
        outputDiv.appendChild(iterationDiv);
      }
      e.target.reset();
    }
    // Galima patobulinti, kad būtų galimybė nusirodyti Fizz ir Buzz reikšmes. (nebūtinai 3 ir 5)
// Galima patobulinti, kad antrosios įvesties atributo min reikšmė būtų vienu didesnė negu pirmosios įvesties įvesta reikšmė. Naudoti extra event. Google koks tai įvykis.
  });


  // filmu forma

  document
  .querySelector('#filmas')
  .addEventListener('submit', e => {
    e.preventDefault();
    const ete = e.target.elements;
    const filmas = {
        pavadinimas: ete.name.value,
        plakatas: ete.thumbnail.value,
        aprasymas: ete.description.value,
        leidimoMetai: ete.releaseDate.value,
        autorius: ete.author.value,
        IMDB: ete.imdbScore.valueAsNumber,
        eirinoCategorija: ete.eirinCategory.value
    }
    console.log(filmas);

    const filmuOutput = document.querySelector('#filmaiOutput');

    const cardDiv = document.createElement('div');
    const heading = document.createElement('h3');
    heading.textContent = filmas.pavadinimas;

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('imageContainer');
    const image = document.createElement('img');
    image.setAttribute('src', filmas.plakatas);
    image.setAttribute('alt', `${filmas.pavadinimas} plakatas`);
    imgDiv.appendChild(image);

    const description = document.createElement('p');
    description.textContent = filmas.aprasymas;

    const extraInfoDiv = document.createElement('div');
    extraInfoDiv.classList.add('extraInfo');

    const releaseDate = document.createElement('span');
    releaseDate.textContent = 'Leidimo metai: ' + filmas.leidimoMetai.slice(0,4);

    const author = document.createElement('span');
    author.textContent = 'Autorius: ' + filmas.autorius;

    const imdbScore = document.createElement('span');
    imdbScore.textContent = 'IMDB Vertinimas: ' + filmas.IMDB;

    const eirinCategory = document.createElement('span');
    eirinCategory.textContent = 'Eirin kategorija: ' + filmas.eirinoCategorija

    extraInfoDiv.append(releaseDate, author, imdbScore, eirinCategory);

    cardDiv.append(heading, imgDiv, description, extraInfoDiv);
    filmuOutput.appendChild(cardDiv);
  });

  //uzduotys

// pirma

document
.querySelector('#uzduotys')
.addEventListener('click', e => {
    e.preventDefault();
    // alert('Labas :P');
    const antraUzd = document.createElement('p');
    antraUzd.textContent = 'paragrafe tekstas apie jus.';
    naujasPar = document.querySelector('#uzduotys');
    naujasPar.appendChild(antraUzd);
});

// +1
let kintamasis = 0;
document
.querySelector('#trecia')
.lastElementChild
.addEventListener('click', e =>{
    e.preventDefault();
    const treciaUzd = document.querySelector('h1');
    treciaUzd.innerText = kintamasis++;
    // console.log(treciaUzd);
});

// prevent copy
document
.querySelector('#preventCopy')
.firstElementChild
.addEventListener('copy', e => {
    e.preventDefault();
    alert('Astarion says: No No No');
});

document
.querySelector('#predator')
.addEventListener('mousemove', e => {
    e.preventDefault();
    const keitimas = document.querySelector('#predator').firstElementChild;
    if(keitimas.innerHTML === "DON'T MOVE!"){
        keitimas.innerHTML = 'YOU DIED';
        keitimas.classList = 'pajudejai';
    } else {
        keitimas.innerHTML = "DON'T MOVE!"
        keitimas.classList = 'nejudek';
    }
});
// ar imanoma padaryt, kad ne