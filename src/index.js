document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
let form = document.getElementById("create-task-form")

let userInput = document.getElementById("new-task-description")




form.addEventListener("submit", function(){
  event.preventDefault()

  let li = document.createElement("li")
  let textnode = document.createTextNode(userInput.value)
  li.appendChild(textnode)

  document.getElementById("tasks").appendChild(li)
  console.log(document.getElementById("tasks"))
  
}
)