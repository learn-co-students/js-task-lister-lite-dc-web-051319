

let form = document.getElementById("create-task-form")
let userInput = document.getElementById("new-task-description")
let ul = document.getElementById("tasks")

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form.addEventListener("submit", function(){
    event.preventDefault()

    let li = document.createElement("li")
    li.innerText = userInput.value
    // let textnode = document.createTextNode(userInput.value)
    ul.appendChild(li)
    console.log(document.getElementById("tasks"))

  })
})
