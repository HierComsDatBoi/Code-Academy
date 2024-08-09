function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function splitDiv(div) {
  // Clear the content of the clicked div
  // div.textContent = '';
  div.style.display = 'grid';
  div.style.gridTemplateColumns = '1fr 1fr';
  div.style.gridTemplateRows = '1fr 1fr';

  // Create four new smaller div elements
  for (let i = 0; i < 4; i++) {
      let newDiv = document.createElement('div');
      newDiv.className = 'split-div grid-item';
      newDiv.style.backgroundColor = getRandomColor(); // Set random background color
      newDiv.addEventListener('click', function() {
          splitDiv(newDiv);
      });
      div.appendChild(newDiv);
  }
}

document.getElementById('myDiv').addEventListener('click', function(event) {
  splitDiv(this);
});