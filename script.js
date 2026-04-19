document.addEventListener("DOMContentLoaded",()=>{
    const todoInput =document.getElementById("inputTask")
const addtaskbtn =document.getElementById("AddTaskBtn")
const tasklist = document.getElementById("to-do_list")

let tasks =JSON.parse(localStorage.getItem("tasks"))||[]

tasks.forEach(task=>renderTask(task))

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
tasks.push(newTask)
renderTask(newTask)
saveTask()
todoInput.value = ""
console.log(tasks)




})

function renderTask(task){
    console.log(task)
}


function saveTask(){
    localStorage.setItem("tasks",JSON.stringify(tasks))
}
})