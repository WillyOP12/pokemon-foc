document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        if (username === "WillyOP12" && password === "guillem@12") {
          localStorage.setItem("isAdmin", true);
        } else {
          localStorage.setItem("isAdmin", false);
        }
  
        localStorage.setItem("user", username);
        window.location.href = "home.html";
      });
    }
  
    if (document.getElementById("progress")) {
      const cards = JSON.parse(localStorage.getItem("cards") || "[]");
      const total = 100; // total cartes de la col·lecció
      const progress = Math.floor((cards.length / total) * 100);
      document.getElementById("progress").innerText = `Progrés: ${progress}%`;
  
      const container = document.getElementById("cardContainer");
      cards.forEach(card => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerText = card;
        container.appendChild(div);
      });
    }
  });
  
  function openPack() {
    const cards = JSON.parse(localStorage.getItem("cards") || "[]");
    for (let i = 0; i < 10; i++) {
      const newCard = `Pokémon #${Math.floor(Math.random() * 100 + 1)}`;
      cards.push(newCard);
    }
    localStorage.setItem("cards", JSON.stringify(cards));
    window.location.reload();
  }
  