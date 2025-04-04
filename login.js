// Configurar les credencials
const validUser = {
    username: "willyOP12", // Nom d'usuari
    password: "password123" // Contrasenya
};

// Gestionar l'enviament del formulari de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtenir les valors dels camps del formulari
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validar les dades d'usuari
    if (username === validUser.username && password === validUser.password) {
        // Si les dades són correctes, emmagatzemar l'usuari com a "logejat"
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", username); // Opcional: emmagatzemar el nom d'usuari
        window.location.href = "home.html"; // Redirigir a la pàgina principal
    } else {
        // Si les dades no són correctes, mostrar un error
        alert("Nom d'usuari o contrasenya incorrectes");
    }
});
