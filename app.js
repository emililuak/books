/*const taskTitle = document.getElementById(task-title)

//style
taskTitle.style.background = "#333"
taskTitle.style.color = "#fff"
taskTitle.style.padding = "15px"
//taskTitle.style.display = "none"

//content
taskTitle.textContent = "My Tasks"
taskTitle.innerText = "My favourite Tasks"
taskTitle.innerHTML = '<span style="color: red">My Tasks</span>'

// selectorid on tag class id

// single element
const li = document.querySelector('li')
li = document.querySelector('li:last-child')
li = document.querySelector("li:nth-child(even)")
li = document.querySelector('li:nth-child(odd)')
li = document.querySelectorAll('li')

//multible elements
const oddLi = document.querySelectorAll('li:nth-child(odd)')

for (let = i = 0; i<2; i++){
    //document.querySelectorAll('li:nth-child(odd)')[i] .style.background ='#ddd'
    oddLi[i].style.background = '#ddd'
}

oddLi.forEach((li, i) => {
    li.style.background = "#ddd"
})

const list = document.querySelector("ul")

console.log(list)
console.log(oddLi)
console.log(taskTitle)
 const taskInput = document.querySelector('#task')
const form = document.querySelector('form')
form.addEventListener("submit", addTask)
taskInput.addEventListener('keyup', showTask)

function showTask(event){
    console.log(taskInput.value)

}
function addTask(event) {
    console.log(taskInput.value)
    event.preventDefault()
}*/

const form = document.querySelector('#add-task')
form.addEventListener('submit', addTask)
const taskList = document.querySelector('#task-list')
taskList.addEventListener('click', deleteTask)
const deleteTasks = document.querySelector('#delete-tasks')
deleteTasks.addEventListener('click', deleteAllTasks)
document.

function addTask(event) {
    //get form input value
    const taskInput = document.querySelector('#task')
    //create li with value and X link
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = 'collection-item'

    const x = document.createElement('a')
    x.appendChild(document.createTextNode('X'))
    x.setAttribute('href', '#')
    x.className = 'secondary-content'

    li.appendChild(x)

    const ul = document.querySelector('ul')
    ul.appendChild(li)
    // save task value to local storage
    AddTaskToLS(taskInput.value)
    // delete input value from input field
    taskInput.value = ' '
    event.preventDefault()
}

function deleteTask(event) {
    if (event.target.textContent === 'X'){
        if( confirm('Are you sure you want to delete this task?')){
            event.target.parentElement.remove()
            let task = event.target.parentElement.textContent.slice(0, length-1)
            deleteTaskFromLS(task)
        }
    }
}

function deleteAllTasks(event){
    //taskList.innerHTML = '' - sobib kui väike kogus
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
    localStorage.removeItem('tasks')
}

function AddTaskToLS(task){
    let tasks
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function deleteTaskFromLS(task){
    let tasks
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((taskFromLS, index) => {
        if(taskFromLS === task){
            tasks.splice(index, 1)
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function getTasksFromLS(){

}
