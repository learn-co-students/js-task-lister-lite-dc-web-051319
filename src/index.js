document.addEventListener("DOMContentLoaded", () => {
  let createTask = document.querySelector('#create-task-form')
  createTask.addEventListener('submit', addTask) // First is the submit button, second param is the function that will add a task button 

  
  let i = 1
  function addTask(e){
    e.preventDefault()
    let taskButton = document.querySelector('#tasks')
    let taskDescript = document.querySelector('#new-task-description').value
  
    let li = document.createElement('li')
    li.innerText = taskDescript
    let button = document.createElement('button')
    button.addEventListener('click', removeElement)
    button.setAttribute('id', i++);
    button.innerHTML = 'Delete'
    let buttonID = button.id
    taskButton.appendChild(li)
    li.appendChild(button)
  }


  function removeElement(e) {
    let elementSelect = document.getElementById(e.target.id)
    elementSelect.parentNode.remove()
}
});
