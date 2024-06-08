// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task');

    addTaskButton.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = taskText;
            li.appendChild(span);

            const editButton  = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit-btn'); 
            editButton.addEventListener('click', () => editTask(span));
            li.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteTask(li));
            li.appendChild(deleteButton);

            taskList.appendChild(li);
            newTaskInput.value = '';
        }
    }

    function editTask(taskElement) {
        const newTaskText = prompt('Edit task:', taskElement.textContent);
        if (newTaskText !== null) {
            taskElement.textContent = newTaskText;
        }
    }

    function deleteTask(taskElement) {
        taskList.removeChild(taskElement);
    }
});
