// Obtenir les cartes des de localStorage o inicialitzar una col·lecció buida
let collection = JSON.parse(localStorage.getItem('collection')) || [];
let users = JSON.parse(localStorage.getItem('users')) || {}; // Emmagatzemem les col·leccions d'usuaris

// Funció per mostrar la barra de progrés
function updateProgressBar() {
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    // Comprovar el percentatge de la col·lecció
    const percentage = (collection.length / 100) * 100; // Aquí pots ajustar el màxim de la teva col·lecció
    progressBar.value = percentage;
    progressText.textContent = `Tens ${collection.length} cartes a la col·lecció`;
}

// Funció per obrir un sobre
function openPack() {
    const openedCardsContainer = document.getElementById("openedCardsContainer");
    const noCardsMessage = document.getElementById("noCardsMessage");

    // Si la col·lecció té menys de 20 cartes, mostrar un missatge
    if (collection.length < 20) {
        noCardsMessage.textContent = "Encara no hi ha prou cartes per obrir un sobre.";
        return;
    } else {
        noCardsMessage.textContent = "";
    }

    // Seleccionar cartes aleatòries
    const numCardsToOpen = 5; // Obre 5 cartes per sobre
    let openedCards = [];

    for (let i = 0; i < numCardsToOpen; i++) {
        // Seleccionar una carta aleatòria
        const randomIndex = Math.floor(Math.random() * collection.length);
        const card = collection[randomIndex];

        // Afegir la carta obtinguda
        openedCards.push(card);
    }

    // Mostrar les cartes obtingudes
    openedCardsContainer.innerHTML = ''; // Neteja les cartes anteriors
    openedCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.name}" />
            <p>${card.name}</p>
            <p><strong>Raresa:</strong> ${card.rarity}</p>
        `;
        openedCardsContainer.appendChild(cardElement);
    });
}

// Funció per mostrar la col·lecció a la pàgina
function showCollection() {
    const collectionContainer = document.getElementById("collectionContainer");
    collectionContainer.innerHTML = ""; // Neteja la col·lecció existent

    collection.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.name}" />
            <p>${card.name}</p>
            <p><strong>Raresa:</strong> ${card.rarity}</p>
        `;
        collectionContainer.appendChild(cardElement);
    });
}

// Funció per afegir l'opció d'intercanviar cartes
function addTradeOptions() {
    const tradeCardsSelect = document.getElementById("tradeCards");

    // Neteja les opcions existents
    tradeCardsSelect.innerHTML = "";

    // Afegir totes les cartes de la col·lecció a la llista de selecció
    collection.forEach(card => {
        const option = document.createElement("option");
        option.value = card.name;
        option.textContent = card.name;
        tradeCardsSelect.appendChild(option);
    });
}

// Funció per gestionar l'intercanvi de cartes
function handleTrade(event) {
    event.preventDefault();

    const tradeUser = document.getElementById("tradeUser").value;
    const tradeCardsSelect = document.getElementById("tradeCards");
    const selectedCards = Array.from(tradeCardsSelect.selectedOptions).map(option => option.value);
    const tradeMessage = document.getElementById("tradeMessage");

    // Verificar si l'usuari destinatari existeix
    if (!users[tradeUser]) {
        tradeMessage.textContent = "L'usuari destinatari no existeix!";
        return;
    }

    // Obtenir les cartes que l'usuari vol intercanviar
    const cardsToTrade = collection.filter(card => selectedCards.includes(card.name));

    if (cardsToTrade.length === 0) {
        tradeMessage.textContent = "Has de seleccionar alguna carta per intercanviar.";
        return;
    }

    // Eliminar les cartes intercanviades de la col·lecció actual
    collection = collection.filter(card => !selectedCards.includes(card.name));

    // Afegir les cartes a la col·lecció de l'usuari destinatari
    users[tradeUser].collection.push(...cardsToTrade);

    // Actualitzar localStorage amb les noves col·leccions
    localStorage.setItem('collection', JSON.stringify(collection));
    localStorage.setItem('users', JSON.stringify(users));

    tradeMessage.textContent = "Intercanvi realitzat correctament!";
    showCollection();  // Actualitzar la vista de la col·lecció
}

// Inicialització de la pàgina
document.getElementById("openPackBtn").addEventListener("click", openPack);
document.getElementById("tradeForm").addEventListener("submit", handleTrade);

// Actualitzar progrés i mostrar la col·lecció
updateProgressBar();
showCollection();
addTradeOptions();
