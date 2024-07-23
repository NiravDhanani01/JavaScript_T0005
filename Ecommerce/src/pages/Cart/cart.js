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

function displayCart() {
  let CartData = JSON.parse(localStorage.getItem("cart")) || [];
  let tbl = "";

  if (CartData.length === 0) {
    document.querySelector("#CartCard").innerHTML = "<p>Your cart is empty</p>";
    return;
  }

  CartData.map((item, i) => {
    if (item.id) {
      tbl += `
        <div class="cartTable largedisplay wow animate__fadeInUp" data-wow-duration="1s">
          <div class="cartCard d-flex justify-between">
            <p class="cartnum">${i + 1}</p>
            <img class="CartImg" src="${item.img}" alt="${item.name}">
            <p class="Cartname">${item.name}</p>
            <p class="CartPrice">${item.offerPrice}</p>
            <p class="CartQty">
              <button class="decBtn" onclick="Decrement(${item.id
        })"> - </button>
              ${item.qty}
              <button class="incBtn" onclick="increment(${item.id
        })"> + </button>
            </p>
            <p class="subtotal">${item.offerPrice * item.qty}</p>
            <div class="delBtn"><button class="btn deleteBtn" onclick="removeItem(${item.id
        })">Remove</button></div>
          </div>
        </div>

        <div class="cartTable smmalldisplay">
          <div class="d-flex justify-between">
            <div>
              <p class="cartnum">${i + 1}</p>
            </div>
            <div>
              <img class="CartImg" src="${item.img}" alt="${item.name}">
            </div>
            <div>
              <p class="Cartname">${item.name}</p>
              <p class="CartPrice">Price : ${item.offerPrice}  &#8377;</p>
              <p class="CartQty d-flex"> 
                <button class="decBtn" onclick="Decrement(${item.id
        })"> - </button>
                ${item.qty}
                <button class="incBtn" onclick="increment(${item.id
        })"> + </button>
              </p>
              <p class="subtotal"> Subtotal : ${item.offerPrice * item.qty}</p>
              <div class="delBtn d-flex justify-center">
                <button class="btn deleteBtn" onclick="removeItem(${item.id
        })">Remove</button>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  });
  document.querySelector("#CartCard").innerHTML = tbl;
}
function displayOrder() {
  let CartData = JSON.parse(localStorage.getItem("cart")) || [];
  let card = "";

  CartData.map((item, i) => {
    if (item.id) {
      card += `
        <div>
          <div class="d-flex justify-between">
            <p class="Ck-productName">${item.name}</p>
            <span class="ck-subtotal">${item.offerPrice}</span>
          </div>
        </div>
      `;
    }
  });
  document.querySelector("#productDetails").innerHTML = card;
}

function calculateTotal() {
  let CartData = JSON.parse(localStorage.getItem("cart")) || [];
  let total = CartData.reduce(
    (acc, item) => acc + item.offerPrice * item.qty,
    0
  );
  let charge;
  if(total < 500){
    charge = 80
    document.querySelector('.deleiveryCharge').style.display = "block"
    document.querySelector('.deleiveryFree').style.display = "none"
  } else {
    document.querySelector('.deleiveryCharge').style.display = "none"
    document.querySelector('.deleiveryFree').style.display = "block"
    charge = 0;
  }

  document.querySelector("#total").innerText = total;
  document.querySelector(".ck-finalTotal").innerText = total;

  if (!CartData.length) {
    document.querySelector(".ck-charge").style.display = "none";
    document.querySelector(".ck-GrandTotal").style.display = "none";
    document.querySelector(".finalAmount").style.display = "none";
    document.querySelector(".Proceed").style.display = "none";
  } else {
    document.querySelector(".ck-charge").innerText = charge;
    document.querySelector(".ck-GrandTotal").innerText = total + charge;
    document.querySelector(".finalAmount").innerHTML = `
      <p class="modelcontent"><b>Total Payable </b>: ${total + charge}</p>`;
    document.querySelector(".Proceed").style.display = "flex";
  }
}

function removeItem(id) {
  let CartData = JSON.parse(localStorage.getItem("cart")) || [];
  let updatedCart = CartData.filter((item) => item.id != id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  displayCart();
  displayOrder()
  calculateTotal();
  updateCartQty();
}

function clearCart() {
  localStorage.removeItem("cart");
  displayCart();
  displayOrder()
  calculateTotal();
}

function LogoutUser() {
  localStorage.removeItem("login");
  location.href = "../../../index.html";
}

function toggleNavBar() {
  var SmallMenu = document.getElementById("smallMenu");
  SmallMenu.classList.toggle("showSmallMenu");
}

function addItemToCart(item) {
  let CartData = JSON.parse(localStorage.getItem("cart")) || [];
  let existingItem = CartData.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    item.qty = 1;
    CartData.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(CartData));
  displayCart();
  displayOrder()
  calculateTotal();
}

function increment(id) {
  let CartData = JSON.parse(localStorage.getItem("cart")) || [];
  let updatedCart = CartData.map((item) => {
    if (item.id === id) {
      return { ...item, qty: item.qty + 1 };
    }
    return item;
  });
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  displayCart();
  displayOrder()
  calculateTotal();
}

function Decrement(id) {
  let CartData = JSON.parse(localStorage.getItem("cart")) || [];
  let updatedCart = CartData.map((item) => {
    if (item.id === id && item.qty > 1) {
      return { ...item, qty: item.qty - 1 };
    }
    if (item.id === id && item.qty <= 1) {
      removeItem(id);
    }
    return item;
  });
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  displayCart();
  displayOrder()
  calculateTotal();
}

let isNameValid = false;
let isNumberValid = false;
let ispincode = false

function BillingForm(event) {
  event.preventDefault();
  let register = JSON.parse(localStorage.getItem("register"));
  let login = JSON.parse(localStorage.getItem("login"));
  let current = register.find((item) => {
    return item.email == login.email;
  });
  if (current.email) {
    let name = document.querySelector("#Billname").value;
    let contact = document.querySelector("#contact").value;
    let address = document.querySelector("#BillAddess").value;
    let pincode = document.querySelector("#pincode").value;

    NameChecker();
    NumberChecker();
    PinCheker()

    if (isNameValid && isNumberValid && ispincode) {
      let obj = {
        name,
        contact,
        address,
        pincode,
      };

      localStorage.setItem("billing", JSON.stringify(obj));
    }
  }
  document.querySelector("#Billname").value = "";
  document.querySelector("#contact").value = "";
  document.querySelector("#BillAddess").value = "";
  document.querySelector("#pincode").value = "";
}

function NameChecker() {
  let name = document.querySelector("#Billname").value;
  let error = document.querySelector("#nameError");
  let regex = /^[a-zA-Z\s]+$/;

  if (name.length < 2) {
    error.innerText = "Name should be at least 2 characters";
    isNameValid = false;
  } else if (!regex.test(name)) {
    error.innerText = "Numbers and special characters are not allowed";
    isNameValid = false;
  } else {
    error.innerText = "";
    isNameValid = true;
  }
}

function NumberChecker() {
  let contact = document.querySelector("#contact").value;
  let error = document.querySelector("#contactError");
  let regex = /^\d{10}$/;

  if (!regex.test(contact)) {
    error.innerText = "Contact Number must be 10 digits";
    isNumberValid = false;
  } else {
    error.innerText = "";
    isNumberValid = true;
  }
}

function PinCheker() {
  let pincode = document.querySelector("#pincode").value;
  let pinerror = document.querySelector("#pinerror");
  let regex = /^[1-9][0-9]{5}$/;

if (!regex.test(pincode)) {
    pinerror.innerHTML = `pin must be 6 character`
    ispincode = false
  } else {
    pinerror.innerHTML = ""
    ispincode = true
  }
}

function CheckOut() {
  let billingData = JSON.parse(localStorage.getItem("billing"));
  let refNum = Math.floor(Math.random() * 10000000);
  let paymentMethodElements = document.querySelectorAll(".radiobtn");
  let selectedPaymentMethod = Array.from(paymentMethodElements).find(
    (radio) => radio.checked
  )?.value;

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;

  if (!billingData) {
    alert("Please add Billing Details");
    return
  } else {
    document.querySelector(".date").innerHTML = `
      <p class="modelcontent"><b>Date </b>: ${currentDate}</p>`;

    document.querySelector(".refNum").innerHTML = `
      <p class="modelcontent"><b>Bill Number </b>: ${refNum}</p>`;

    if (!selectedPaymentMethod) {
      alert("Please select your payment method");
      return;
    }

    let paymentText;
    if (selectedPaymentMethod === "Net_Banking") {
      paymentText = "Net Banking";
    } else if (selectedPaymentMethod === "cod") {
      paymentText = "Cash On Delivery";
    } else {
      paymentText = "UPI";
    }

    document.querySelector(".PaymentMethod").innerHTML = `
      <p class="modelcontent"><b>Your Payment Method </b>: ${paymentText}</p>`;

    document.querySelector("#billingDetails").innerHTML = `
      <h3>Billing Details</h3>
      <p class="modelcontent">Name: ${billingData.name}</p>
      <p class="modelcontent">Contact: ${billingData.contact}</p>
      <p class="modelcontent">Order Ship-to: ${billingData.address}</p>
      <p class="modelcontent">Pincode: ${billingData.pincode}</p>
    `;
  }
  var modal = document.querySelector("#checkoutModal");
  modal.style.display = "block";
}

function closeModal() {
document.getElementById("checkoutModal").style.display = "none";
  localStorage.removeItem("cart");
  localStorage.removeItem("billing");
  location.href = "../../../index.html";
}

function closebnt() {
document.getElementById("checkoutModal").style.display = "none";
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

function GotoUserProfile() {
  if (
    localStorage.getItem("login") == null ||
    localStorage.getItem("login") == undefined
  ) {
    alert("invalid User,login First");
  } else {
    location.href = "../profile/profile.html";
  }
}


displayOrder()
checkUserStatus();
displayCart();
calculateTotal();
