document.addEventListener("DOMContentLoaded", () => {

    const todoInput = document.getElementById("inputTask")
    const addtaskbtn = document.getElementById("AddTaskBtn")
    const tasklist = document.getElementById("to-do_list")

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []

    tasks.forEach(task => renderTask(task))

    addtaskbtn.addEventListener("click", function () {

        let taskText = todoInput.value.trim()

        if (taskText === "") return

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        }

        tasks.push(newTask)
        renderTask(newTask)
        saveTask()
        todoInput.value = ""

    })

    function renderTask(task) {

        const li = document.createElement("li")
        li.setAttribute("data-id", task.id)

        if (task.completed) li.classList.add("completed")

        li.innerHTML = `
            <span>${task.text}</span>
            <button>delete</button>
        `

        // toggle complete
        li.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") return

            task.completed = !task.completed
            li.classList.toggle("completed")
            saveTask()
        })

        // delete task
        li.querySelector("button").addEventListener("click", (e) => {
            e.stopPropagation()

            tasks = tasks.filter((t) => t.id !== task.id)

            li.remove()
            saveTask()
        })

        tasklist.appendChild(li) 
    }

    function saveTask() {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

})