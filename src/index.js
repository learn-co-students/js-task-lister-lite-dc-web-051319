document.addEventListener("DOMContentLoaded",() => {
let userForm = document.querySelector("#create-task-form");
userForm.addEventListener("submit",userSubmits);

});

function userSubmits(event){
  // your code here
  //call this function when user click "create new task "button
  let userForm = document.querySelector("#create-task-form");
  let userInputText = document.querySelector("#new-task-description").value
  let myTodoListTasks = document.querySelector("#tasks");
  let listItem = document.createElement("LI");
  let listEntry = myTodoListTasks.appendChild(listItem);
  listEntry.innerText = userInputText;
  event.preventDefault();
  userForm.reset();
//create list item

//add userInputText to id="task"

//set list item text

}
