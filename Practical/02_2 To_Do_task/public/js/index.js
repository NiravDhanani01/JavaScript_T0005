let data = [];
function FormHandler(event) {
    event.preventDefault();
 
    let title = document.querySelector('#title').value;
    let description = document.querySelector('#description').value;
    let date = document.querySelector('#date').value;
    let editId = document.querySelector("#editId").value;
    let status = "Working";

    if (!title || !description || !date) {
        alert('Please fill all the fields');
        return false;
    }

    let obj = {
        id: Math.floor(Math.random() * 100),
        title: title,
        description: description,
        date: date,
        status: status,
        check: false
    };

    if (editId) {
        let allRecord = JSON.parse(localStorage.getItem('task'));
        allRecord.find((item) => {
            if (item.id == editId) {
                item.title = title;
                item.description = description;
                item.date = date;
            }
        });
        localStorage.setItem('task', JSON.stringify(allRecord));
    } else {
        if (!localStorage.getItem("task")) {
            data.push(obj);
            localStorage.setItem("task", JSON.stringify(data));
        } else {
            let oldData = JSON.parse(localStorage.getItem("task")) || [];
            oldData.push(obj);
            localStorage.setItem("task", JSON.stringify(oldData));
        }
    }

    document.querySelector('#title').value = "";
    document.querySelector('#description').value = "";
    document.querySelector('#date').value = "";
    document.querySelector("#editId").value = "";
    View_Data();
}

function View_Data() {
    let data = JSON.parse(localStorage.getItem("task")) || [];
    let card = document.querySelector('#cardList');
    let cardList = "";

    data.map((item) => {
        cardList += `
            <div id="list_task">
                <div id="list_head">
                    <h2 id="list-title" class="${item.status === "Completed" ? "complete" : "working"}">${item.title}</h2>
                    <label class="switch ">
                        <input type="checkbox" id="checkID_${item.id}" onclick="CheckBoxEvent(${item.id})" ${item.status === "Completed" ? "checked" : ""} />
                        <span class="slider round"></span>
                    </label>
                </div>
                <p id="list-desc">${item.description}</p>
                <p id="list-date">Due Date: ${item.date}</p>
                <p id="status">${item.status}</p>
                <div class="card-bottom">
                    <button class="editBtn" onclick="EditTask(${item.id})">Edit</button>
                    <button onclick="DeleteTask(${item.id})" class="deleteBtn">Delete</button>
                </div>
            </div>
        `;
    });

    if (data.length === 0) {
        cardList += `<h2 id="noTask">No Task</h2>`;
    }
    card.innerHTML = cardList;
}

View_Data();

function DeleteTask(id) {
    let allData = JSON.parse(localStorage.getItem("task")) || [];
    let newData = allData.filter((item) => item.id != id);
    localStorage.setItem("task", JSON.stringify(newData));
    View_Data();
}

function EditTask(id) {
    let allData = JSON.parse(localStorage.getItem("task")) || [];
    let editData = allData.find((item) => item.id == id);
    if (editData) {
        document.querySelector('#editId').value = editData.id;
        document.querySelector('#title').value = editData.title;
        document.querySelector('#description').value = editData.description;
        document.querySelector('#date').value = editData.date;
    }
}

function CheckBoxEvent(id) {
    let allData = JSON.parse(localStorage.getItem("task")) || [];
    let checkBox = allData.find((item) => item.id == id);
    if (checkBox.status === "Working") {
        checkBox.status = "Completed";
    } else {
        checkBox.status = "Working";
    }
    localStorage.setItem("task", JSON.stringify(allData));
    View_Data();
}
