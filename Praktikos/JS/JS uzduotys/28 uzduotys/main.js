import Calculator from "./modules/Calculator.js";

//CALCULATOR------------------------------------------------------------------------------------------

const calcInHTML = document.querySelector('div.calculator');

const calculator = new Calculator(calcInHTML);

console.log(calculator);

calculator.calculator.children[1]
.querySelectorAll('[data-number]').forEach(el => el.addEventListener('click', () => calculator.addNumber(el.dataset.number)));
// .forEach(el => el.dataset.number && el.addEventListener('click', () => calculator.addNumber(el.dataset.number)));


calculator.calculator.children[1]
.querySelectorAll('[data-action]').forEach(el => el.addEventListener('click', () => calculator.addNumber(el.dataset.action)));




//------------------------------------------------------------------


class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
        this.helloCar = `mano mašina ${this.name} ir ji buvo pagaminta ${this.year} metais`;
    }
    pristatymas(){
        return this.helloCar;
    }
    age(){
        const todayDate = new Date().getFullYear();
        return todayDate - this.year;
    }
}

const masina = new Car('Volvo', 1999);
console.log(masina.pristatymas());
console.log(masina.age());

//----------------------------------------------------------------------------------------------------

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.color = Math.floor(Math.random()*16777215).toString(16);
    }
    hexColor(){
        return '#' + this.color;
    }
    area(){
        return this.width * this.height;
    }
    perimeter(){
        return 2*this.width + 2*this.height;
    }
}
const rectangle = new Rectangle(10, 10);

console.log(rectangle.hexColor());

//----------------------------------------------------------------------------------------------------

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.coordinates = this.x + this.y;
    }
distance(){
    return Math.hypot(this.x, this.y);
}
}
const points = new Point(2,5);
console.log(points.distance());

//----------------------------------------------------------------------------------------------------

document
.querySelector('#lentele')
.addEventListener('submit', e =>{
e.preventDefault();

const x = e.target.elements.x.valueAsNumber;
const y = e.target.elements.y.valueAsNumber;

const table = document.createElement('table');

for (let i = 0; i < y; i++) {
    const row = document.createElement('tr');
    table.appendChild(row);

    for( let j = 0; j < x; j++){
        const cell = document.createElement('td');
        row.appendChild(cell);
        cell.textContent = 'Kalmaras';
    }
}

const tableOutput = document.querySelector('#lentele');
tableOutput.appendChild(table);
});

document
.querySelector('#optionRemove')
.addEventListener('submit', e => {
    e.preventDefault();
    const forma = document.querySelector('#removePlease');
    const pasirinkimas = document.querySelector('#removePlease').selectedIndex;
    forma.remove(pasirinkimas);
});