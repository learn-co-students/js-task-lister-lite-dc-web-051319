document.addEventListener("DOMContentLoaded", () => {

  // Create variable for text input #new-task-description
  const taskField = document.getElementById('new-task-description');
  
  // Create variable for select menu #new-task-priority
  // *I added this select menu to index.html
  const taskPriority = document.getElementById('new-task-priority');
  
  // Create variable for form submit button which has no
  // class or id to target
  const submitButton = document.querySelector('input[type="submit"]');

  // addEventListender to submitButton variable and pass
  // newListItem function to run when the button is clicked
  submitButton.addEventListener('click', newListItem);

  // This is the function called by the submit button
  // e represents the click event
  function newListItem(e) {

    // This prevents the default form submit behavior which
    // would be put/post/get request that loads a new page.
    e.preventDefault();

    // !!taskField.value creates a boolean that checks to see 
    // if there is text in the task input field
    if (!!taskField.value) {

      // If there is a new task entered in the field...

      // Create a priority variable from
      let priority = taskPriority.value;

      // Create a new <li>
      let li = document.createElement('li');

        // Add a data tag to the new <li>
        // It will look like <li data-priority="(the chosen priority)"></li>
        li.dataset.priority = priority;

        // Creates text for the <li> from the task field
        // It will look like <li data-priority="">(the task)</li>
        li.innerText = taskField.value;

        // I added three priority <li> tags to my #tasks <ul> in index.html
        // This will look for the <li> with matching priority and append the new <li>
        document.getElementById(`#${priority}-priority`).appendChild(li);

      // Create a new button to be the delete button.
      let deleteButton = document.createElement('button');
        
        // Make the delete button text an "x"
        deleteButton.innerText = "x";

        // Append the delete button to the new <li>
        // This means the delete button will be a child of that <li>
        li.appendChild(deleteButton);

        // Create event listener for the delete button
        // On click it will fire the deleteItem() function, which is found below
        deleteButton.addEventListener('click', deleteItem);

      // Create a <span> tag
      let timestamp = document.createElement('span');

        // Add a class of "timestamp" to the <span>
        timestamp.classList.add('timestamp');

        // Create a timestamp using the createTimestamp function below
        // and place that timestamp inside the new <span>
        timestamp.innerText = createTimestamp();

        // Append the <span> tag with timestamp to the new <li>
        li.appendChild(timestamp);

      // Clear the task field
      taskField.value = "";

      // Automatically re-focus on the task field
      // for rapid new task creation
      taskField.focus();

    } else {
      // If there is nothing in the task field, alert the user
      alert("Task field is empty.")
    }
  }

  // A function for the delete button inside out li
  function deleteItem(e) {
    
    // e represents the click event
    // stopPropagation ensures we're clicking the button we want to click
    // and not some button or element "above" it
    e.stopPropagation;

    // "this" is like Ruby's "self"
    // We are clicking the delete button, which is a child of the <li>
    // "this" is the delete button and parentNode is the <li>
    this.parentNode.remove();
  }

  // Create a timestamp at whatever time the new task is created
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