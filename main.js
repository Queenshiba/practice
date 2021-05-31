let todoInput = document.getElementById('todoInput')
let todoInputAdd = document.getElementById('todoInputAdd')

let containerList = document.getElementById('container-list')
let arr = []
function addTodos() {


    arr.push(todoInput.value)
    console.log(arr)
    // create elememt for todo
    let listTextNode = document.createTextNode(todoInput.value)
    let createList = document.createElement('li')
    createList.appendChild(listTextNode)

    // create elememt for wrap each todo and btns
    let wrapList = document.createElement('div')
    wrapList.setAttribute("id", "wrapList");
    wrapList.appendChild(createList)
    // create btn for deleting btn
    let createDeleteBtn = document.createElement('button')
    createDeleteBtn.textContent = "delete"
    createDeleteBtn.addEventListener('click', function (e) {
        containerList.removeChild(wrapList)
    });


    // create btn for editing btn
    let createEditBtn = document.createElement('button')
    createEditBtn.textContent = "edit"
    createEditBtn.addEventListener('click', function (e) {
        let createEditInput = document.createElement('input')
        
        wrapList.appendChild(createEditInput)
        createEditInput.value = 'test'

    });


    todoInput.value = ""

    wrapList.appendChild(createDeleteBtn)
    wrapList.appendChild(createEditBtn)
    containerList.appendChild(wrapList)
}

function deleteTodos() {

}