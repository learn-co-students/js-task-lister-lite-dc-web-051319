document.addEventListener("DOMContentLoaded", () => {});

function getDeleteButtons() {
    let deleteButtons = document.querySelectorAll("button");
    deleteButtons.forEach( d => {
        d.addEventListener("click", (event) => {
            let identifier = d.id;
            let listItem = document.getElementById(identifier);
            listItem.remove();
            d.remove();
        });
    });
};

let i = 0;

let taskForm = document.getElementById("create-task-form");

let submit = taskForm.querySelector("submit");

let taskDescription = document.getElementById("new-task-description");

let taskList = document.getElementById("tasks");


taskForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let taskString = taskDescription.value;
    if (taskString) {
        i += 1;
        let listItem = document.createElement("li");
        let deleteButton = document.createElement("button");
        listItem.innerText = taskString;
        listItem.id = i;
        deleteButton.innerText = "Delete";
        deleteButton.id = i;
        taskList.append(li);
        taskList.append(button);
        getDeleteButtons();
    };
});