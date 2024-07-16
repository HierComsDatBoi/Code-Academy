//DOM basic
const test0_Section = document.querySelector('#test0');
console.dir(test0_Section);

//blogasis budas
test0_Section.innerHTML += '<h3>Testuojames Bad</h3>';
test0_Section.innerHTML += '<img src="https://mystickermania.com/cdn/stickers/gravity-falls/gf-waddles-jacket-512x512.png" alt="kazkas" class="mediumImage">'

//Gerasis budas
const antraste0 = document.createElement('h3');
const antraste0Text = document.createTextNode('Testuojames');
antraste0.appendChild(antraste0Text);
// test0_Section.appendChild(antraste0);

antraste0.textContent = 'testuojames good';

//sukuriamas paveiksliukas, duodami atributai ir klases
const image0 = document.createElement('img');
image0.setAttribute('src', 'https://mystickermania.com/cdn/stickers/gravity-falls/gf-waddles-jacket-512x512.png');
image0.setAttribute('alt', 'waddles distinguished gentleman');
image0.classList.add('smallImage');
// test0_Section.appendChild(image0);

// idedama i sekcija
test0_Section.append(antraste0, image0)

// CARD
const cardSection = document.querySelector('#card');

const cardDiv = document.createElement('div');
cardDiv.classList.add('cardLandscape');

const heading3 = document.createElement('h3');
heading3.textContent = 'Pavadinimas';

const innerCardDiv = document.createElement('div');
const cardImage = document.createElement('img');
cardImage.setAttribute('src', 'https://mystickermania.com/cdn/stickers/gravity-falls/gf-waddles-jacket-512x512.png');
cardImage.setAttribute('alt', 'Waddles');
innerCardDiv.appendChild(cardImage);

const par = document.createElement('p');
par.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sed natus sapiente itaque. Id, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ad dolorem laboriosam, deserunt est corrupti voluptas aspernatur reprehenderit voluptate possimus.';

cardDiv.append(heading3, innerCardDiv, par);
cardSection.appendChild(cardDiv);

console.groupCollapsed('neatsimenu');{

cardDiv.addEventListener('click', () => {
    cardDiv.classList.toggle('cardLandscape');
    cardDiv.classList.toggle('cardPortrait');
  });

  const sarasoSec = document.querySelector('#generateList');
  const list = document.createElement('ol');
//   for (let i = 0; i < 10; i++) {
//     const li = document.createElement('li');
//     li.textContent = 'labas';
//     list.appendChild(li);
//   }

const gyvunai = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
gyvunai.forEach(gyvunas => {
const li = document.createElement('li');
li.textContent = gyvunas;
list.appendChild(li);    
});
  sarasoSec.appendChild(list);

// const sections = document.querySelectorAll('section');
// console.log(sections);
// sections.forEach()
document.querySelectorAll('section').forEach(section => {
    console.dir(section);
    section.classList.add('positionRelative');
  
    const button = document.createElement('button');
    button.textContent = 'Slėpti';
    button.classList.add('positionAbsolute', 'top0', 'right0');
    button.addEventListener('click', () => {
      [...section.children].forEach(child => {
        child.classList.toggle('displayNone');
      });
      // section.firstElementChild.classList.remove('displayNone'); // norint palikti pirmąjį elementą neslepiamą
      button.classList.remove('displayNone');
      if(button.textContent === 'Slėpti'){
        button.textContent = 'Rodyti';
      } else {
        button.textContent = 'Slėpti';
      }
    });
  
    section.appendChild(button);
  });
console.groupEnd();}

const cardUzduotis = [
    {
      pavadinimas: 'Mortal Engines',
      aprasymas: 'In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.',
      paveiksliukoURL: 'https://m.media-amazon.com/images/M/MV5BNzY1MDA2OTQ0N15BMl5BanBnXkFtZTgwMTkzNjU2NTM@._V1_.jpg',
      paveiksliukoALT: 'mortal engines movie poster'
    },{
      pavadinimas: 'Harry Potter and the Half-Blood Prince',
      aprasymas: `As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as "the property of the Half-Blood Prince" and begins to learn more about Lord Voldemort's dark past.`,
      paveiksliukoURL: 'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_.jpg',
      paveiksliukoALT: 'HP and HBP movie poster'
    },{
      pavadinimas: 'Transformers: Rise of the Beasts',
      aprasymas: `During the '90s, a new faction of Transformers - the Maximals - join the Autobots as allies in the battle for Earth.`,
      paveiksliukoURL: 'https://m.media-amazon.com/images/M/MV5BZTNiNDA4NmMtNTExNi00YmViLWJkMDAtMDAxNmRjY2I2NDVjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
      paveiksliukoALT: 'Transformers RotB movie poster'
    },{
      pavadinimas: 'The Matrix',
      aprasymas: `When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.`,
      paveiksliukoURL: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      paveiksliukoALT: 'Matrix movie poster'
    }
  ];

cardUzduotis.forEach(movie => {
    const cardGenerated = document.querySelector('#cardGenerated'); // pasirenkama sekcija

    const cardContent = document.createElement('div'); //sukuriamas div elementas 
    cardContent.classList.add('cardGeneratedContent'); // duodama div elemetui klase .cardGeneratedContent

    const movieName = document.createElement('h3'); // sukuriamas pavadinimo headingas
    movieName.textContent = movie.pavadinimas ; // priskiriamas pavadinimo tekstas

    const moviePic = document.createElement('div'); // divas paveiksliukui
    const picSet = document.createElement('img'); //sukuriamas paveiksliuko tagas
    picSet.setAttribute('src', movie.paveiksliukoURL); // suteikiamas linkas paveiksliukui
    picSet.setAttribute('alt', movie.paveiksliukoALT); // suteikiamas alt paveiksliukui
    moviePic.appendChild(picSet); // idedamas paveiksliukas i div

    const movieDesc = document.createElement('p'); // sukuriamas paragrafas aprasymui
    movieDesc.textContent = movie.aprasymas; // ikeliamas tekstas paragrafui

    cardContent.append(movieName, moviePic, movieDesc); // sukeliamos dalys i bendra kintamaji
    cardGenerated.appendChild(cardContent); //priskiriama sekcijai cardGenerated
});




//cao
//pirma uzduotis
function naujasParagrafas(tekstas){
    naujasBody = document.querySelector('#naujasBody');
    const naujasPar = document.createElement('p');
    naujasPar.textContent = tekstas;
    naujasBody.appendChild(naujasPar);
}

naujasParagrafas('kazkoks tekstas');

// antra uzduotis

const vardas = document.querySelector('#name');
vardas.textContent = 'Dainius';

document.querySelector('.bluetext > span').textContent = 'blue';
