import { useState, useEffect } from "react";

import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

const ToDo = () => {

  const [formInput, setFormInput] = useState(''); //[reiksmes, galimybe nustatyti]

  const [toDos, setToDos] = useState([]);//[reiksmes, galimybe nustatyti]
  
  const addNewToDo = (newTask) => {
    // setToDos([...toDos, 'labas']);
    // setToDos([...toDos, false]);
    setToDos([...toDos, newTask]);
    // console.log('add funkcijoje', toDos);
    fetch(`http://localhost:8080/todos`,{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newTask)
    });
  }
  // ekvivalentus - componentDidUpdate jeigu keitėsi toDos state'as
  // useEffect(()=>{
  //   console.log('efekte', toDos);
  // }, [toDos]);
  const removeToDo = (id) => {
    setToDos(toDos.filter(el => el.id !== id));
    fetch(`http://localhost:8080/todos/${id}`,{
      method: "DELETE"
    });
  }
  const changeStatus = (id) => {
    setToDos(toDos.map(el => {
      if( id === el.id ){
        fetch(`http://localhost:8080/todos/${id}`,{
          method: "PATCH",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({ completed: !el.completed })
        });
        return {
          id: el.id,
          name: el.name,
          completed: !el.completed
        }
      } else {
        return el;
      }
    }));
  }

  // ekvivalentus - componentDidMount
  useEffect(() => {
    // console.log('vykdosi ToDo komponento užkrovimas');
    fetch(`http://localhost:8080/todos`)
      .then(res => res.json())
      .then(data => setToDos(data));
  }, []);

  return (
    <section>
      <ToDoForm 
        formInput={formInput} //duomenu padavimas
        setFormInput={setFormInput} //duomenu padavimas
        addNewToDo={addNewToDo} //duomenu padavimas
      />
      <ToDoList
        data={toDos} //duomenu padavimas
        removeToDo={removeToDo} //duomenu padavimas
        changeStatus={changeStatus} //duomenu padavimas
      />
    </section>
  );
}
 
export default ToDo;