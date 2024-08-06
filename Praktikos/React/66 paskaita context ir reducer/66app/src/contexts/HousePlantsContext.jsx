import { createContext, useState } from "react";

const HousePlantsContext = createContext();

const HousePlantsProvider = ({ children }) => {
  const [housePlants, setHousePlants] = useState([ // duomenu prisiskyrimas
    {
      id: "23f4",
      pavadinimas: "kazkas",
      aprasymas: "981yh4f923h4wiuhrweipufhripwauhfiwuhefr"
    },{
      id: "2fs4",
      pavadinimas: "kazkas2",
      aprasymas: "981yh4f923h4wiuhrweipufhripwauhfiwuhefr"
    }
  ]);

  const addNewPlant = (newPlant) => {
    setHousePlants([...housePlants, newPlant]); //naujos geles pridejimas
  }

  const removePlant = (id) => {
    setHousePlants(housePlants.filter(plant => plant.id !== id)) // filtravimas trynimui
  }

  return (
    <HousePlantsContext.Provider value={{
      housePlants,
      addNewPlant,
      removePlant
      }}>

      {children}
    </HousePlantsContext.Provider>);
};

export { HousePlantsProvider }
export default HousePlantsContext;
