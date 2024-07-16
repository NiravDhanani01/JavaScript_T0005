
function DragStart(event) {
    event.dataTransfer.setData("text", event.target.id)
}

function DragOver(event) {
    event.preventDefault()
}

function Drop(event) {
    event.preventDefault()
    let data = event.dataTransfer.getData("text")
    event.target.appendChild(document.getElementById(data))

    let allData = JSON.parse(localStorage.getItem("task")) 
    let updateStatus = allData.map((item)=>{
        if(item.id == data){
        item.status = event.target.id
        }
        return item
    })
    localStorage.setItem("task", JSON.stringify(updateStatus))
    ViewTask()
}

let data = []
function FormHandler(event) {
    event.preventDefault()
    let task = document.querySelector("#todoTask").value;
    let id = Math.floor(Math.random() * 100)
    let status = "newTask"

    let obj = { id, task, status }


    if (!localStorage.getItem('task')) {
        data.push(obj)
        localStorage.setItem("task", JSON.stringify(data))
    } else {
        let oldData = JSON.parse(localStorage.getItem("task")) || []
        oldData.push(obj)
        localStorage.setItem("task", JSON.stringify(oldData))
    }

    document.querySelector("#todoTask").value = ""
    ViewTask()
}

function ViewTask(event) {
    let allData = JSON.parse(localStorage.getItem("task")) || []
    let todoData = "";
    let working = "";
    let complete ="";

    allData.map((item) => {
        if(item.status == "newTask"){
            todoData += `
            <div class="Todo_Card" draggable="true" id="${item.id}" ondragstart="DragStart(event)">
                <p class="taskList">${item.task}</p>
                <div class="card-btn">
                    <div class="space">
                    <span>${item.status}</span>
                    <button class="deleteBtn" onclick="DeleteItem(${item.id})">Delete</button>
                    </div>
                </div>
            </div>
        `
        }
        else if(item.status == "working"){
            working += `
            <div class="Todo_Card" draggable="true" id="${item.id}" ondragstart="DragStart(event)">
                <p class="taskList">${item.task}</p>
                <div class="card-btn">
                    <div class="space">
                    <span>${item.status}</span>
                    <button class="deleteBtn" onclick="DeleteItem(${item.id})">Delete</button>
                    </div>
                </div>
            </div>
        `
        }
        else if(item.status == "complete"){
            complete += `
            <div class="Todo_Card" draggable="true" id="${item.id}" ondragstart="DragStart(event)">
                <p class="taskList">${item.task}</p>
                 <div class="card-btn">
                    <div class="space">
                    <span>${item.status}</span>
                    <button class="deleteBtn" onclick="DeleteItem(${item.id})">Delete</button>
                    </div>
                </div>
            </div>
        `
        }
    })
    document.querySelector("#newTask").innerHTML = todoData  
    document.querySelector("#working").innerHTML = working  
    document.querySelector("#complete").innerHTML = complete  
}
ViewTask()

function DeleteItem(id) {
    let allData = JSON.parse(localStorage.getItem("task")) || []
    let newData = allData.filter(item => item.id !== id)
    localStorage.setItem("task", JSON.stringify(newData))
    ViewTask()
}