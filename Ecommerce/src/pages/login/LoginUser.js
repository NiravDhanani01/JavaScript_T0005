let isemail = false;
let ispassword = false;
let userData = JSON.parse(localStorage.getItem("register"))

let data = []
function LoginUser(event) {
    event.preventDefault();
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let loginError = document.querySelector("#loginError")

    emailChecker();
    passwordChecker();

 if(localStorage.getItem("register") == null || localStorage.getItem("register") == undefined){
    loginError.innerHTML = "User Not Register,please Register First"
} else{
     loginError.innerHTML = ""
 }

    let validUser = userData.find((item)=>{
        return item.email === email && item.password === password
    })
  
    if (isemail == true && ispassword == true) {
       if(validUser){
        localStorage.setItem("login",JSON.stringify(validUser))
        loginError.innerText = ""
        location.href ="../../../index.html"
    } else {
        loginError.innerText = "Email or password may wrong"
       }
    } else {
        alert("All Field Require")
    }
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
}

function emailChecker() {
    let email = document.querySelector("#email").value;
    let error = document.querySelector("#emailError");
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
        error.innerText = "Enter Valid Email Address";
        isemail = false;
    } else {
        error.innerText = "";
        isemail = true;
    }
}

function passwordChecker() {
    let password = document.querySelector("#password").value;
    let passwordError = document.querySelector("#passwordError")
    let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,15}$/
    if (!regex.test(password)) {
        passwordError.innerText = "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-15 characters long."
        ispassword = false;
    } else {
        passwordError.innerText = "";
        ispassword = true;
    }
}
