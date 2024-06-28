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
  .addEventListener('submit', e => {
    e.preventDefault();

    const kg = e.target.elements.search.value;
    output = document.querySelector('#output');
    output.classList.add('white');
    output.textContent = '';
    //patikrinama ar ivestas skaicius ir ne tuscia reiksme

    if (isNaN(kg) || kg == '') {
      output.textContent = 'Error: Not a number';
    } else {


      const lb = kg * 2.2046;
      const gr = kg / 0.0010000;
      const oz = kg * 35.274;

      // atsakymu atvaizdavimas

      const parLb = document.createElement('p');
      parLb.textContent = `${kg} kg = ${lb} lb`;

      const parGr = document.createElement('p');
      parGr.textContent = `${kg} kg = ${gr} g`;

      const parOz = document.createElement('p');
      parOz.textContent = `${kg} kg = ${oz} oz`;

      output.append(parLb, parGr, parOz);
    }
    e.target.reset();
  });
