import { useEffect } from "react";
import Card from "./Card";

const CardList = ({data}) => {
  
  return ( 
    data.map(cardInfo =>
      {
      <div className="container">
      <Card
      id={cardInfo.id}
      status={cardInfo.status}
      name={cardInfo.name}
      par={cardInfo.par}
      />
      </div>
      }
    );
   );
}
 
export default CardList;