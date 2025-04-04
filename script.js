document.getElementById("loginBtn").addEventListener("click", login);

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "WillyOP12" && pass === "guillem@12") {
    localStorage.setItem("isAdmin", "true");
    localStorage.setItem("username", user);
    window.location.href = "admin.html";
  } else if (user && pass) {
    localStorage.setItem("isAdmin", "false");
    localStorage.setItem("username", user);
    window.location.href = "home.html";
  } else {
    alert("Falten dades!");
  }
}
