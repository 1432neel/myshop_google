// Load data safely
function loadData(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

// Save data
function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ✅ Update cart and wishlist counts in header
function updateCounts() {
  const cart = loadData('cart');
  const wish = loadData('wishlist');

  // Show only unique item counts
  const cartCountElem = document.getElementById("cartCount");
  const wishCountElem = document.getElementById("wishCount");

  if (cartCountElem) cartCountElem.textContent = cart.length;
  if (wishCountElem) wishCountElem.textContent = wish.length;
}
