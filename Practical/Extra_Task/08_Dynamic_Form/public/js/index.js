function createForm() {
    let num = Number(prompt("How Many Element you Want"))

    if (num == "" || num < 0) {
        alert("Please Enter a Valid Number")
        return;
    }
    let typeCheker = ["color", "checkbox", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"]
    for (let i = 1; i <= num; i++) {
        let lableText = prompt(`Enter Lable Text of field => ${i} `, document.querySelector("#lable").value)
        let type = prompt(`type of field => ${i}`, document.querySelector("#type").value)
        let placeholder = prompt(`palceholder of field => ${i} `, document.querySelector("#placeholder").value)
        let val = prompt(`value of field => ${i}`, document.querySelector("#value").value)
        let InputId = prompt(`Id of field => ${i}`, document.querySelector("#id").value)

        let lable = document.createElement('lable')
        let input = document.createElement('input')
        let newDiv = document.createElement("div")
        newDiv.setAttribute('class', "form-control")

        let newForm = document.querySelector('#newForm')

        if (typeCheker.includes(type)) {
            lable.innerText = lableText
            lable.setAttribute("for", InputId)
            lable.setAttribute("class", "labeClass")
            input.type = type
            input.placeholder = placeholder
            input.value = val
            input.id = InputId
            input.setAttribute("class", "inputField")

            if (type == "submit") {
                input.setAttribute("calss", "btn")
                input.setAttribute("onclick", "btn")
                input.removeAttribute("class", "inputField")
            }
            if (type == "radio") {
                input.setAttribute("name", "name")
            }

            newDiv.append(lable)
            newDiv.append(input)
            newForm.appendChild(newDiv)

            document.querySelector(".form-output").style.display = "block"
        } else {
            alert("Please Enter a Valid type")
            return;
        }
    }
}
let btn = document.createElement("button")
btn.innerText = "Add Field"
btn.setAttribute("class", "btn")
btn.setAttribute("onclick", "createForm()")
document.querySelector("#AddField").append(btn)














// lable.innerText = lableText
// lable.setAttribute("for", InputId)
// lable.setAttribute("class", "labeClass")
// input.type = type
// input.placeholder = placeholder
// input.value = val
// input.id = InputId
// input.setAttribute("class", "inputField")

// if (type == "submit") {
//     input.setAttribute("calss", "btn")
//     input.setAttribute("onclick", "btn")
//     input.removeAttribute("class", "inputField")
// }
// if (type == "radio") {
//     input.setAttribute("name", "name")
// }

// newDiv.append(lable)
// newDiv.append(input)
// newForm.appendChild(newDiv)

// document.querySelector(".form-output").style.display = "block"