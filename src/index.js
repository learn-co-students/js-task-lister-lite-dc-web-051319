let form = document.getElementById("create-task-form")
let input = document.getElementById("new-task-description")
let ul = document.getElementById("tasks")
// waiting for Submit input, then running createTasks


document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", createTask)

});


function createTask(event) {
  event.preventDefault();

  let li = document.createElement("li");
    li.innerText = input.value;
  let button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", delete_task);
    // event and function arguments

  li.appendChild(button)
  ul.appendChild(li)

}

function delete_task(event) {
  // console.log(event.target);
  let listItem = event.target.parentElement;
  // console.log(listItem)
  listItem.remove();
}
