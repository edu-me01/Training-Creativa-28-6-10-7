document.getElementById('addBtn').addEventListener('click', () => {
    const input = document.getElementById('taskInput');
          list = document.getElementById('taskList');
    // const li = document.createElement('li');
    // li.textContent = input.value;
    // document.getElementById('taskList').appendChild(li);

    list.innerHTML += `<li>${input.value}</li>`;
    input.value = '';
});