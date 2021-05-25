let todoInput = document.getElementById('todoInput')
let todoInputAdd = document.getElementById('todoInputAdd')

let containerList = document.getElementById('container-list')

function addTodos() {

    let listTextNode = document.createTextNode(todoInput.value)
    let createList = document.createElement('li')

    createList.appendChild(listTextNode)
    console.log(createList)
    containerList.appendChild(createList)
}