let form = document.getElementById("create-task-form")
let input = document.getElementById("new-task-description")
let ul = document.getElementById("tasks")
// waiting for Submit input, then running createTasks


document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", createTask)
});



function createTask(event) {
  event.preventDefault();

  console.log(event);

  let li = document.createElement("li");
  li.innerText = input.value;

  ul.appendChild(li)

  console.log(ul)

  console.log(li)
}
