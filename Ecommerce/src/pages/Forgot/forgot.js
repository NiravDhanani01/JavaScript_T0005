let isemail = false;
let ispassword = false;
let isConfirmPassword = false;
let userData = JSON.parse(localStorage.getItem("register"));
document.querySelector(".emilvalidator").style.display = "block";
document.querySelector(".OtpValidator").style.display = "none";
document.querySelector(".NewPassword").style.display = "none";

var otp = Math.floor(Math.random() * 10000);

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

function LoginUser(event) {
  event.preventDefault();
  let email = document.querySelector("#email").value;
  let validUser = userData.some((item) => {
    return item.email === email;
  });

  if (validUser == true) {
    document.querySelector(".emilvalidator").style.display = "none";
    document.querySelector(".OtpValidator").style.display = "block";
    document.querySelector(".NewPassword").style.display = "none";
    alert(`Your otp is : ${otp}`);
  } else {
    alert("Enter Correct Email");
  }
}

function otpchecker(event) {
  event.preventDefault();
  let userOtp = document.querySelector("#otp").value;

  if (otp == userOtp) {
    document.querySelector(".emilvalidator").style.display = "none";
    document.querySelector(".OtpValidator").style.display = "none";
    document.querySelector(".NewPassword").style.display = "block";
  } else {
    alert("Enter Correct Otp");
  }
}

function passwordChecker() {
  let password = document.querySelector("#password").value;
  let passwordError = document.querySelector("#passwordError");
  let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,15}$/;
  if (!regex.test(password)) {
    passwordError.innerText =
      "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-15 characters long.";
    ispassword = false;
  } else {
    passwordError.innerText = "";
    ispassword = true;
  }
}

function PasswordSetter(event) {
    event.preventDefault();
  
    let email = document.querySelector("#email").value;
    let newpassword = document.querySelector("#password").value;
  
    if (!newpassword || !email) {
      alert("Enter all details");
      return;
    }
  
    if (ispassword) {
      let updatedData = userData.map((user) => {
        if (user.email === email) {
          return { ...user, password: newpassword };
        }
        return user;
      });
  
      localStorage.setItem("register", JSON.stringify(updatedData));
      alert("Password updated successfully!");
      window.location.href = "../login/login.html";
    } else {
      alert("Please ensure all validations are correct");
    }
  }
  
