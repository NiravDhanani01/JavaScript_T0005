
// function DragStart(event) {
//     event.dataTransfer.setData("text", event.target.id)
// }

// function DragOver(event) {
//     event.preventDefault()
// }

// function Drop(event) {
//     event.preventDefault()
//      let data = event.dataTransfer.getData("text")
//     event.target.appendChild(document.getElementById(data))
//     console.log("x",event.clientX ,"y",event.clientY);
// }

// let data = []
// function FormHandler(event) {
//     event.preventDefault()
//     let task = document.querySelector("#todoTask").value;
//     let id = Math.floor(Math.random() * 100)

//     let obj = { id, task }

//     if (!localStorage.getItem('task')) {
//         data.push(obj)
//         localStorage.setItem("task", JSON.stringify(data))
//     } else {
//         let oldData = JSON.parse(localStorage.getItem("task")) || []
//         oldData.push(obj)
//         localStorage.setItem("task", JSON.stringify(oldData))
//     }
//     document.querySelector("#todoTask").value = ""
//     ViewTask()
// }

// function ViewTask() {
//     let allData = JSON.parse(localStorage.getItem("task")) || []
//     let todoData = "";

//     allData.map((item,i) => {i++
//         todoData += `
//             <div class="Todo_Card" draggable="true" id="todo-item${i}" ondragstart="DragStart(event)">
//                 <p class="taskList">${item.task}</p>
//                 <div class="card-btn">
//                     <button class="deleteBtn" onclick="DeleteItem(${item.id})">Delete</button>
//                 </div>
//             </div>
//         `
//     })
//     document.querySelector("#View_Todo_Item").innerHTML = todoData
// }
// ViewTask()

// function DeleteItem(id){
//     let allData = JSON.parse(localStorage.getItem("task")) || []
//     let newData = allData.filter(item=>item.id !== id)
//     localStorage.setItem("task", JSON.stringify(newData))
//     ViewTask()
// }


function DragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function DragOver(event) {
    event.preventDefault();
}

function Drop(event, targetId) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let draggedElement = document.getElementById(data);
    event.target.appendChild(draggedElement);

    // Update the task status in local storage
    updateTaskStatus(data, targetId);
}

// Update task status in local storage
function updateTaskStatus(taskId, targetId) {
    let allData = JSON.parse(localStorage.getItem("task")) || [];
    let updatedData = allData.map((item) => {
        if (`todo-item${item.id}` === taskId) {
            item.status = targetId;
        }
        return item;
    });
    localStorage.setItem("task", JSON.stringify(updatedData));
}

function FormHandler(event) {
    event.preventDefault();
    let task = document.querySelector("#todoTask").value;
    let id = Math.floor(Math.random() * 100);

    let obj = { id, task, status: "View_Todo_Item" };

    if (!localStorage.getItem("task")) {
        data.push(obj);
        localStorage.setItem("task", JSON.stringify(data));
    } else {
        let oldData = JSON.parse(localStorage.getItem("task")) || [];
        oldData.push(obj);
        localStorage.setItem("task", JSON.stringify(oldData));
    }
    document.querySelector("#todoTask").value = "";
    ViewTask();
}

function ViewTask() {
    let allData = JSON.parse(localStorage.getItem("task")) || [];
    let todoData = "";

    allData.forEach((item, i) => {
        todoData += `
            <div class="Todo_Card" draggable="true" id="todo-item${item.id}" ondragstart="DragStart(event)">
                <p class="taskList">${item.task}</p>
                <div class="card-btn">
                    <button class="deleteBtn" onclick="DeleteItem(${item.id})">Delete</button>
                </div>
            </div>
        `;
    });
    document.querySelector("#View_Todo_Item").innerHTML = todoData;
}

function DeleteItem(id) {
    let allData = JSON.parse(localStorage.getItem("task")) || [];
    let newData = allData.filter((item) => item.id !== id);
    localStorage.setItem("task", JSON.stringify(newData));
    ViewTask();
}

// Initialize tasks based on stored status
function initializeTasks() {
    let allData = JSON.parse(localStorage.getItem("task")) || [];
    allData.forEach((item) => {
        let target = document.querySelector(`#${item.status}`);
        if (target) {
            let taskElement = document.getElementById(`todo-item${item.id}`);
            if (taskElement) {
                target.appendChild(taskElement);
            }
        }
    });
}

// Call initializeTasks on page load
window.addEventListener("load", initializeTasks);
