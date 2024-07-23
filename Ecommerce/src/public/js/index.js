
async function DispalyProduct() {
    try {
        let res = await fetch("./src/public/js/data.json");
        let data = await res.json()
        let record = data.slice(0, 8)

        record.map((item) => {
            document.querySelector("#productCard").innerHTML += `
              <div class="product-card" id="${item.id}">
                    <div class="product-img">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="product-content">
                        <h4 class="productName">${item.name}</h4>
                        <p class="offerPrice">${item.offerPrice} &#8377; <span class="mainPrice">${item.price} &#8377;</span></p>
                        <div class="d-flex justify-between">
                            <p class="weight">${item.weight} </p> 
                            <p class="cat">${item.category}</p>
                        </div>
                       <div class="d-flex justify-center">
                            <button class="cartBtn" onclick="AddtoCart(${item.id})">Add To Cart</button>
                       </div>
                    </div>
              </div>    
        `
        })
    } catch (err) {
        console.log(err.message);
    }
    updateCartQty()
}
DispalyProduct()

async function AddtoCart(id) {
    try {
        let res = await fetch("./src/public/js/data.json");
        let data = await res.json()

        let selectedData = data.find(item => item.id == id);

        if (!selectedData) return;
 
        let cartData = JSON.parse(localStorage.getItem("cart")) || [];
        cartData.push(selectedData);
        localStorage.setItem('cart', JSON.stringify(cartData));
    } catch (err) {
        console.log(err);
    }
    updateCartQty()
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
checkUserStatus();

function GotoCart(){
    let loginData = JSON.parse(localStorage.getItem("login"));

    if (!loginData) {
        alert("User Not Valid, First Sign in")
        return;
    } else {
        location.href="./src/pages/Cart/cart.html";
    }
}

function LogoutUser(){
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

function updateCartQty(){
    let cartData = JSON.parse(localStorage.getItem("cart"));
    if(localStorage.getItem("cart") == null || localStorage.getItem("cart") == undefined){
        document.querySelector("#updateQty").innerHTML = 0
        document.querySelector("#smallupdateQty").innerHTML = 0
    }else{
        document.querySelector("#updateQty").innerHTML = cartData.length
        document.querySelector("#smallupdateQty").innerHTML = cartData.length
    }
  }
  updateCartQty()

function GotoUserProfile(){
    if(localStorage.getItem('login') == null || localStorage.getItem('login') == undefined){
        alert("invalid User,login First")
    } else{
        location.href = "./src/pages/profile/profile.html"
    }
}