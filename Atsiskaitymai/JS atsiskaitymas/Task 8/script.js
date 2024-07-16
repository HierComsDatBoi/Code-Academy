/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator{
  sum(sk1, sk2){
    return sk1 + sk2;
  }
  subtraction(sk1, sk2){
    return sk1 - sk2;
  }
  multiplication(sk1, sk2){
    return sk1 * sk2;
  }
  division(sk1, sk2){
    if (sk2 !== 0)
    return sk1 / sk2;
  return 'error, nesidalina is 0';
  }
}

console.log(new Calculator().sum(5, 10));
console.log(new Calculator().subtraction(5, 10));
console.log(new Calculator().multiplication(5, 10));
console.log(new Calculator().division(5, 10));