// Gestionar l'enviament del formulari de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Obtenir la llista d'usuaris registrats
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Comprovar si el nom d'usuari i la contrasenya són correctes
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Si l'usuari existeix, emmagatzemar l'usuari com a logejat
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", username);
        window.location.href = "home.html"; // Redirigir a la pàgina d'inici
    } else {
        // Si les dades no són correctes, mostrar un error
        alert("Nom d'usuari o contrasenya incorrectes");
    }
});
