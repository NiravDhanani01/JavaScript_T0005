let quize = [
    {
        QuestionTitle: "Question 1",
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<scripting>",
        b: "<src>",
        c: "<script>",
        d: "<link>",
        ans: "c"
    },
    {
        QuestionTitle: "Question 2",
        question: "How do you write 'Hello World' in an alert box?",
        a: "alert('Hello World');",
        b: "msg('Hello World');",
        c: "msgBox('Hello World')",
        d: "msg('Hello World')",
        ans: "a"
    },
    {
        QuestionTitle: "Question 3",
        question: `What is the correct JavaScript syntax to change the content of the HTML element below? 
                <p id="demo">This is a demonstration.</p>, `,
        a: "document.getElementById('demo').innerHTML = 'Hello World!';",
        b: "document.getElement('demo').innerHTML = 'Hello World!';",
        c: "document.getElementByName('demo').innerHTML = 'Hello World!';",
        d: "document.getElement('p').innerHTML = 'Hello World!';",
        ans: "a"
    },
    {
        QuestionTitle: "Question 4",
        question: "How do you create a function in JavaScript?",
        a: "function:myFunction()",
        b: "function = myFunction()",
        c: "function myFunction()",
        d: "function:myFunction",
        ans: "c"
    },
    {
        QuestionTitle: "Question 5",
        question: "How do you call a function named myFunction?",
        a: "myFunction()",
        b: "call myFunction()",
        c: "call function myFunction()",
        d: "call function:myFunction()",
        ans: "a"
    }
]

let currentQuestion = 0;
let score = 0;

const QuestionTitle = document.getElementById('question-title')
const Question = document.getElementById("question")
const ansA = document.getElementById("a_ans")
const ansB = document.getElementById("b_ans")
const ansC = document.getElementById("c_ans")
const ansD = document.getElementById("d_ans")
const PrevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")

function DisaplayQuestion() {
    document.querySelector("#questioNo").innerHTML = `${currentQuestion + 1} out of ${quize.length}`
    QuestionTitle.innerText = quize[currentQuestion].QuestionTitle
    Question.innerText = quize[currentQuestion].question
    ansA.innerText = quize[currentQuestion].a
    ansB.innerText = quize[currentQuestion].b
    ansC.innerText = quize[currentQuestion].c
    ansD.innerText = quize[currentQuestion].d
    document.getElementById("resultShow").style.display = "none"
}

function ansSelected() {
    let userSelected;
    document.querySelectorAll(".answer").forEach(item => {
        if (item.checked) {
            userSelected = item.value
        }
    })
    return userSelected
}

function ansDeselected() {
    let userAns = document.querySelectorAll(".answer")
    userAns.forEach(item => item.checked = false)
}


function gotoNext() {
    let ans = ansSelected()
    if (ans === undefined) {
        alert("Please select an answer")
        return false
    } else {
        if (ans === quize[currentQuestion].ans) {
            score++
        }
    }
    if (currentQuestion < quize.length - 1) {
        currentQuestion++
        ansDeselected()
        DisaplayQuestion()
        if (currentQuestion === quize.length - 1) {
            nextButton.innerHTML = "Submit"
        }
    } else {
        nextButton.innerHTML = "submit"
        displayResult()
    }
}

function gotoPrevious() {
    if (currentQuestion > 0) {
        currentQuestion--
        DisaplayQuestion()
    } else {
        alert("You are at the first question")
        DisaplayQuestion()
    }
}

function displayResult() {
    const result = document.getElementById("result")
    let sum = (score / quize.length) * 100
    if (sum >= 50) {
        result.innerHTML = `<p class="score"> Congratulation </p> 
              <p>  You Score ${score} out of  ${quize.length} </p> `
    } else {
        result.innerHTML = `<p class="score"> Try Again !!! </p> 
              <p>  You Score ${score} out of  ${quize.length} </p> `
    }

    document.getElementById("resultShow").style.display = "flex"
    document.getElementById("question-container").style.display = "none"
}
DisaplayQuestion()

function Reset() {
    location.reload()
}



