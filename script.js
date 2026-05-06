const addbtn = document.querySelector(".addbtn");
const input = document.querySelector(".input");
const taskbox = document.querySelector(".taskbox");

loadTask();

addbtn.addEventListener("click", () => {
    addtask();
    input.value = " ";
})

document.addEventListener("keydown", (e) =>{
    if (e.key === 'Enter') {
        addtask();
        input.value = " ";
    }
})

function addtask(savedValue = null, savedChecked = false) {
    
    const value = savedValue || input.value;
    if (value === "" || value === " ") {
        alert("no task added");
        return;
    }
    
    const taskList = document.createElement("ul");
    taskList.classList.add("taskList");
    taskbox.appendChild(taskList);
    
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox")
    taskList.appendChild(checkbox);
    checkbox.addEventListener("change", () =>{
        if (checkbox.checked == true) {
            task.style.textDecoration = "line-through";
        }
        else{
            task.style.textDecoration = "none";
        }
        saveTask();
    })
    
    const task = document.createElement("span");
    task.classList.add("task");
    task.innerText = value;
    taskList.appendChild(task);
    
    const deletebtn = document.createElement("button");
    deletebtn.classList.add("deletebtn");
    deletebtn.innerText = "X";
    taskList.appendChild(deletebtn);
    deletebtn.addEventListener("click", () => {
        taskList.remove();
        saveTask();
    })
    
    if(!savedValue) saveTask();
}

function saveTask() {
    const tasks = [];
    const taskList = document.querySelectorAll(".taskList");
    taskList.forEach(item => {
        tasks.push({
            text: item.querySelector(".task").innerText,
            checked: item.querySelector(".checkbox").checked
        });
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function loadTask(){
    const load = JSON.parse(localStorage.getItem("tasks")) || [];
    load.forEach(t => addtask(t.text, t.checked));
}
