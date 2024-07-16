import GameCard from "./modules/GameCard.js";

//read
fetch('http://localhost:3000/videoGames')
.then(res => res.json())
.then(games => {
    console.log(games);
    
    games.forEach(game => {
        const gameDiv = new GameCard(game);
        document.querySelector('#games > div').appendChild(gameDiv);
    });
});

//create

document.querySelector('#games > form')
.addEventListener('submit', e =>{
    e.preventDefault();
    const ete = e.target.elements;
    const gameData = {
        id: Date.now().toString(),
        name: ete.name.value,
        photo: ete.photo.value,
        description: ete.description.value,
        releaseDate: ete.releaseDate.value,
        developer: ete.developer.value,
        platform: ete.platform.value,
        genres: ete.genres.value.split(', '),
        checked: false
    };
    // console.log(gameData);

    const gameDiv = new GameCard(gameData);
    document.querySelector('#games > div').appendChild(gameDiv);

    fetch('http://localhost:3000/videoGames', {
        method: "POST",
        headers: {"Content-Type":"application/json"
        }, 
        body: JSON.stringify(gameData)
    });
    e.target.reset();
});


//modal example

//atidarymas
document.querySelector('#modalExampleButton')
.addEventListener('click', ()=>{
    document.querySelector('#modalExample').showModal();
});

//uzdarymas su mygtuku
document.querySelector('#modalExample > button')
.addEventListener('click', e=>{
    e.target.parentElement.close();
});

// uzdarymas spaudziant uz modalo

document.querySelector('#modalExample')
.addEventListener('click', e => {
    const dialogDimensions = e.target.getBoundingClientRect();
    if(e.target.attributes.open){
    if(
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ){
        e.target.close();
    }
}
});