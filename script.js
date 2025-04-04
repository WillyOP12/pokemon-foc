function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "WillyOP12" && password === "guillem@12") {
    // Admin
    localStorage.setItem("isAdmin", "true");
    localStorage.setItem("username", username);
    window.location.href = "admin.html";
  } else if (username && password) {
    // Usuari normal
    localStorage.setItem("isAdmin", "false");
    localStorage.setItem("username", username);
    window.location.href = "home.html";
  } else {
    alert("Introdueix usuari i contrasenya!");
  }
}
