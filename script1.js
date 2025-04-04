// Exemple de col·lecció de cartes
const collection = [
    { name: "Pikachu", rarity: "Common", image: "https://link-to-image.com/pikachu.jpg" },
    { name: "Charizard", rarity: "Rare", image: "https://link-to-image.com/charizard.jpg" },
    { name: "Bulbasaur", rarity: "Common", image: "https://link-to-image.com/bulbasaur.jpg" },
    // Afegir més cartes aquí...
];

// Funció per mostrar les cartes en la taula
function showCollection() {
    const collectionBody = document.getElementById("collectionBody");
    collectionBody.innerHTML = ""; // Neteja la taula

    collection.forEach(card => {
        const row = document.createElement("tr");

        const imgCell = document.createElement("td");
        const img = document.createElement("img");
        img.src = card.image;
        img.alt = card.name;
        img.style.width = "50px";  // Ajustar mida de la imatge
        imgCell.appendChild(img);

        const nameCell = document.createElement("td");
        nameCell.textContent = card.name;

        const rarityCell = document.createElement("td");
        rarityCell.textContent = card.rarity;

        const actionsCell = document.createElement("td");
        // Afegir accions per editar o eliminar cartes si és necessari
        actionsCell.innerHTML = `<button class="editBtn">Editar</button><button class="deleteBtn">Eliminar</button>`;

        row.appendChild(imgCell);
        row.appendChild(nameCell);
        row.appendChild(rarityCell);
        row.appendChild(actionsCell);

        collectionBody.appendChild(row);
    });
}

// Crida la funció per mostrar les cartes en iniciar
showCollection();
