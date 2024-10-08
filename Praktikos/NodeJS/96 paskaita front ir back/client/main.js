import PartijosCard from './modules/PartijosCard.js';


fetch('http://localhost:5000/data/partijos')
.then(res => res.json())
.then(data => {
  data.forEach(element => {
    
    const card = new PartijosCard(element);
    document.querySelector('#partijos')
    .appendChild(card);
  });
});