let data = []

const savefield = (event) => {
    event.preventDefault()
    let id = Math.floor(Math.random() * 100)
    let input = document.getElementById("input").value
    let status = document.getElementById("select")
    let eid = document.getElementById('eid').value

    if (!input || input === undefined) {
        alert("Please enter a task")
        return false;
    }
    if (status.checked == true) {
        status = "Complete"
    } else {
        status = "Working"
    }
    let obj = {
        id: id,
        input: input,
        status
    }
    if (eid) {
        let allData = JSON.parse(localStorage.getItem('todo'))
        allData.find((item) => {
            if (item.id == eid) {
                item.input = input
                item.status = status
            }
        })
        localStorage.setItem('todo', JSON.stringify(allData))

    } else {
        if (localStorage.getItem('todo') == null || localStorage.getItem('todo') == undefined) {
            data.push(obj)
            localStorage.setItem('todo', JSON.stringify(data))
        } else {
            let oldData = JSON.parse(localStorage.getItem('todo'));
            oldData.push(obj)
            localStorage.setItem('todo', JSON.stringify(oldData))
        }
    }

    document.getElementById("input").value = ""
    document.getElementById("select").checked = false;
    document.getElementById('eid').value = ""
    view()
}

const view = () => {
    let allData = JSON.parse(localStorage.getItem('todo'))
    let tbl = ""
    allData.map((item, i) => {
        i++
        tbl += `
            <tr>
            <td> ${i} </td>
            <td> ${item.input}</td>
            <td> ${item.status}</td>
            <td>
             <button class="del" onClick=(deleteData(${item.id}))> Delete </button>   
             <button class onClick=(EditData(${item.id}))> Edit </button>   
            </td>
            </tr>
        `
    })
    document.getElementById('tbody').innerHTML = tbl;
}
view()

const deleteData = (id) => {
    let allData = JSON.parse(localStorage.getItem('todo'))
    let newdata = allData.filter((item) => item.id != id)
    localStorage.setItem('todo', JSON.stringify(newdata))
    view()
}

const EditData = (id) => {
    let allData = JSON.parse(localStorage.getItem('todo'))
    let editData = allData.find((item) => item.id == id)

    if (editData.status == "Complete") {
        document.getElementById("select").checked = true
    }
    if (editData.status == "Working") {
        document.getElementById("select").checked = false
    }

    document.getElementById("input").value = editData.input
    document.getElementById("eid").value = editData.id
}

const working = () => {
    let allData = JSON.parse(localStorage.getItem('todo'))
    let working = allData.filter((item) => item.status == "Working")
    let tbl = "";
    working.map((item, i) => {
        i++
        tbl += `
            <tr>
            <td> ${i} </td>
            <td> ${item.input}</td>
            <td> ${item.status}</td>
            <td>
             <button class="del" onClick=(deleteData(${item.id}))> Delete </button>   
             <button class onClick=(EditData(${item.id}))> Edit </button>   
            </td>
            </tr>
        `
    })
    document.getElementById('tbody').innerHTML = tbl;
}

const complete = () => {
    let allData = JSON.parse(localStorage.getItem('todo'))
    let complete = allData.filter((item) => item.status == "Complete")
    let tbl = "";
    complete.map((item, i) => {
        i++
        tbl += `
            <tr>
            <td> ${i} </td>
            <td> ${item.input}</td>
            <td> ${item.status}</td>
            <td>
             <button class="del" onClick=(deleteData(${item.id}))> Delete </button>   
             <button class onClick=(EditData(${item.id}))> Edit </button>   
            </td>
            </tr>
        `
    })
    document.getElementById('tbody').innerHTML = tbl;
}