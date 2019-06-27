let form = document.getElementById('create-task-form')
let input = document.getElementById('new-task-description')
let ul = document.getElementById('tasks')
let select = document.getElementById('select-task-form')

document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener("submit", createTask)
})
    
function createTask(event) {
    event.preventDefault()

    let li = document.createElement('li')
    li.innerText = input.value
    switch (select.value) {
        case 'high':
            li.style.color = 'red'
            li.classList.add('high')
            ul.insertBefore(li, document.querySelector('.med') || document.querySelector('.low') || document.querySelector('.def'))
            break;
        case 'med':
            li.style.color = 'orange'
            li.classList.add('med')
            ul.insertBefore(li, document.querySelector('.low') || document.querySelector('.def'))
            break;
        case 'low':
            li.style.color = 'green'
            li.classList.add('low')
            ul.insertBefore(li, document.querySelector('.def'))
            break;
        default:
            li.style.color = 'blue'
            li.classList.add('def')
            ul.appendChild(li)
    }

    let btn = document.createElement('button')
    btn.innerText = 'X'
    btn.addEventListener('click', deleteTask)

    li.appendChild(btn)

    form.reset()
}

function deleteTask(event) {
    event.target.parentElement.remove()
}
