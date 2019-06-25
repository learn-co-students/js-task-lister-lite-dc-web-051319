let form = document.getElementById("create-task-form")
let input = document.getElementById("new-task-description")
let ul = document.getElementById("tasks")


document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", createTask)

});

  // waiting for Submit input, then running createTasks



function createTask(event) {
  event.preventDefault();

  console.log(event);

  let li = document.createElement("li");
  li.innerText = input.value;

  ul.appendChild(li)

  console.log(ul)

  console.log(li)
}
