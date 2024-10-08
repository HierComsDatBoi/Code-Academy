import { createContext, useReducer, useEffect } from "react";

const LocationsContext = createContext();

const LocationsProvider = ({ children }) => {

  const [locations, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    fetch()
      .then(res => res.json())
      .then(data => dispatch({
        type: 'setData',
        data: data
      }))
  },[]);

  return (
    <LocationsContext.Provider
      value={{

      }}
    >
      {children}
    </LocationsContext.Provider>
  )

}; 