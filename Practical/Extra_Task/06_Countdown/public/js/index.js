function CountDown() {
  let secondInput = Number(document.querySelector("input").value)
  if(secondInput == "" || secondInput < 0){
    alert("plese Enter Valid Number")
    return false
  }
  let time = setInterval(() => {
    secondInput--
    document.getElementById("countdown").style.display = "block"
    document.getElementById("countdown").innerHTML = `remain : ${secondInput}s`
    if (secondInput < 0) {
      clearInterval(time)
      document.getElementById("countdown").innerHTML = `Expired`
      document.getElementById("countdown").style.color = "red"
    }
  }, 1000)
}

let data = Date.getTime()
console.log(data);
