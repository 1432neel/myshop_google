function showToast(msg, color = "#2563eb") {
  Toastify({
    text: msg,
    duration: 2000,
    gravity: "top",
    position: "right",
    backgroundColor: color
  }).showToast();
}
