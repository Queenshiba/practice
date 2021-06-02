let todoInput = document.getElementById('todoInput')
let todoInputAdd = document.getElementById('todoInputAdd')
let containerList = document.getElementById('container-list')

let createList;
let createDoneBtn;

function addTodos() {

    // create elememt for appending todo
    let listTextNode = document.createTextNode(todoInput.value)
    let createList = document.createElement('li')
    createList.setAttribute("className", "todoLi");
    createList.setAttribute("style", "text-decoration: none;");
    createList.appendChild(listTextNode)

    // create elememt for wrap each todo and btns
    let wrapList = document.createElement('div')
    wrapList.setAttribute("id", "wrapList");
    wrapList.appendChild(createList)




    // create btn for done btn
    let createDoneBtn = document.createElement('button')
    createDoneBtn.textContent = "Done"
    createDoneBtn.setAttribute("className", "doneBtn");

    // add an event to "Done" btn to strike through item 
    createDoneBtn.addEventListener("click", function (e) {
        if (createList.style.textDecoration == "none") {
            createList.style.textDecoration = "line-through"
        } else {
            createList.style.textDecoration = "none"
        }
    })




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
        let editInputWrap = document.createElement('div')
        editInputWrap.setAttribute("id", "editInputWrap");
        wrapList.appendChild(editInputWrap)

        let createEditInput = document.createElement('input')
        createEditInput.setAttribute("id", "editInput");

        let updateInputButton = document.createElement('button')
        updateInputButton.textContent = "update"
        updateInputButton.setAttribute("id", "updateInputButton");

        wrapList.appendChild(createEditInput)
        wrapList.appendChild(updateInputButton)


        let editText = createList.textContent
        createEditInput.value = editText
        console.log("editText", editText)

        editInputWrap.appendChild(createEditInput)
        editInputWrap.appendChild(updateInputButton)

        updateInputButton.addEventListener('click', function (e) {
            createList.textContent = createEditInput.value
            editInputWrap.style.display = "none"
            console.log("createEditInput.value", createEditInput.value)
        })

    });






    todoInput.value = ""
    wrapList.appendChild(createDoneBtn)
    wrapList.appendChild(createDeleteBtn)
    wrapList.appendChild(createEditBtn)
    containerList.appendChild(wrapList)
}

