const taskInput = document.getElementById('taskInput');
const priorityInput = document.getElementById('priority');
const taskList = document.getElementById('taskList');
const darkModeToggle = document.getElementById('darkModeToggle');
const searchInput = document.getElementById('searchInput');

// Add task function
document.getElementById('addTaskButton').addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const priority = priorityInput.value;
    if (!taskText) return;

    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
    <span>${taskText} (<span class="priority-${priority}">${priority}</span>)</span>
    <button onclick="this.parentElement.remove()">❌</button>
  `;
    taskList.appendChild(li);
    taskInput.value = '';
});

// Dark mode toggle
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Search functionality
searchInput.addEventListener('input', (e) => {
    const filter = e.target.value.toLowerCase();
    Array.from(taskList.children).forEach(task => {
        const text = task.textContent.toLowerCase();
        task.style.display = text.includes(filter) ? '' : 'none';
    });
});