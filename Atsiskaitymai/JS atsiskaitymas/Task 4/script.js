/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
fetch(ENDPOINT)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    output = document.querySelector('#output');
    
    data.forEach(carBrand => {
      brandDiv = document.createElement('div');

      brand = document.createElement('h2');
      brand.textContent = carBrand.brand;

      brandDiv.appendChild(brand);

      carBrand.models.forEach(model => {
        carModel = document.createElement('p');
        carModel.textContent = model;
        brandDiv.appendChild(carModel);
        
      });

      output.appendChild(brandDiv);
    });
    
  });
