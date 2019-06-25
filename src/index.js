document.addEventListener("DOMContentLoaded", () => {

  const taskField = document.getElementById('new-task-description');
  const taskPriority = document.getElementById('new-task-priority');
  const submitButton = document.querySelector('input[type="submit"]');

  submitButton.addEventListener('click', newListItem);

  function newListItem(e) {
    e.preventDefault();

    if (!!taskField.value) {
      let priority = taskPriority.value;

      let li = document.createElement('li');
        li.dataset.priority = priority;
        li.innerText = taskField.value;
        document.querySelector(`li.${priority}`).appendChild(li);

      let deleteButton = document.createElement('button');
        deleteButton.innerText = "x";
        li.appendChild(deleteButton);
        deleteButton.addEventListener('click', deleteItem);

      let timestamp = document.createElement('span');
        timestamp.classList.add('timestamp');
        timestamp.innerText = createTimestamp();
        li.appendChild(timestamp);

      taskField.value = "";
      taskField.focus();

    } else {
      alert("Task field is empty.")
    }
  }

  function deleteItem(e) {
    e.stopPropagation;
    this.parentNode.remove();
  }

  function createTimestamp() {
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth()+1; 
    let year = today.getFullYear();
    let minutes = today.getMinutes();
    let hour = today.getHours()
    let seconds = today.getSeconds();
    return `Created: ${month}/${date}/${year} at ${hour}:${minutes}:${seconds}`;
  }
  
});