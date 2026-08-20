
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');


function addTask() {
    const taskText = taskInput.value.trim();

   
    if (taskText === "") {
        alert("الرجاء كتابة مهمة أولاً!");
        return;
    }


    const li = document.createElement('li');

    
    const span = document.createElement('span');
    span.textContent = taskText;
    
    span.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'حذف';
    deleteBtn.classList.add('delete-btn');
    
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});