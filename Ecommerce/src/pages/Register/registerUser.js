let isname = false;
let isemail = false;
let ispassword = false;
let isConfirmPassword = false;

let data = []
function registrationForm(event) {
  event.preventDefault();

  nameChecker();
  emailChecker();
  passwordChecker();
  CpasswordCheker();
  let name = document.querySelector("#name").value
  let email = document.querySelector("#email").value
  let password = document.querySelector("#password").value

  if (isname == true && isemail == true && ispassword == true && isConfirmPassword == true) {
    let obj = {
      name, email, password
    }
    if (localStorage.getItem("register") == null || localStorage.getItem("register") == undefined) {
      data.push(obj)
      localStorage.setItem("register", JSON.stringify(data))
    } else {
      let allusers = JSON.parse(localStorage.getItem("register"))
      allusers.push(obj)
      localStorage.setItem("register", JSON.stringify(allusers))
    }
    location.href = "../login/login.html"
  } else {
    alert("All Field Require")
  }
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
  document.querySelector("#Cpassword").value = "";
}

function nameChecker() {
  let name = document.querySelector("#name").value;
  let error = document.querySelector("#nameError");
  let regex = /^[a-zA-Z\s]+$/;

  if (name.length < 2) {
    error.innerText = "Name should be at least 2 characters";
    isname = false;
  } else if (!regex.test(name)) {
    error.innerText = "Numbers and special characters are not allowed";
    isname = false;
  } else {
    error.innerText = "";
    isname = true;
    return name
  }
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

function CpasswordCheker() {
  let password = document.querySelector("#password").value;
  let Cpassword = document.querySelector("#Cpassword").value;
  let CpasswordError = document.querySelector("#CpasswordError")
  if (password !== Cpassword) {
    CpasswordError.innerText = "password not match"
    isConfirmPassword = false;
  } else {
    CpasswordError.innerText = "";
    isConfirmPassword = true;
  }
}

