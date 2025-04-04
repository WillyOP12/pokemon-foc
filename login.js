// Gestionar l'enviament del formulari de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Obtenir la llista d'usuaris registrats
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Comprovar si el nom d'usuari i la contrasenya són correctes
    const user = users.find(user => user.username === username && user.password === password);

    // Comprovació per l'usuari administratiu
    if (username === "WillyOP12" && password === "guillem@12") {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", username);
        localStorage.setItem("isAdmin", "true"); // Afegim aquesta variable per saber si és admin
        window.location.href = "home.html"; // Redirigir a la pàgina d'inici
    } else if (user) {
        // Si l'usuari és vàlid però no és l'admin, permetre l'accés
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", username);
        localStorage.setItem("isAdmin", "false"); // No és administrador
        window.location.href = "home.html"; // Redirigir a la pàgina d'inici
    } else {
        // Si les dades no són correctes, mostrar un error
        alert("Nom d'usuari o contrasenya incorrectes");
    }
});
