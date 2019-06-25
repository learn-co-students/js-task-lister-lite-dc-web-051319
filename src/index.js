document.addEventListener("DOMContentLoaded", () => {
  // your code here

});

function getDeleteButtons() {
  let deez = document.querySelectorAll("button")
  deez.forEach( d => {
    d.addEventListener("click", (event) => {
      let identifier = d.id
      let removeLI = document.getElementById(identifier)
      removeLI.remove()
      d.remove()
    })
  }
  )
}

let i = 0

let taskForm = document.getElementById("create-task-form")

let submit = taskForm.querySelector("submit")

let taskDescription = document.getElementById("new-task-description")

let taskUL = document.getElementById("tasks")


taskForm.addEventListener("submit", (event) => {
  event.preventDefault()
  let t = taskDescription.value
  if (t) {
    i += 1
    let li = document.createElement("li")
    let button = document.createElement("button")
    li.innerText = t
    li.id = i
    button.innerText = "Delete"
    button.id = i
    taskUL.append(li)
    taskUL.append(button)
    getDeleteButtons()
  }

})


// let tasks = document.getElementById("tasks")
