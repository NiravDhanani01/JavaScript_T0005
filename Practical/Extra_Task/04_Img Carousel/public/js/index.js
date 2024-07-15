let counter = 0;
function slideShow() {
    let slider = document.querySelectorAll("#slider")
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    } 
    slider[counter].style.display = "block";
}

function nextImages() {
    counter++
    if (counter > slider.length-1) {
        counter = 0
    }
    slideShow()
}

function prevImages() {
    counter--
    if (counter < 0) {
        counter = 2
    }
    slideShow()
}

document.querySelector("#slider").addEventListener("mousedown",function(){
    clearInterval(nextImages())
})
setInterval(()=>nextImages(),4000)

slideShow()
