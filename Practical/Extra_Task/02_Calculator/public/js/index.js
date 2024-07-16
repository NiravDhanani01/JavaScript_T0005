let result = document.getElementById("result")
function addvalue() {
    var num1 = Number(document.getElementById("num_1").value)
    var num2 = Number(document.getElementById("num_2").value)
    result.innerHTML = `Addition of ${num1} + ${num2} = ${num1 + num2}`
}
function minusValue() {
    let num1 = Number(document.getElementById("num_1").value)
    let num2 = Number(document.getElementById("num_2").value)
    result.innerHTML = `Subtraction of ${num1} - ${num2} = ${num1 - num2}`
}
function multiplyValue() {
    let num1 = Number(document.getElementById("num_1").value)
    let num2 = Number(document.getElementById("num_2").value)
    result.innerHTML = `Multiply of ${num1} x ${num2} = ${num1 * num2}`
}
function dividValue() {
    let num1 = Number(document.getElementById("num_1").value)
    let num2 = Number(document.getElementById("num_2").value)
    result.innerHTML = `Division of ${num1} / ${num2} = ${num1 / num2}`
}
