document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskform');
    const taskInput = document.querySelector('input[type="text"]');
    const listItems = document.getElementById('listItems');
    const emptyMessage = document.getElementById('empty');
    const currentDateDiv = document.getElementById('current-date');

    const updateEmptyMessage = () => {
        if (listItems.children.length === 0) {
            emptyMessage.style.display = 'block';
        } else {
            emptyMessage.style.display = 'none';
        }
    };

    const addTask = (taskText) => {
        const li = document.createElement('li');
        li.className = 'iteml';
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'delete';
        deleteBtn.classList.add('delete');
        
        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'done';
        doneBtn.classList.add('done');

        li.appendChild(deleteBtn);
        li.appendChild(doneBtn);
        listItems.appendChild(li);

        deleteBtn.addEventListener('click', () => {
            li.remove();
            updateEmptyMessage();
        });

        doneBtn.addEventListener('click', () => {
            li.style.color = 'green';
            doneBtn.style.display='none'
        });

        updateEmptyMessage();
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    const displayCurrentDate = () => {
        const now = new Date();
        const dateString = now.toDateString();
        currentDateDiv.textContent = `Today's Date: ${dateString}`;
    };

    displayCurrentDate();
    updateEmptyMessage();
});
