let isname = false
let isemail = false
let ispassword = false
let isCpassword = false



function FormHandler(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    nameChecker()
    emailChecker()
    passwordChecker()
    ConfirmPasswordChecker()

    if (isname == true && isemail == true && ispassword == true && isCpassword == true) {
        let data = []
        let obj = {
            name: name,
            email: email,
            password: password,
        }
        data.push(obj)
        console.log(data);
        alert("Registartion done..........")
        document.querySelector('#name').value = ""
        document.querySelector('#email').value = ""
        document.querySelector("#password").value = ""
        document.querySelector("#Cpassword").value = ""
    } else{
        alert("inpute all field")
    }
}

function nameChecker() {
    let name = document.querySelector('#name').value
    let name_error = document.querySelector("#name-error")
    let numcheker =  /[\d\W_]/

    if (name == "") {
        name_error.innerHTML = "Name is required"
        isname = false
    } 
    else if (name.length <= 2) {
        name_error.innerHTML = "Name must be greater than 2 characters"
        isname = false
    } 
    else if(numcheker.test(name)){
        name_error.innerHTML = "Name must not contain numbers or special characters";
        isname = false;
    }
    else {
        name_error.innerHTML = ""
        isname = true
    }
    btnChecker()
}

function emailChecker() {
    let email = document.querySelector('#email').value
    let email_error = document.querySelector("#email-error")
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    let dot = "."
    if (email == "") {
        email_error.innerHTML = "please enter valid email"
        isemail = false
     }   
     if(!emailRegex.test(email)){
        email_error.innerHTML = "please enter valid email"
        isemail = false
     }
    else {
        email_error.innerHTML = ""
        isemail = true
    }
    btnChecker()
}

function passwordChecker() {
    let password = document.querySelector("#password").value
    let password_error = document.querySelector("#password-error")
    let passworRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if (password == "" || !password.match(passworRegex)) {
        password_error.innerHTML = "please enter password at least 8 character ,At least one lowercase alphabet ,one uppercase alphabet one Numeric digit,  one special character Also, the total length must be in the range 8-15"
        ispassword = false
    } else {
        password_error.innerHTML = ""
        ispassword = true
    }
    btnChecker()
}

function ConfirmPasswordChecker() {
    let Cpassword = document.querySelector("#Cpassword").value
    let Cpassword_error = document.querySelector("#Cpassword-error")
    let password = document.querySelector("#password").value

    if (Cpassword == "" || Cpassword != password) {
        Cpassword_error.innerHTML = "Password not match"
        isCpassword = false
    } else {
        Cpassword_error.innerHTML = ""
        isCpassword = true
    }
    btnChecker()
}

function btnChecker() {
    let btn = document.getElementById("submit_btn");
    if (isname && isemail && ispassword && isCpassword) {
        btn.removeAttribute("disabled");
    } else {
        btn.setAttribute("disabled", "disabled");
    }
}