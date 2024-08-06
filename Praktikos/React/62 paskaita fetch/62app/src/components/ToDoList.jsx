import ToDoItem from "./ToDoItem";

const ToDoList = ({ data, removeToDo, changeStatus }) => {
  return (
    <div className="toDoList">
      <h2>My ToDos</h2>
      <div>
        {
          data.map(todo => 
            <ToDoItem 
              key={todo.id} //duomenu padavimas
              task={todo} //duomenu padavimas
              removeToDo={removeToDo} //duomenu padavimas
              changeStatus={changeStatus} //duomenu padavimas
            />
          )
        }
      </div>
    </div>
  );
}
 
export default ToDoList;