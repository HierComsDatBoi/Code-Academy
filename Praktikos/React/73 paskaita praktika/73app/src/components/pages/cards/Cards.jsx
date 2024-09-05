import { useContext } from "react";
import MenuContext from "../../../contexts/MenuContext";

import MenuCard from "../../UI/menuCard/MenuItemCard";

const Cards = () => {

  const {menuData} = useContext(MenuContext);

  return (
    <section className="itemMenu">
    <h2>Our Menu</h2>    
    <div>
      {
        menuData.map(menuItem => 
          <MenuCard
          key={menuItem.id}
          data={menuItem}
          />
        )
      }
    </div>
    </section>
  );
}

export default Cards;
