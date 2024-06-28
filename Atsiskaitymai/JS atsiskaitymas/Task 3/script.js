/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
fetch(ENDPOINT)
.then(res => res.json())
.then(data =>{

  document.querySelector('#btn')
  .addEventListener('click', e =>{

    //pridedu klase, kad paslepti message paragrafa.
    document.querySelector('#message').classList.add('hidden');


    //sukuriamos korteles kiekvienam useriui
    data.forEach(user => {
      outputDiv = document.querySelector('#output');

      cardDiv = document.createElement('div');

      avatar = document.createElement('img');
      avatar.setAttribute('src', user.avatar_url);
      avatar.setAttribute('alt', `${user.login} avatar`);

      loginName = document.createElement('h3');
      loginName.textContent = user.login;

      cardDiv.append(avatar, loginName);
      outputDiv.appendChild(cardDiv);
    });

  });

});