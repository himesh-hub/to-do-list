const addbtn = document.querySelector(".addbtn");
const input = document.querySelector(".input");
const taskbox = document.querySelector(".taskbox");

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

function addtask() {
    
    const value = input.value;
    if (value === "" || value === " ") {
        alert("no task added");
        return
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
    })
}
