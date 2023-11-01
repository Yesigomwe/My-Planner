const currentDateElement = document.getElementById("current-date");
const todoList = document.getElementById("todo-list");
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", addTask);

function getCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString(undefined, options);
    return currentDate;
}
currentDateElement.textContent = getCurrentDate();

function addTask() {
    const taskText = taskInput.value;
    if (taskText) {
        const listItem = document.createElement("li");
        listItem.className = "todo-item";
        listItem.innerHTML = `
            <input type="checkbox" onchange="toggleButtons(this)">
            <span>${taskText}</span>
            <span class="actions">
                <button onclick="editTask(this)">   <img style = "width:20px;height:20px"src="./edit.png" alt="edit">
                </button>
                <button onclick="deleteTask(this)"><img style = "width:20px;height:20px"src="./Vector.png" alt="edit"></button>
            </span>
        `;
        todoList.appendChild(listItem);
        taskInput.value = "";
    }
}

function toggleButtons(checkbox) {
    const listItem = checkbox.parentElement;
    const actions = listItem.querySelector(".actions");
    actions.style.display = checkbox.checked ? "block" : "none";
}

function editTask(button) {
    const listItem = button.parentElement.parentElement;
    const taskText = listItem.querySelector("span");
    const newTaskText = prompt("Edit task:", taskText.textContent);
    if (newTaskText !== null) {
        taskText.textContent = newTaskText;
    }
}

function deleteTask(button) {
    const listItem = button.parentElement.parentElement;
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
        listItem.remove();
    }
}