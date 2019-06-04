var task, taskLi, newTask, taskPending, taskDone, btnInput

var taskInput = [
    ]

var handleKeyPress = function (event) {
    if (event.code === 'Enter') {
        sendTask(event)
    }
}

var deleteItem = function (btn) {
    taskInput.splice(btn.id, 1)
    printTaskList()
}

var toggleItem = function (btn) {
    taskInput[btn.id].isPending = !taskInput[btn.id].isPending
    printTaskList()
}

var printTaskList = function () {
    // la seleccion y blanqueamiento de Ul podría ser extraido en otra función
    taskPending = document.getElementById('pending')
    taskPending.innerHTML = ''
    taskDone = document.getElementById('done')
    taskDone.innerHTML = ''
    taskInput.map(function (text, index) {
        // la creación de item podría ser extraida en otra función
        taskLi = document.createElement('li')
        taskPending.appendChild(taskLi)
        
        taskLi.innerText = text.text
        taskDone.appendChild(taskLi)
        
        // la creación de botones podría ser extraida en otra función
        var itemBtnDelete = document.createElement('button')
        itemBtnDelete.classList.add('deleteBtn')
        itemBtnDelete.id = index
        itemBtnDelete.onclick = function () { deleteItem(this) }

        var itemBtn = document.createElement('button')
        itemBtn.classList.add('checkBtn')
        itemBtn.id = index
        itemBtn.onclick = function () { toggleItem(this) }
        taskLi.appendChild(itemBtnDelete)
        taskLi.appendChild(itemBtn)

        if (text.isPending) {
            taskPending.appendChild(taskLi)
        } else {
            taskDone.appendChild(taskLi)
            itemBtn.classList.toggle('checkBtnColor')
        }
    })

    // la validacion de lista vacia es igual en ambos casos, debería estar extraida en otra función
    if(taskPending.childElementCount === 0){
        taskPending.classList.add('ul-pending')
    } else {
        taskPending.classList.remove('ul-pending')
    }

    if(taskDone.childElementCount === 0){
        taskDone.classList.add('ul-done')
    } else {
        taskDone.classList.remove('ul-done')
    }

    // este if que noe stá haciendo nada
    if( taskInput !== taskPending){   
    }
}

var sendTask = function () {
    var inputBox = document.getElementById('commentBox')
    var newInput = inputBox.value
    if (newInput !== '') {
        inputBox.value = ''
        taskInput.unshift({
            text: newInput,
            isPending: true
        })
        printTaskList()
    }
} 
