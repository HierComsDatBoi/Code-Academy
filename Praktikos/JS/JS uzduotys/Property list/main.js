fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_APP_ID')
  .then(response => response.json())
  .then(data => {

    console.log(data);
  });