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
    containerList.appendChild(createList)

    let createDeleteBtn = document.createElement('button')
    createDeleteBtn.textContent = "delete" 
    createDeleteBtn.onclick = function () {
        arr.forEach(element => {
            alert(element);
        });
        
    };
    containerList.appendChild(createDeleteBtn)

    let createEditBtn = document.createElement('button')
    createEditBtn.textContent = "edit"
    containerList.appendChild(createEditBtn)

    todoInput.value = ""
    console.log(containerList)
}

function deleteTodos() {

}