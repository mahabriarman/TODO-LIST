const todoInput =document.getElementById("inputTask")
const addtaskbtn =document.getElementById("AddTaskBtn")
const tasklist = document.getElementById("to-do_list")
let task =[]
addtaskbtn.addEventListener("click" ,function(){
    let taskText =todoInput.value.trim()
if (taskText===""){
    return
}

const newTask ={
    id : Date.now(),
    text : taskText,
    completed: false
}
task.push(newTask)
todoInput.value = ""
console.log(task)

})