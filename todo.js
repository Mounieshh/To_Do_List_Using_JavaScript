function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var listItem = document.createElement("li");
        listItem.innerHTML = taskInput.value + ' <button class="delete-btn" onclick="deleteTask(event)">Delete</button>';
        taskList.appendChild(listItem);

        taskInput.value = ""; 
    }
}

function deleteTask(event) {
    event.target.parentElement.remove();
}
