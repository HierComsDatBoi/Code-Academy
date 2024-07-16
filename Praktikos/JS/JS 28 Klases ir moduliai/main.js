const asmuo0 = {
    vardas: 'Dainius',
    pavarde: 'Slekonis',
    amzius: 29,
    arMiega: true
};
const asmuo1 = {
    vardas: 'Rokas',
    pavarde: 'Banaitis',
    amzius: 27,
    arMiega: false
};
console.log(asmuo0, asmuo1);

class Asmuo{
    #vardas; #pavarde; //privatumai, nebutini
    constructor(vardas, pavarde, amzius, arMiega){
        this.#vardas = vardas;
        this.#pavarde = pavarde;
        this.amzius = amzius;
        this.arMiega = false;
        this.dob = new Date().getFullYear() - this.amzius;
        this.inicialai = `${this.#vardas[0]}.${this.#pavarde[0]}`;
    }
    pasisveikininaSu(vardas){
        return `${this.#vardas} pasisveikina su ${vardas}`;
    }

    //privatumu apejimas
    set vardas(naujasVardas){ //arba galima pakeist setVardas
        this.#vardas = naujasVardas;
    }
    get vardas(){ //arba galima pakeist getVardas
        return this.#vardas;
    }
    static helloWorld(par1){
        return `Hello world with parameter: ${par1}`;
    }
}

const asmuo2 = new Asmuo('Abugelis', 'Abugauskas', 58);
const asmuo3 = new Asmuo('Sraigius', 'Bronius', 69);
console.log(asmuo2, asmuo3);
console.log(asmuo2.vardas);
console.log(asmuo2.pasisveikininaSu('Onute'));
console.log(asmuo3.pasisveikininaSu('Plyta'));


class Knyga{
    constructor( {pavadinimas, autorius, leidimoMetai} ){ //destrukturizuotas objektas -> knygosObjektas
        this.pavadinimas = pavadinimas; //is data.js failo
        this.autorius = autorius;
        this.leidimoMetai = leidimoMetai;
        this.knygosAmzius = new Date().getFullYear() - this.leidimoMetai;
    }

    // constructor(pavadinimas, autorius, leidimoMetai){
    //     this.pavadinimas = pavadinimas;
    //     this.autorius = autorius;
    //     this.leidimoMetai = leidimoMetai;
    // }

    // constructor(knygosObjektas){
    //     this.pavadinimas = knygosObjektas.pavadinimas; //is data.js failo
    //     this.autorius = knygosObjektas.autorius;
    //     this.leidimoMetai = knygosObjektas.leidimoMetai;
    // }

    // getKnygosAmzius(){
    //     return new Date().getFullYear() - this.leidimoMetai;
    // }
}

// const knygos = [
//     new Knyga('Harry Narkoter', 'J.K.Rowling', 1997),
//     new Knyga('LOTR', 'Tolkien', 1954)
// ];
// const knyga0 = new Knyga('Harry Narkoter', 'J.K.Rowling', 1997);
// const knyga1 = new Knyga('LOTR', 'Tolkien', 1954)

// const knyga0 = new Knyga(knyguSaugykla[0]);
// console.log(knyga0);

const knygos = knyguSaugykla.map(el => new Knyga(el));
console.log(knygos);

// -------------------------------- CAO automobiliai-------------------------------------

class Car{
    constructor(brand, model, engine, basePrice){
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.basePrice = basePrice;
    }
    turnOn(){
        console.log('Vroom');
    }
    getPrice(){
        let additionalPrice = 0;
        if(this.engine === 'electric'){
            additionalPrice = 10000;
        } else if(this.engine === 'diesel'){
            additionalPrice = 5000;
        }
        return this.basePrice + additionalPrice;
    }
}

const cars = [
    new Car('VW', 'Gold', 'electric', 1000),
    new Car('BMW', '8', 'diesel', 1000),
    new Car('Tesla', 'ModelT', 'petrol', 1000)
];

console.log(cars[0]);
cars[0].turnOn();
console.log(cars[2].getPrice());

//-----------------------banko saskaita--------------------------------------------------------------------
class BankAccount{
    constructor(ownerName, balance){
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount){
        return this.balance += amount;
    }
    withdraw(amount){
        return this.balance -= amount;
    }
}
const account = new BankAccount("Jonas", 0);
account.deposit(100);
account.withdraw(30);
console.log(account.balance); // 70

//----------------------------kino teatras-------------------------------------------------------

console.log('kino teatras---------------------------------------------------');

class MovieTheater{
    constructor(rows, seatsPerRow){
        this.rows = rows;
        this.seatsPerRow = seatsPerRow;
        //this.seats = (new Array(this.rows)).fill(new Array(this.seatsPerRow).fill(false)); // naujas mas su kiek eiliu ir sukuriamos kedes su false reiksmemis
        this.seats = Array.from({length: this.rows}, () => Array(this.seatsPerRow).fill(0));
    }
    bookSeat(row, seat){
        if(this.seats[row-1][seat-1] === 0){ // vieta laisva
            this.seats[row-1][seat-1] = 1;
            console.log('Vieta uzrezervuota');
        } else { // vieta uzimta
            console.log('Vieta jau uzimta, prasome pasirrinkti kita');
        }
    
    }
    cancelBooking(row, seat){
        if(this.seats[row-1][seat-1] === 1){
            this.seats[row-1][seat-1] = 0;
            console.log('Rezervacija atsaukta');
        } else {
            console.log('Vieta nebuvo rezervuota, pasitikrinkite ar teisingai ivedete');
        }
    }

    checkAvailability(row, seat){
        if(this.seats[row-1][seat-1] === 1){
            console.log('vieta uzimta');
        } else { console.log('vieta laisva');}
    }
};
const teatras= new MovieTheater(5, 3);
console.log(teatras);

teatras.bookSeat(3, 2);

/* bookSeat(row, seat) - metodas vietos rezervavimui. Jei vieta jau užimta, turi būti grąžinamas pranešimas apie tai.

cancelBooking(row, seat) - metodas rezervacijos atšaukimui. Jei vieta nebuvo rezervuota, turi būti grąžinamas atitinkamas pranešimas.

checkAvailability(row, seat) - metodas, grąžinantis true arba false, priklausomai nuo to, ar vieta yra laisva. */
console.log('kino teatras pabaiga-------------------------------------------');

// ---------------------------Bibliotekos valdymo sistema--------------------------------------------------

class Book{
    constructor(title, author, year){
        this.id = Math.ceil(Math.random()*9999999).toString();
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} by ${this.author} published in ${this.year}`;
    }
}

const books = [
    new Book('Harry Potter', 'J.K.Rowling', 1997),
    new Book('Harry Potter', 'J.K.Rowling', 1997),
    new Book('Harry Potter', 'J.K.Rowling', 1997),
    new Book('Harry Potter', 'J.K.Rowling', 1997),
    new Book('Lord of the Rings', 'J.R.R.Tolkien', 1954),
    new Book('Lord of the Rings', 'J.R.R.Tolkien', 1954),
    new Book('Lord of the Rings', 'J.R.R.Tolkien', 1954)
];

class Library{
    constructor() {
        this.borrowers = [{userName:'Jonas', borrowedBooks:[54,12]},{userName:'Ugnė', borrowedBooks:[54,12]}]; // [{userName:'petras', borrowedBooks:[id, id, id]}]
        this.books = [];
    }

    addBook(book){
        this.books.push(book);
    }
    listAvailableBooks(){
        return this.books;
    }
    lendBook(bookTitle, userName){
        if(this.books.some(book => book.title === bookTitle)){
            console.log('rado');
            const bookIdToGive = this.books.find(book => book.title === bookTitle).id;
            console.log(bookIdToGive);
            //priskiriam id skolininkui
            if(this.borrowers.some(borrower => borrower.userName === userName)){
                console.log('vartotojas yra');
                // sukame ciklą per visus skolininkus ir jeigu tai yra tas skolininkas, jo skolintų knygų masyvą grąžiname papildytą, jeigu ne tas, grąžina nekeistą
                this.borrowers = this.borrowers.map(borrower => {
                    if(borrower.userName === userName){
                        return {
                            userName: borrower.userName,
                            borrowedBooks: [...borrower.borrowedBooks, bookIdToGive]
                        }
                    }else{ 
                        return borrower;
                    }
                });
            }else{ console.log('vartotojo nera');
            this.borrowers = [...this.borrowers, {
                userName: userName, borrowedBooks:[bookIdToGive]
            }];
        }
        this.books = this.books.filter(book => book.id !== bookIdToGive);
        }else{
        console.log('Knygos nera' + bookTitle);}
    }
}

const library = new Library();
books.forEach(book => library.addBook(book));
console.log(library);
console.log(library.listAvailableBooks());
library.lendBook('Harry Potter', 'petras');


//-------------------------------------------------------------------------------------------------------------------------------