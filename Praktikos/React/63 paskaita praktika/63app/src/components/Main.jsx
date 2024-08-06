import { useEffect, useState } from "react";

import CardList from "./CardList";

const Main = () => {

const [cards, setCards] = useState([]);

useEffect(() => {
fetch(`http://localhost:8080/data`)
.then(res => res.json)
.then(data => setCards(data))
}, []);

  return ( 
    <>
    <CardList 
    data={cards}
    />
    </>
   );
}
 
export default Main;