
let RandomNum = Math.ceil(Math.random() * 100 )
let Guess = []
let remain = 10
let count = 0

function GussesSubmit() {
    let num = Number(document.getElementById("gussesNum").value)
    let prevGussess = document.querySelector('#prevGussess')
    let result = document.querySelector("#result")

    if (num > 100 || num == "") {
        alert('Please Enter Valid number')
        document.getElementById("gussesNum").value = ""
        return false
    }

    if (Guess.includes(num)) {
        alert('You have already entered this number')
        document.getElementById("gussesNum").value = ""
        return false
    }
    
    Guess.push(num)
    prevGussess.innerHTML = Guess
    count++

    if (num > RandomNum) {
        result.innerHTML = "Your Gusse Too High"
    } else if (num < RandomNum) {
        result.innerHTML = "Your Gusse Too Low"
    } else if (num == RandomNum) {
        result.innerHTML = `Coreect Gusse You Win in ${count} try`
        document.getElementById("gussesNum").setAttribute("disabled", "disabled")
        document.querySelector(".submit").setAttribute("disabled", "disabled")
        document.querySelector(".restart").style.display = "block"
    } else {
        result.innerHTML = "You Lose"
    }

    reaminTry()
    document.getElementById("gussesNum").value = ""
}

function reaminTry() {
    let gusseTry = document.querySelector("#gusseTry")
    if (remain < 0) {
        alert("game over")
        location.reload()
    } else {
        gusseTry.innerHTML = remain
    }
    remain--
}
reaminTry()

function restart() {
    location.reload()
}

