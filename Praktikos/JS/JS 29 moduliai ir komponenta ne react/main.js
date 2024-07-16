import Paragraph from "./modules/paragraph.js";
import {randomNumberTo, randomColor, sudetis} from "./modules/helperFunc.js";
import Card from "./modules/card.js";

const divOutput = document.querySelector('#komponentuPvz');

// class Paragraph{
//     constructor(text){
//         this.text = text;
//         return this.render();
//     }
//     render(){
//     const par = document.createElement('p');
//     par.textContent = this.text;
//     return par;
//     }
// }

// const par = document.createElement('p');
// par.textContent = 'labryts';
// const par0 = document.createElement('p');
// par0.textContent = 'eik miegot';
// const par1 = document.createElement('p');
// par1.textContent = 'dar anksti';
const par = new Paragraph('Labas Rytas :)');
const par1 = new Paragraph('EIK TU N* SU TUO SAVO RYTU');

divOutput.append(par, par1);

console.log(randomColor());

console.log(randomNumberTo(100));
// divOutput.appendChild(par0);
// divOutput.appendChild(par1);

const cardDiv0 = new Card({
    title: 'looking glass',
    image: {
        src: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
        alt: 'looking glass'
    },
    paragraph: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque nostrum accusamus quas porro accusantium ea optio debitis harum exercitationem commodi?'
});


const cardSection = document.querySelector('#cards');
cardSection.append(cardDiv0);
console.log(cardDiv0);