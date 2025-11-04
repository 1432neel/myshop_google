// ✅ Called by Google on login
function handleCredentialResponse(response) {
  const data = decodeJwtResponse(response.credential);
  const user = {
    name: data.name,
    email: data.email,
    picture: data.picture
  };
  localStorage.setItem("user", JSON.stringify(user));
  renderUser();
  Toastify({ text: "✅ Logged in successfully!", duration: 2000, backgroundColor: "#22c55e" }).showToast();
}

// ✅ Decode Google JWT Token
function decodeJwtResponse(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
  return JSON.parse(jsonPayload);
}

// ✅ Render login/profile section
function renderUser() {
  const userSection = document.getElementById("userSection");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    // Show Google button only on index.html
    if (window.location.pathname.includes("index.html")) {
      userSection.innerHTML = `
        <div id="g_id_onload"
          data-client_id="YOUR_GOOGLE_CLIENT_ID"
          data-callback="handleCredentialResponse">
        </div>
        <div class="g_id_signin" data-type="standard"></div>
      `;
    } else {
      userSection.innerHTML = ""; // No login on cart/wishlist
    }
    return;
  }

  // If logged in → show profile & logout
  userSection.innerHTML = `
    <div class="flex items-center gap-2">
      <img src="${user.picture}" alt="Profile" class="w-8 h-8 rounded-full border">
      <span class="text-gray-700 font-medium">${user.name}</span>
      <button onclick="logout()" class="bg-gray-200 text-sm px-3 py-1 rounded hover:bg-gray-300">Logout</button>
    </div>
  `;
}

// ✅ Logout logic
function logout() {
  localStorage.removeItem("user");
  Toastify({ text: "Logged out", duration: 2000, backgroundColor: "#dc2626" }).showToast();
  setTimeout(() => (window.location = "index.html"), 800);
}

// ✅ Auto-load user info
document.addEventListener("DOMContentLoaded", renderUser);
