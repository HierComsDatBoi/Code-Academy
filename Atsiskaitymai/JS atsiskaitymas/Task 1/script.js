/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector('.wrapper > form')
.addEventListener('submit', e =>{
  e.preventDefault();
  
  const kilogramai = e.target.elements.search.value;
  console.log(kilogramai);

  const svarai = kilogramai * 2.2046;
  const gramai = kilogramai / 0.0010000;
  const uncijos = kilogramai * 35.274;
  

// atsakymu atvaizdavimas
  output = document.querySelector('#output');

  const parSvarai = document.createElement('p');
  parSvarai.textContent = `${svarai} lb`;

  const parGramai = document.createElement('p');
  parGramai.textContent = `${gramai} g`;

  const parUncijos = document.createElement('p');
  parUncijos.textContent = `${uncijos} oz`;

  output.append(parSvarai,parGramai,parUncijos);
  e.target.reset();
});
