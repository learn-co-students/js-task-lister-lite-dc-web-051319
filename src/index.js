document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskField = document.getElementById("new-task-description")
  const submitButton = document.querySelector("input[type = 'submit']")
  const taskList = document.getElementById("tasks")
  const taskPriority = document.getElementById("new-task-priority")

  submitButton.addEventListener('click', newListItem)
  


  function newListItem(event){
    event.preventDefault();
    

    if (!!taskField.value){
      let newId = taskList.childElementCount +1;
      let priority = taskPriority.value

      let li = document.createElement("li");
      li.dataset.id = newId;
      li.dataset.priority = priority;
      li.innerText = taskField.value;
      taskList.appendChild(li);

      let deleteButton = document.createElement("button");
      deleteButton.dataset.id = newId;
      deleteButton.innerText = " x ";
      li.appendChild(deleteButton);
      deleteButton.addEventListener('click', deleteItem);
    } else {
      alert("add somethin ya fool")
    }
   
  }
  function deleteItem(e) {
    e.stopPropagation
    this.parentNode.remove()
  }

});


// function newTask(event) {
  
//   alert("this works")
// }


