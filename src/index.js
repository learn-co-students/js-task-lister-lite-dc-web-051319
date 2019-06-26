document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskForm = document.querySelector("#create-task-form")
  taskForm.addEventListener("submit",submitHandler)


});
let count = 0

function submitHandler(e){
  // prevents page reload
  e.preventDefault()
  //finding the value of input in the form
  let newTask = document.querySelector("#new-task-description").value
  // creating a list and an id for that list with the input of newTask's value
  let newTaskPrio = document.querySelector("#new-task-priority").value
  let li = document.createElement("li")
  li.innerText = newTask
  li.id = count
  count++
  //creating a button and when we click that button we delete the parent node
  let button = document.createElement("button")
  button.innerText = "X"
  button.addEventListener("click",function(e){
    e.target.parentNode.remove()
  })
  li.appendChild(button)

  switch(newTaskPrio){
    case "1":
      li.style.color = 'blue'
      document.querySelector("#blue").appendChild(li)
      break;
    case "2":
        li.style.color = 'purple'
        document.querySelector("#purple").appendChild(li)
        break;
    case "3":
        li.style.color = 'green'
        document.querySelector("#green").appendChild(li)
        break;
    case "4":
        li.style.color = 'yellow'
        document.querySelector("#yellow").appendChild(li)
        break;
    case "5":
        li.style.color = 'red'
        document.querySelector("#red").appendChild(li)
        break;
  }

}
