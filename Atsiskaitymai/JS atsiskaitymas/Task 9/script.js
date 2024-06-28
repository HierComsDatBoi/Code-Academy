/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    if (this.budget >= 100_000_000) {
      return true;
    } else {
      return false;
    }
  }
}

const filmasBrangus = new Movie('Abugelis', 'Scorsezi', 100_000_001);
const filmasPigus = new Movie('Abugelis', 'Scorsezi', 99_999_999);

console.log(filmasBrangus.wasExpensive());
console.log(filmasPigus.wasExpensive());