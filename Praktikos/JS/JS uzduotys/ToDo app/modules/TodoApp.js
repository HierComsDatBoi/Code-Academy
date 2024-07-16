import ToDoItem from "./ToDoItem.js";
export default class TodoApp{
    constructor(todoEl){
        this.todoEl = todoEl;
        this.tasks = localStorage.getItem('tasks') || [];
        this.formSubmit();
        this.loadTasks();
    }

    formSubmit(){
        this.todoEl.firstElementChild.addEventListener('submit', e => {
            e.preventDefault();
            console.log(e);
            if(e.target.elements.task.value.trim().length < 4 || e.target.elements.task.value.trim().length > 100){
                this.todoEl.children[1].textContent = `Task must be longer than 4 symbols and shorter than 100 symbols.`; 
            } else {
                this.todoEl.children[1].textContent = '';
                this.addTask(e.target.task.value.trim())
            }
        });
    }

    addTask(value){
        console.log(value);
        const newTask = {
            id: Date.now(),
            text: value,
            completed: false
        }
        this.tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        // const newTask = new ToDoItem(value);
        // this.todoEl.children[2].appendChild(newTask);
    }

    loadTasks(){

    }
}