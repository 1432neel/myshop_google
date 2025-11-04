# 🛍️ MyShop – Google Login + Cart + Wishlist (Frontend Project)

This project is a **modern shopping web application frontend** built using **HTML, CSS (Tailwind CSS), and JavaScript**.  
It includes all key e-commerce features such as **Google Login (frontend only)**, **Add to Cart**, and **Wishlist Management** — implemented with a clean, responsive, and professional UI.

---

## 🚀 Features Implemented

### 🔐 Google Login (Frontend Only)
- Integrated using the **Google Identity Services SDK**.  
- Displays user **name and profile image** after successful login.  
- Session is stored in **localStorage**, enabling auto-login on page refresh.  
- Logout option available, clearing only user session data (cart/wishlist remain saved).  

> 📝 **Note:**  
> To test the Google Login feature, replace  
> `"YOUR_GOOGLE_CLIENT_ID"` in `js/auth.js` with your own valid Google Client ID.

---

### 🛒 Cart Functionality
- Add products to the cart directly from the home page.  
- Automatically increases **quantity** if the same product is added again.  
- Displays **live cart count** in the header.  
- Cart persists in **localStorage** across sessions.  
- Allows **increase/decrease quantity**, **remove items**, and shows **dynamic total**.

---

### 💖 Wishlist Module
- Add or remove items from the wishlist.  
- Shows **wishlist count** in the header in real-time.  
- Items persist in **localStorage**.  
- Can directly **move wishlist items to cart** with one click.  

---

## 🧠 Tech Stack
- **HTML5**  
- **Tailwind CSS**  
- **JavaScript (ES6)**  
- **Google OAuth API (Frontend Only)**  

---

## 📂 Project Structure
```
myshop_google/
│
├── img/                # Product and UI images
│
├── js/
│   ├── auth.js         # Google Login logic (replace your Client ID here)
│   ├── main.js         # Core logic for products, cart, and wishlist
│   ├── shared.js       # Shared helper functions and header updates
│   ├── toast.js        # Toast notifications
│
├── index.html          # Home page
├── cart.html           # Cart page
├── wishlist.html       # Wishlist page
└── README.md           # Documentation file
```

---

## 🧩 How to Run Locally

1. **Download or Clone** this repository:
   ```bash
   git clone https://github.com/1432neel/myshop_google.git
   ```

2. Open the folder and locate `js/auth.js`.  
   Replace:
   ```js
   const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID_HERE";
   ```
   with your own Google OAuth client ID.

3. Run the project using any local server environment, such as:
   - **XAMPP**, or  
   - **VS Code Live Server**, or  
   - **Any web server setup**

4. Open `index.html` in your browser.

---

## ✅ Project Status
✅ All features have been implemented and tested successfully:
- Google Login (Frontend)
- Cart Management
- Wishlist Module
- Responsive UI  

This is the **final working submission**.

---

## 👨‍💻 Developer
**Name:** Neelkanth Pandurang Jadhav  
**Role:** Senior Software Engineer  
**Experience:** 7.5+ Years in Web Development  
**Expertise:** Core PHP, CodeIgniter, WordPress, JavaScript, API Integration, Accessibility, and Secure Web Applications  

---

⭐ *If you find this project useful or well-structured, please consider giving it a ⭐ on GitHub!*