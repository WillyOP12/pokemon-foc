// Configurar l'emmagatzematge dels usuaris
let users = JSON.parse(localStorage.getItem("users")) || [];

// Gestionar l'enviament del formulari de registre
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;

    // Comprovar que el nom d'usuari no estigui ja registrat
    if (users.some(user => user.username === username)) {
        alert("Aquest nom d'usuari ja existeix!");
    } else {
        // Afegir l'usuari a la llista
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users)); // Guardar la llista a localStorage

        alert("Registre completat amb èxit!");
        window.location.href = "login.html"; // Redirigir a la pàgina de login
    }
});
