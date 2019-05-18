var task, taskLi, newTask, taskPending, taskDone

var taskInput = [ 
   {text: 'uno', isPending: true}, 
   {text: 'dos', isPending: false}, 
   {text: 'tres', isPending: true},
]

var printTask = function(){
    newTask = document.getElementById('commentBox')


}

var toggleItem = function(btn){
    taskInput[btn.id].isPending = !taskInput[btn.id].isPending 
    printTaskList()
} 

var deleteItem = function(btn){
    taskInput.splice(btn.id, 1)
    printTaskList()
}



var printTaskList = function(){
    taskPending = document.getElementById ('pending')
    taskPending.innerHTML = ''
    taskInput.map(function(text, index){
        taskLi = document.createElement('li')
        taskPending.appendChild(taskLi) 
        taskLi.innerText = text.text
    
    taskDone = document.getElementById('done')
    //taskDone.innerHTML =''
    taskDone.appendChild(taskLi)

    var itemBtn = document.createElement('button')
    itemBtn.innerText = 'hacer click' 
    itemBtn.id = index 
    itemBtn.onclick = function() {toggleItem(this)} 
    
    var itemBtnDelete = document.createElement('button')
    itemBtnDelete.innerText = 'Delete' 
    itemBtnDelete.id = index 
    itemBtnDelete.onclick = function() {deleteItem(this)} 
   
         
    taskLi.appendChild(itemBtn)
    taskLi.appendChild(itemBtnDelete)

    if (text.isPending){
        pending.appendChild(taskLi)
        }else {
            done.appendChild(taskLi)
        }
    })
    }


    

