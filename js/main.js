const products = [
  { id: 1, name: "Denim Shirt", price: 899, img: "img/denim_shirt.jpg" },
  { id: 2, name: "Stylish Sneakers", price: 2499, img: "img/sneakers.jpg" },
  { id: 3, name: "Smart Watch", price: 4999, img: "img/smart_watch.jpg" },
  { id: 4, name: "Leather Backpack", price: 1499, img: "img/leather_backpack.jpg" },
  { id: 5, name: "Wireless Earbuds", price: 1999, img: "img/wirless_earbuds.jpg" },
  { id: 6, name: "Denim Jeans", price: 1299, img: "img/denim_jeans.jpg" },
  { id: 7, name: "Casual T-Shirt", price: 699, img: "img/branded_tshirt.jpg" },
  { id: 8, name: "Analog Wristwatch", price: 1899, img: "img/analog.jpg" }
];

function addToCart(product) {
  const cart = loadData("cart");
  const existing = cart.find(p => p.id === product.id);
  existing ? existing.qty++ : cart.push({ ...product, qty: 1 });
  saveData("cart", cart);
  updateCounts();
  showToast("🛒 Added to cart");
}

function addToWishlist(product) {
  const wish = loadData("wishlist");
  if (!wish.find(p => p.id === product.id)) {
    wish.push(product);
    saveData("wishlist", wish);
    showToast("❤️ Added to wishlist");
  } else {
    showToast("Already in wishlist", "#6b7280");
  }
  updateCounts();
}

function renderProducts() {
  const container = document.getElementById("productContainer");
  container.innerHTML = products
    .map(
      p => `
      <div class="bg-white shadow-sm hover:shadow-md transition rounded-lg flex flex-col p-4 h-full">
        <div class="flex-1 flex flex-col items-center justify-between">
          <div class="w-full h-56 overflow-hidden flex justify-center items-center">
            <img src="${p.img}" alt="${p.name}" class="h-full object-contain">
          </div>
          <div class="mt-3 text-center">
            <h3 class="font-semibold text-lg text-gray-800">${p.name}</h3>
            <p class="text-gray-600 mb-4">₹${p.price}</p>
          </div>
        </div>
        <div class="flex justify-center gap-3 mt-auto">
          <button onclick='addToCart(${JSON.stringify(p)})'
                  class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
          <button onclick='addToWishlist(${JSON.stringify(p)})'
                  class="border px-4 py-2 rounded hover:bg-pink-50 transition">
            ❤️
          </button>
        </div>
      </div>
    `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCounts();
});
