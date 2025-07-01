/*
    this is the main file for the task list
    we will use this file to save the taskaty to the local storage
    we will use this file to load the taskaty from the local storage
    we will use this file to delete the taskaty from the local storage
*/

let taskaty = JSON.parse(localStorage.getItem('taskaty')) || []; // this is the task list

// *************************************************************************************

/*  
    each time we add a task, we need to save it to the local storage
    we will use this function to save the taskaty to the local storage
    we will use this function to load the taskaty from the local storage
    we will use this function to delete the taskaty from the local storage
*/

function savetaskaty() {
    localStorage.setItem('taskaty', JSON.stringify(taskaty));
}

// *************************************************************************************

/* 

    Here we add a task to the task list 
    and save it to the local storage with the function savetaskaty() 
    then we render  the taskaty with the function rendertaskaty()

 */

function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    if (text) {
        // here we add the taskaty to the task list
        taskaty.push({ 
            id: Date.now(), // here we add the id to the taskaty with the function Date.now()
            text, // here we add the task text to the taskaty
            state: false // here we add the task state done to the taskaty with the function false
        });

        // here we save the taskaty to the local storage with the function savetaskaty() 
        savetaskaty();

        // here we render the taskaty with the function rendertaskaty() to show the taskaty in the task list
        rendertaskaty();
    }
}

// *************************************************************************************

/* 

    Here we render (show) the taskaty with the function rendertaskaty()
    we will use this function to show the taskaty in the task list
    we will use this function to add the taskaty to the task list
    we will use this function to delete the taskaty from the task list
    we will use this function to toggle the taskaty in the task list
*/

function rendertaskaty() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    taskaty.forEach(task => {
        const li = document.createElement('li');
        li.className = task.state ? 'done' : '';

        li.innerHTML = `
            <span onclick="toggleTask(${task.id})">${task.text}</span>
            <div>
                <button onclick="deleteTask(${task.id})">🗑️ Delete</button>
            </div>
        `;
        list.appendChild(li);
    });
}

// *************************************************************************************

/* 

    Here we delete a task from the task list and save it to the local storage with the function savetaskaty() then we render  the taskaty with the function rendertaskaty()

 */

function deleteTask(id) {
    taskaty = taskaty.filter(task => task.id !== id);
    savetaskaty();
    rendertaskaty();
}

// *************************************************************************************

/*

    here we toggle the taskaty in the task list

*/

function toggleTask(id) {
    taskaty.forEach(task => {
        if (task.id === id) {
            task.state = !task.state;
        }
    });
    savetaskaty();
    rendertaskaty();
}

// *************************************************************************************

/*

    here we search for a task in the task list

*/  

function searchTask(keyword) {
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    taskaty.forEach(task => {
        if (task.text.includes(keyword)) {
            const li = document.createElement('li');
            li.className = task.state ? 'done' : '';
            li.innerHTML = `
                <span onclick="toggleTask(${task.id})">${task.text}</span>
                <div>
                    <button onclick="deleteTask(${task.id})">🗑️ Delete</button>
                </div>
            `;
            list.appendChild(li);
        }
    });
}

// *************************************************************************************