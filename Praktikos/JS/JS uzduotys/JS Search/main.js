import TableItems from "./modules/TableItems.js";

// READ
fetch(`http://localhost:3000/movies`)
  .then(res => res.json())
  .then(movies => {
    // sukame ciklą per visus filmus
    movies.forEach(movie => {

      
      
      // susikuriame HTML div elementą to vieno filmo
      const tableData = new TableItems(movie);


      // tą vieno filmo div elementą įdedame į ekraną
      document.querySelector('#tableData').appendChild(tableData);
    });
  })
  .catch(err => console.error(err));
  
