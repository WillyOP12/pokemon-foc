// Emmagatzemar les cartes (de manera local per a demostració)
let collection = JSON.parse(localStorage.getItem('collection')) || [];

// Funció per afegir una nova carta
function addNewCard(event) {
    event.preventDefault();

    const cardName = document.getElementById('cardName').value;
    const cardRarity = document.getElementById('cardRarity').value;
    const cardImageInput = document.getElementById('cardImage');
    const cardImageFile = cardImageInput.files[0];

    // Comprovar si s'ha seleccionat una imatge
    if (!cardImageFile) {
        alert("Has de seleccionar una imatge per la carta.");
        return;
    }

    // Utilitzar FileReader per obtenir una URL temporal de la imatge
    const reader = new FileReader();

    reader.onloadend = function () {
        const card = {
            name: cardName,
            rarity: cardRarity,
            image: reader.result,  // La imatge serà la URL de la imatge carregada
        };

        // Afegir la carta a la col·lecció
        collection.push(card);

        // Actualitzar localStorage
        localStorage.setItem('collection', JSON.stringify(collection));

        // Mostrar les cartes
        showCards();

        // Restablir el formulari
        document.getElementById('addCardForm').reset();
    };

    // Llegir el fitxer d'imatge com a URL
    reader.readAsDataURL(cardImageFile);
}

// Funció per mostrar les cartes de la col·lecció
function showCards() {
    const cardGridContainer = document.getElementById('cardGridContainer');
    cardGridContainer.innerHTML = ""; // Netejar la graella

    collection.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.name}" />
            <p><strong>Nom:</strong> ${card.name}</p>
            <p><strong>Raresa:</strong> ${card.rarity}</p>
        `;
        cardGridContainer.appendChild(cardElement);
    });
}

// Afegir l'esdeveniment per al formulari
document.getElementById('addCardForm').addEventListener('submit', addNewCard);

// Inicialitzar la pàgina
showCards();
