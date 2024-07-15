
async function UserData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await response.json()

        let tbl = ""

        data.map((item) => {
            tbl += `
            <tr >
                 <td>${item.id}</td>
                 <td>${item.name}</td>
                 <td>${item.email}</td>
                 <td>${item.phone}</td>
                 <td>${item.address.street}, ${item.address.city}, ${item.address.zipcode},</td>
                 <td>${item.company.name}</td>
             </tr>
     `
        })
        document.getElementById("tbody").innerHTML = tbl
        return data
    }
    catch (err) {
        console.log(err);
        return false
    }
}

let response = UserData()

function FilterData(event) {
    event.preventDefault()
    let search = document.getElementById("search").value
    let p = document.createElement("p")
    response.then(data => {
        let result = data.filter((item) => item.name.toLowerCase().includes(search))
        let tbl = ""
        result.map((item) => {
            tbl += `
                <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
                <td>${item.address.street}, ${item.address.city}, ${item.address.zipcode},</td>
                <td>${item.company.name}</td>
                </tr>
                `
        })
        result.length < 1 ? 
        document.getElementById("tbody").innerHTML = "No Data Found" : 
        document.getElementById("tbody").innerHTML = tbl
    })
}


