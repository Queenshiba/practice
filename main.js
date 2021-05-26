let todoInput = document.getElementById('todoInput')
let todoInputAdd = document.getElementById('todoInputAdd')

let containerList = document.getElementById('container-list')

function addTodos() {

    let listTextNode = document.createTextNode(todoInput.value)
    let createList = document.createElement('li')

    createList.appendChild(listTextNode)
    console.log(createList)
    containerList.appendChild(createList)

    let createDeleteBtn = document.createElement('button')
    createDeleteBtn.textContent = "delete"
    containerList.appendChild(createDeleteBtn)

    let createEditBtn = document.createElement('button')
    createEditBtn.textContent = "edit"
    containerList.appendChild(createEditBtn)

    todoInput.value = ""
}