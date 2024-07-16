export default class Task{
    constructor({id, name}){
        this.id = id;
        this.name = name;
        return this.render();
    }

    render(){
        //task element container 
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        //task status
        const taskStatusDiv = document.createElement('div');
        const taskStatusButton = document.createElement('button');
        taskStatusButton.textContent = 'X';
        taskStatusDiv.appendChild(taskStatusButton);

        //task name
        const taskName = document.createElement('div');
        taskName.textContent = this.name;

        //task edit
        const taskEditDiv = document.createElement('div');
        const taskEditButton = document.createElement('button');
        taskEditButton.textContent = 'Edit';
        taskEditDiv.appendChild(taskEditButton);

        //task trash div button create
        const taskTrashDiv = document.createElement('div');
        const taskTrashButton = document.createElement('button');
        taskTrashButton.textContent = 'Trash';
        taskTrashDiv.appendChild(taskTrashButton);
        
        //delete function
        taskTrashButton.addEventListener('click', ()=>{
            console.log('trash');
            
        });
        



        taskDiv.append(taskStatusDiv, taskName, taskEditDiv, taskTrashDiv);
        return taskDiv;
    }
};