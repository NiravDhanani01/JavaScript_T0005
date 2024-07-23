function GotoCart() {
    let loginData = JSON.parse(localStorage.getItem("login"));

    if (!loginData) {
        alert("User Not Valid, First Sign in")
        return;
    } else {
        location.href = "../Cart/cart.html";
    }
}

function checkUserStatus() {
    let loginData = JSON.parse(localStorage.getItem("login"));

    if (!loginData) {
        document.querySelector("#logout").style.display = "none";
        document.querySelector("#smalllogout").style.display = "none";
    } else {
        document.querySelector("#userName").innerText = `Welcome ${loginData.name}`;
        document.querySelector(
            "#smalluserName"
        ).innerText = `Welcome ${loginData.name}`;
        document.querySelector("#loginUser").style.display = "none";
        document.querySelector("#smallloginUser").style.display = "none";
    }
}

checkUserStatus()

function LogoutUser() {
    localStorage.removeItem("login")
    location.href = "./index.html"
}

function toggleNavBar() {
    var SmallMenu = document.getElementById('smallMenu');
    if (SmallMenu.classList.contains('showSmallMenu')) {
        SmallMenu.classList.remove('showSmallMenu');
    } else {
        SmallMenu.classList.add('showSmallMenu');
    }
}

function updateCartQty() {
    let cartData = JSON.parse(localStorage.getItem("cart"));
    if (localStorage.getItem("cart") == null || localStorage.getItem("cart") == undefined) {
        document.querySelector("#updateQty").innerHTML = 0
        document.querySelector("#smallupdateQty").innerHTML = 0
    } else {
        document.querySelector("#updateQty").innerHTML = cartData.length
        document.querySelector("#smallupdateQty").innerHTML = cartData.length
    }
}
updateCartQty()

function GotoUserProfile() {
    if (localStorage.getItem('login') == null || localStorage.getItem('login') == undefined) {
        alert("invalid User,login First")
    } else {
        location.href = "../profile/profile.html"
    }
}

function ContactDetails(event) {
    event.preventDefault()
    let InfoName = document.querySelector("#InfoName").value;
    let Infophone = document.querySelector("#Infophone").value;
    let InfoEmail = document.querySelector("#InfoEmail").value;
    let InfoMessage = document.querySelector("#InfoMessage").value;
    if (!InfoName || !Infophone || !InfoEmail || !InfoMessage) {
        alert("please Enter All field")
    }
    let obj = {
        InfoName, Infophone, InfoEmail, InfoMessage
    }

    alert("Thak you For Your Response")
    localStorage.setItem('message',JSON.stringify(obj))
    document.querySelector("#InfoName").value = ""
    document.querySelector("#Infophone").value = ""
    document.querySelector("#InfoEmail").value = ""
    document.querySelector("#InfoMessage").value = ""
}