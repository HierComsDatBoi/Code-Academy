import { createContext, useReducer, useEffect } from "react";

const LocationsContext = createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'setData':
      return action.data;
    case 'addNewLocation':
      return [...state, action.data];
    case 'editLocation':
      return state.map(el => {
        if(el._id === action.id){
          return {
            // ...el,
            ...action.data,
            _id: action.id
          }
        } else { return el }
      });
    default:
      return state;
  }
}

const LocationsProvider = ({ children }) => {

  const [locations, dispatch] = useReducer(reducer, []);

  const addNewLocation = (newLocation) => {
    fetch(`http://localhost:5500/locations`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newLocation)
    }).then(res => res.json())
      .then(resMessage => {
        if(resMessage.acknowledged){
          dispatch({
            type: "addNewLocation",
            data: {
              ...newLocation,
              _id: resMessage.insertedId
            }
          })
        }
      })
  }

  const editSpecificLocation = (editedLocation, id) => {
    fetch(`http://localhost:5500/locations/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(editedLocation)
    }).then(res => res.json())
      .then(() => dispatch({
        type: "editLocation",
        data: editedLocation,
        id: id
      }))
  }

  const returnSpecificLocation = (id) => {
    return locations.find(el => el._id === id);
  }

  useEffect(() => {
    fetch(`http://localhost:5500/locations`)
      .then(res => res.json())
      .then(data => dispatch({
        type: 'setData',
        data: data
      }))
  }, []);

  return (
    <LocationsContext.Provider
      value={{
        locations,
        addNewLocation,
        returnSpecificLocation,
        editSpecificLocation
      }}
    >
      {children}
    </LocationsContext.Provider>
  )
}

export { LocationsProvider };
export default LocationsContext;