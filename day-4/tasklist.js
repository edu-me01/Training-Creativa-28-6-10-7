document.getElementById('addBtn').addEventListener('click', () => {
    const input = document.getElementById('taskInput');
    const li = document.createElement('li');
    li.textContent = input.value;
    document.getElementById('taskList').appendChild(li);
    input.value = '';
  });