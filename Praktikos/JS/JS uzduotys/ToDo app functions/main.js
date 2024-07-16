import Task from "./modules/Task.js";

//read
fetch('http://localhost:3000/tasks')
.then(res => res.json())
.then(tasks => {
 console.log(tasks);
    tasks.forEach(data => {
        const taskDiv = new Task(data);
        document.querySelector('#tasksContainer').appendChild(taskDiv);
    });
});

document.querySelector('#newTask').addEventListener('submit', e =>{
    e.preventDefault();
    const ete = e.target.elements;
    const taskData = {
        id: Date.now().toString(),
        name: ete.taskNew.value
    };

    const taskDiv = new Task(taskData);
    document.querySelector('#tasksContainer').appendChild(taskDiv);

    fetch('http://localhost:3000/tasks', {
        method: "POST",
        headers: {"Content-Type":"application/json"
        }, 
        body: JSON.stringify(taskData)
    });
    e.target.reset();
});