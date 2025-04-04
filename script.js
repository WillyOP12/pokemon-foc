
// Emmagatzemar les cartes de l'usuari en localStorage
let userCards = JSON.parse(localStorage.getItem('userCards')) || [];

// Funció per mostrar les cartes a la taula de la col·lecció
function showCards() {
    const tableBody = document.querySelector("#cardsCollectionTable tbody");
    tableBody.innerHTML = '';
    userCards.forEach((card, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${card.name}</td>
            <td>${card.rarity}</td>
            <td><img src="${card.image}" alt="Carta" width="100"></td>
            <td><button onclick="removeCard(${index})">Eliminar</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Funció per eliminar una carta
function removeCard(index) {
    userCards.splice(index, 1);
    localStorage.setItem('userCards', JSON.stringify(userCards));
    showCards();
}

// Afegir carta a la col·lecció
document.getElementById('addCardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cardName = document.getElementById('cardName').value;
    const cardRarity = document.getElementById('cardRarity').value;
    const cardImage = document.getElementById('cardImage').value;

    const newCard = {
        name: cardName,
        rarity: cardRarity,
        image: cardImage
    };

    userCards.push(newCard);
    localStorage.setItem('userCards', JSON.stringify(userCards));
    showCards();
});

// Mostrar les cartes quan es carrega la pàgina
showCards();
