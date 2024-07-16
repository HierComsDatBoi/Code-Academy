export default class EditGameCard {
  constructor(id, name, photo, description, releaseDate, developer, platform, genres, checked) {
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
  render() {
    const dialogEl = document.createElement('dialog');

    const heading = document.createElement('h3');
    heading.textContent = `Edit game`;


//--------------AI generated 

    // Create form element
    const form = document.createElement('form');

    // First div
    const div1 = document.createElement('div');

    // Name label and input
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'nameMod');
    nameLabel.textContent = 'Pavadinimas';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('value', this.name);
    nameInput.setAttribute('name', 'nameMod');
    nameInput.setAttribute('id', 'nameMod');

    // Photo label and input
    const photoLabel = document.createElement('label');
    photoLabel.setAttribute('for', 'photoMod');
    photoLabel.textContent = 'Nuotrauka';
    const photoInput = document.createElement('input');
    photoInput.setAttribute('type', 'url');
    photoInput.setAttribute('value', this.photo);
    photoInput.setAttribute('name', 'photoMod');
    photoInput.setAttribute('id', 'photoMod');

    // Append elements to div1
    div1.appendChild(nameLabel);
    div1.appendChild(nameInput);
    div1.appendChild(document.createElement('div')); // Empty div
    div1.appendChild(photoLabel);
    div1.appendChild(photoInput);

    // Second div
    const div2 = document.createElement('div');

    // Description label and textarea
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'descriptionMod');
    descriptionLabel.textContent = 'Aprasymas';
    const descriptionTextarea = document.createElement('textarea');
    descriptionTextarea.setAttribute('name', 'descriptionMod');
    descriptionTextarea.textContent = this.description;
    descriptionTextarea.setAttribute('id', 'descriptionMod');

    // Append elements to div2
    div2.appendChild(descriptionLabel);
    div2.appendChild(descriptionTextarea);

    // Third div
    const div3 = document.createElement('div');

    // Release date label and input
    const releaseDateLabel = document.createElement('label');
    releaseDateLabel.setAttribute('for', 'releaseDateMod');
    releaseDateLabel.textContent = 'Leidimo data';
    const releaseDateInput = document.createElement('input');
    releaseDateInput.setAttribute('type', 'date');
    releaseDateInput.setAttribute('value', this.releaseDate);
    releaseDateInput.setAttribute('name', 'releaseDateMod');
    releaseDateInput.setAttribute('id', 'releaseDateMod');

    // Append elements to div3
    div3.appendChild(releaseDateLabel);
    div3.appendChild(releaseDateInput);

    // Fourth div
    const div4 = document.createElement('div');

    // Developer label and input
    const developerLabel = document.createElement('label');
    developerLabel.setAttribute('for', 'developerMod');
    developerLabel.textContent = 'Kurejas';
    const developerInput = document.createElement('input');
    developerInput.setAttribute('type', 'text');
    developerInput.setAttribute('name', 'developerMod');
    developerInput.setAttribute('value', this.developer);
    developerInput.setAttribute('id', 'developerMod');

    // Append elements to div4
    div4.appendChild(developerLabel);
    div4.appendChild(developerInput);

    // Fifth div
    const div5 = document.createElement('div');

    // Platform label and select
    const platformLabel = document.createElement('label');
    platformLabel.setAttribute('for', 'platformMod');
    platformLabel.textContent = 'Platforma';
    const platformSelect = document.createElement('select');
    platformSelect.setAttribute('name', 'platformMod');
    platformSelect.setAttribute('value', this.platform);
    platformSelect.setAttribute('id', 'platformMod');

    // Platform options
    const optionPC = document.createElement('option');
    optionPC.setAttribute('value', 'PC');
    optionPC.textContent = 'PC';
    const optionXbox = document.createElement('option');
    optionXbox.setAttribute('value', 'Xbox');
    optionXbox.textContent = 'Xbox';
    const optionPS = document.createElement('option');
    optionPS.setAttribute('value', 'PS');
    optionPS.textContent = 'PlayStation';
    const optionSwitch = document.createElement('option');
    optionSwitch.setAttribute('value', 'Switch');
    optionSwitch.textContent = 'Switch';

    // Append options to select
    platformSelect.appendChild(optionPC);
    platformSelect.appendChild(optionXbox);
    platformSelect.appendChild(optionPS);
    platformSelect.appendChild(optionSwitch);

    // Append elements to div5
    div5.appendChild(platformLabel);
    div5.appendChild(platformSelect);

    // Sixth div
    const div6 = document.createElement('div');

    // Genres label and input
    const genresLabel = document.createElement('label');
    genresLabel.setAttribute('for', 'genresMod');
    genresLabel.textContent = 'Zanrai';
    const genresInput = document.createElement('input');
    genresInput.setAttribute('type', 'text');
    genresInput.setAttribute('name', 'genresMod');
    genresInput.setAttribute('value', this.genres.join(', '));
    genresInput.setAttribute('id', 'genresMod');
    genresInput.setAttribute('placeholder', 'Zanras1, Zanras2, Zanras3, ...');

    // Append elements to div6
    div6.appendChild(genresLabel);
    div6.appendChild(genresInput);

    // Submit input
    const submitInput = document.createElement('input');
    submitInput.setAttribute('type', 'submit');
    submitInput.setAttribute('value', 'Redaguoti zaidima');

    // Append all divs and submit input to form
    form.appendChild(div1);
    form.appendChild(div2);
    form.appendChild(div3);
    form.appendChild(div4);
    form.appendChild(div5);
    form.appendChild(div6);
    form.appendChild(submitInput);

    // Append form to body or a specific container
    document.body.appendChild(form); // Change this to a specific container if needed

//---------AI generated end




    form.addEventListener('submit', e => {
      e.preventDefault();
      const ete = e.target.elements;
      const editedCard = {
          name: ete.nameMod.value,
          photo: ete.photoMod.value,
          description: ete.descriptionMod.value,
          releaseDate: ete.releaseDateMod.value,
          developer: ete.developerMod.value,
          platform: ete.platformMod.value,
          genres: ete.genresMod.value.split(', '),
          checked: this.checked
      };
      fetch(`http://localhost:3000/videoGames/${this.id}`, {
        method: 'PUT',
        headers: {
          "Content-Type":"application/json"
        },
        body:JSON.stringify(editedCard)
        });
      
      
      

      dialogEl.remove();
    });

    const exitButton = document.createElement('button');
    exitButton.textContent = `Cancel Edit`;

    exitButton.addEventListener('click', () => {
      dialogEl.remove();
    });


    dialogEl.append(heading, form, exitButton);
    return dialogEl;
  }
}