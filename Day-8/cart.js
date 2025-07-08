function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cartItems");
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card mb-3">
          <img src="${item.image}" class="card-img-top">
          <div class="card-body">
            <h5>${item.name}</h5>
            <p>${item.price} EGP</p>
            <button class="btn btn-danger" onclick="removeItem(${index})">Remove</button>
          </div>
        </div>
      </div>
    `;
  });

  document.getElementById("total").innerText = `Total: ${total} EGP`;
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
function purchaseCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  let user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("You must be logged in");
    return;
  }

  const report = {
    total,
    status: "Pending Payment",
    date: new Date().toLocaleString()
  };

  // اجمع الطلبات السابقة
  user.orders = user.orders || [];
  user.orders.push(report);

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.removeItem("cart");

  alert("Purchase submitted. Redirecting to account...");
  window.location.href = "account.html";
}

loadCart();
