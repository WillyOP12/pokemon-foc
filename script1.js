// Obtenir les cartes des de localStorage o inicialitzar una col·lecció buida
let collection = JSON.parse(localStorage.getItem('collection')) || [];

// Funció per mostrar les cartes en la taula
function showCollection() {
    const collectionBody = document.getElementById("collectionBody");
    collectionBody.innerHTML = ""; // Neteja la taula

    // Si no hi ha prou cartes, mostrar el missatge
    if (collection.length === 0) {
        const noCardsMessage = document.createElement('tr');
        noCardsMessage.innerHTML = `<td colspan="4">Encara no hi ha cartes a la col·lecció.</td>`;
        collectionBody.appendChild(noCardsMessage);
    } else {
        // Mostrar les cartes en la taula
        collection.forEach((card, index) => {
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
            actionsCell.innerHTML = `<button class="deleteBtn" onclick="deleteCard(${index})">Eliminar</button>`;

            row.appendChild(imgCell);
            row.appendChild(nameCell);
            row.appendChild(rarityCell);
            row.appendChild(actionsCell);

            collectionBody.appendChild(row);
        });
    }
}

// Funció per afegir una carta
function addCard(event) {
    event.preventDefault(); // Evitar que es recarregui la pàgina

    // Obtenir les dades del formulari
    const cardName = document.getElementById("cardName").value;
    const cardRarity = document.getElementById("cardRarity").value;
    const cardImage = document.getElementById("cardImage").value;

    // Crear la nova carta
    const newCard = {
        name: cardName,
        rarity: cardRarity,
        image: cardImage
    };

    // Afegir la carta a la col·lecció
    collection.push(newCard);

    // Guardar la col·lecció a localStorage
    localStorage.setItem('collection', JSON.stringify(collection));

    // Mostrar les cartes actualitzades
    showCollection();

    // Netejar els camps del formulari
    document.getElementById("addCardForm").reset();
}

// Funció per eliminar una carta
function deleteCard(index) {
    // Eliminar la carta de la col·lecció
    collection.splice(index, 1);

    // Guardar la nova col·lecció a localStorage
    localStorage.setItem('collection', JSON.stringify(collection));

    // Mostrar les cartes actualitzades
    showCollection();
}

// Inicialitzar el formulari d'afegir carta
document.getElementById("addCardForm").addEventListener("submit", addCard);

// Mostrar les cartes en carregar la pàgina
showCollection();
