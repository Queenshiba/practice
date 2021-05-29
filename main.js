let todoInput = document.getElementById('todoInput')
let todoInputAdd = document.getElementById('todoInputAdd')

let containerList = document.getElementById('container-list')
let arr = []
function addTodos() {

    
    arr.push(todoInput.value)
    console.log(arr)
    let listTextNode = document.createTextNode(todoInput.value)
    let createList = document.createElement('li')

    createList.appendChild(listTextNode)
    

let wrapList = document.createElement('div')
wrapList.setAttribute("id", "wrapList");
wrapList.appendChild(createList)

    let createDeleteBtn = document.createElement('button')
    createDeleteBtn.textContent = "delete" 
    createDeleteBtn.addEventListener('click', function(e) {
        containerList.removeChild(wrapList)
    });



    let createEditBtn = document.createElement('button')
    createEditBtn.textContent = "edit"
    // containerList.appendChild(createEditBtn)

    todoInput.value = ""
    console.log(containerList)
    wrapList.appendChild(createDeleteBtn)
    wrapList.appendChild(createEditBtn)
    containerList.appendChild(wrapList)
}

function deleteTodos() {

}