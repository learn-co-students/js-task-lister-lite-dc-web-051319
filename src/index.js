document.addEventListener("DOMContentLoaded", () => {
  let userForm = document.querySelector("#create-task-form");
  userForm.addEventListener("submit",userSubmits);
});

function userSubmits(event) {

  let userForm = document.querySelector("#create-task-form");

  let userInputText = document.querySelector("#new-task-description").value

  let myTodoListTasks = document.querySelector("#tasks");

  let listItem = document.createElement("LI");

  let listEntry = myTodoListTasks.appendChild(listItem);

  listEntry.innerText = userInputText;
  event.preventDefault();
  userForm.reset();

}