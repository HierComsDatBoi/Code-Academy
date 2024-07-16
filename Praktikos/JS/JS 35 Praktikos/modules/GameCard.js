import DeleteConfirm from "./deleteConfirm.js";
import EditGameCard from "./EditGameCard.js";

export default class GameCard{
    constructor({id, name, photo, description, releaseDate, developer, platform, genres, checked}){
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.description = description;
        this.releaseDate = releaseDate;
        this.developer = developer;
        this.platform = platform;
        this.genres = genres;
        this.checked = checked;
        return this.render();
    }
    render(){
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('gameCard');

        const heading = document.createElement('h3');
        heading.textContent = this.name;

        const image = document.createElement('img');
        image.setAttribute('src', this.photo);
        image.setAttribute('alt', `${this.name} thumbnail`)

        const par = document.createElement('p');
        par.textContent = this.description;

        const span1 = document.createElement('span');
        span1.textContent = `Leidimo data: ${this.releaseDate}`;

        const span2 = document.createElement('span');
        span2.textContent = `Kurejas: ${this.developer}`;

        const span3 = document.createElement('span');
        span3.textContent = `Platforma: ${this.platform}`;

        const span4 = document.createElement('span');
        span4.textContent = `Zanrai: ${this.genres.join(', ')}`;

        const br1 = document.createElement('br');
        const br2 = document.createElement('br');
        const br3 = document.createElement('br');

        //delete
        const delButton = document.createElement('button');
        delButton.textContent = 'Trinti';
        delButton.addEventListener('click', () =>{
            console.log('bandome trinti');



            // cardDiv.remove();
            // fetch(`http://localhost:3000/videoGames/${this.id}`, {
            //     method: "DELETE" 
            // });
            //confirmation

            //kuriamas naujas modalas kuris paskiau yra istrinamas

            const deleteConfirmModal = new DeleteConfirm(cardDiv, this.id);
            document.body.appendChild(deleteConfirmModal);
            deleteConfirmModal.showModal();

            // negerai nes kuriasi daug eventu tiem patiem mygtukams

        /*  document.querySelector('#deleteConfirmation').showModal();
            document.querySelector('#deleteNo').addEventListener('click', e =>{
                e.target.parentElement.close();
                
            });

            document.querySelector('#deleteYes').addEventListener('click', e =>{
                e.target.parentElement.close();
                console.log(this);

            }); */
        });

        //update
        const statusButton = document.createElement('button');
        statusButton.textContent = this.checked ? 'Nezaista': 'Zaista';
        statusButton.addEventListener('click', () => {
            //ekrane
            this.checked = !this.checked;
            statusButton.textContent = !this.checked ? 'Nezaista': 'Zaista';
            //duomenyse
            fetch(`http://localhost:3000/videoGames/${this.id}`, {
                method: "PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({checked: this.checked})
            });
        });

        //edit

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', ()=>{
            const editCard = new EditGameCard(this.id, this.name, this.photo, this.description, this.releaseDate, this.developer, this.platform, this.genres, this.checked);
            document.body.appendChild(editCard);
            editCard.showModal();
        });



        cardDiv.append(heading, image, par, span1, br1, span2, br2, span3,br3, span4, delButton, statusButton, editButton);
        return cardDiv;
    }
};