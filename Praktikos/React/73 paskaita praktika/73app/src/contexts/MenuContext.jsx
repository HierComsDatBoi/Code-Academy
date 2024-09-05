import { createContext, useEffect, useState } from "react";

const MenuContext = createContext();

const MenuDataProvider = ({children}) => {

  useEffect(()=>{
    fetch('http://localhost:8080/coffee')
    .then(res => res.json())
    .then(data=>setMenuData(data));
  },[]);

  const [menuData, setMenuData] = useState([]);

    const addNewMenuItem = (newMenuItem) =>{
      setMenuData([...menuData, newMenuItem])
    }
    const removeMenuItem = (id) =>{
      setMenuData(menuData.filter(menuItem => menuItem.id !== id))
    }

  return (
    <MenuContext.Provider
    value={{
      menuData,
      addNewMenuItem,
      removeMenuItem
    }}
    >
    {children}
    </MenuContext.Provider>
  )
}

export {MenuDataProvider};
export default MenuContext;