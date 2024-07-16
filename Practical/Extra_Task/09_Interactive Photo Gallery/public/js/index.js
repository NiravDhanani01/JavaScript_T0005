let imageData = []
function AddImage() {
    let image = document.querySelector("#AddPhoto").value
    if(!image){
        alert("Enter Image Url in input field")
        return
    }
    let id = Math.floor(Math.random() * 100)
    let obj = {
        id,
        image
    }
    if (!localStorage.getItem("img")) {
        imageData.push(obj)
        localStorage.setItem("img", JSON.stringify(imageData))
    }
    else {
        let oldData = JSON.parse(localStorage.getItem("img")) || []
        oldData.push(obj)
        localStorage.setItem("img", JSON.stringify(oldData))
    }
    document.querySelector("#AddPhoto").value = ""
    ViewImage()
}
function ViewImage() {
    let alldata = JSON.parse(localStorage.getItem('img')) || []
    let show = ""
    alldata.map((val) => {
        show += `
        <div class="image-container" onclick="Modelbox(${(val.id)})" >
                <img src=${val.image} alt="1" class="image"  >
            <button class="deleteBtn"  onclick="DeletePhoto(${(val.id)})">&#10006;</button>
        </div>
       `
    })

    document.querySelector(".image-output").innerHTML = show
}
ViewImage()

function DeletePhoto(id) {
    let alldata = JSON.parse(localStorage.getItem('img')) || []
    let del = alldata.filter(item => item.id !== id)
    localStorage.setItem("img", JSON.stringify(del))
    ViewImage()
}

function Modelbox(id) {
    let ModelBox = document.querySelector(".ModelBox")
    let ModelBoxcontainer = document.querySelector(".ModelBox-container")

    let alldata = JSON.parse(localStorage.getItem('img')) || []
   alldata.map((image) => {
        if (image.id === id) {
            ModelBoxcontainer.innerHTML = ` 
             <span class="model-Close" onclick="closebtn()">&#10006;</span>
            <img  class="model-img" src=${image.image} alt="" class="model-img">`
            ModelBox.style.display = "block"
        }
    })
}

function closebtn(){
    document.querySelector(".ModelBox").style.display = "none"
}