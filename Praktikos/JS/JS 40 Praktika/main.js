// import MovieCard from "./modules/MovieCard.js";

// // READ
// fetch(`http://localhost:3000/movies`)
//   .then(res => res.json())
//   .then(movies => {
//     // sukame ciklą per visus filmus
//     movies.forEach(movie => {
//       console.log(movie);

//       // susikuriame HTML div elementą to vieno filmo
//       const cardDiv = new MovieCard(movie);

//       // tą vieno filmo div elementą įdedame į ekraną
//       document.querySelector('#moviesTP').appendChild(cardDiv);
//     });
//   })
//   .catch(err => console.error(err));


//https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-26.php

function frontBack(input){
  if(input.length >= 3){
    const string = input.substring((input.length)-3);
    return string + input + string;}
    else {
      return false;
    }
}

console.log(frontBack('asd'));


//https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-40.php
console.log(Math.abs)