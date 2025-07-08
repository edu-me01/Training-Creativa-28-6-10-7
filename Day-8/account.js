function loadUser() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    location.href = "login.html";
    return;
  }

  let content = `
    <div class="card text-center shadow p-3 mb-4" style="width: 26rem;">
      <div class="card-body">
        <h5 class="card-title">👋 Welcome, ${user.name}!</h5>
        <p class="card-text">Username: <strong>${user.username}</strong></p>
        <button class="btn btn-danger mt-3" onclick="logout()">Logout</button>
      </div>
    </div>
  `;

  // عرض زر View All Orders لو فيه طلبات
  if (user.orders && user.orders.length > 0) {
    content += `
      <button class="btn btn-outline-primary mb-3" onclick="toggleOrders()">📋 View All Orders</button>
      <div id="orderHistory" style="display: none;" class="d-flex flex-column align-items-center w-100 mt-3"></div>
    `;
  }

  document.getElementById("userCard").innerHTML = content;
}

function logout() {
  localStorage.removeItem("user");
  location.href = "login.html";
}

function toggleOrders() {
  const container = document.getElementById("orderHistory");
  const isVisible = container.style.display === "block";

  if (isVisible) {
    container.style.display = "none";
    container.innerHTML = ""; // مسح الطلبات
  } else {
    container.style.display = "block";
    renderOrders();
  }
}

function renderOrders() {
  const user = JSON.parse(localStorage.getItem("user"));
  const orders = user.orders || [];
  const container = document.getElementById("orderHistory");

  container.innerHTML = "<h5 class='text-primary'>🗂️ Order History</h5>";

  orders.forEach((order, i) => {
    const orderId = `order-${i}`;
    const statusClass = order.status === "Paid" ? "bg-success" : "bg-warning text-dark";

    let buttons = "";
    if (order.status === "Pending Payment") {
      buttons = `
        <button class="btn btn-success btn-sm mt-2" onclick="confirmOrder(${i})">✅ Confirm</button>
      `;
    }

    container.innerHTML += `
      <div class="card shadow-sm my-2" style="width: 26rem;">
        <div class="card-body">
          <h6 class="card-title">Order #${i + 1}</h6>
          <p class="mb-1">Total: <strong>${order.total} EGP</strong></p>
          <p class="mb-1">Date: ${order.date}</p>
          <span id="${orderId}-status" class="badge ${statusClass}">${order.status}</span>
          <div id="${orderId}-actions" class="mt-2">${buttons}</div>
        </div>
      </div>
    `;
  });
}

function confirmOrder(index) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || !user.orders || !user.orders[index]) return;

  user.orders[index].status = "Paid";
  localStorage.setItem("user", JSON.stringify(user));

  // تحديث مباشر للحالة
  document.getElementById(`order-${index}-status`).innerText = "Paid";
  document.getElementById(`order-${index}-status`).className = "badge bg-success";
  document.getElementById(`order-${index}-actions`).innerHTML = "";
  alert(`✅ Order #${index + 1} marked as paid.`);
}

loadUser();
