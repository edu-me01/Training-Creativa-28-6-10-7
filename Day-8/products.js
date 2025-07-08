async function loadProducts() {
  const res = await fetch('data.json');
  const data = await res.json();
  const container = document.getElementById('products');

  if (!data.products || data.products.length === 0) {
    container.innerHTML = `<p class="text-danger">No products found.</p>`;
    return;
  }

  data.products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'col-md-4';

    card.innerHTML = `
      <div class="card mb-4 shadow-sm">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text fw-bold">Price: ${product.price} EGP</p>
          <button class="btn btn-success w-100" onclick="addToCart(${product.id})">Add to Cart 🛒</button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function addToCart(productId) {
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      const product = data.products.find(p => p.id === productId);
      if (!product) return alert("Product not found");

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if product already exists
      const exists = cart.find(p => p.id === product.id);
      if (exists) {
        alert("Product already in cart");
        return;
      }

      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`✅ ${product.name} added to cart`);
    });
}

loadProducts();
