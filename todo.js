var task, taskLi, newTask, taskPending, taskDone, btnInput

var taskInput = [ 
   {text: 'uno', isPending: true}, 
   {text: 'dos', isPending: true}, 
   {text: 'tres', isPending: true},
]
console.log(taskInput)

var handleKeyPress = function(event){
        
    if (event.code === 'Enter'){
      sendTask(event)
    }
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
    taskPending.classList.add('ul-pending')
   

    taskDone = document.getElementById('done')
    taskDone.innerHTML =''
    taskDone.classList.add('ul-done')
    
   
    taskInput.map(function(text, index){
        taskLi = document.createElement('li')
        
        taskPending.appendChild(taskLi)
        taskPending.classList.remove("ul-pending")  // solo cuando todo esta deleteado
        taskLi.innerText = text.text
        taskDone.appendChild(taskLi)
        taskDone.classList.remove("ul-done") // solo cuando todo esta deleteado
        
    
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
        taskPending.appendChild(taskLi)
        }else {
            taskDone.appendChild(taskLi)
        }
  
     
    
    })
    }


var sendTask = function(){
    var inputBox = document.getElementById('commentBox')
    var newInput= inputBox.value 
    if (newInput !== ''){
        inputBox.value=''
        taskInput.unshift({
            text: newInput,
            isPending: true
        })
    printTaskList()
    }

} 
    

