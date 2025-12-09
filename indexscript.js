// ===== Hover effect for Top Players and Highlights =====
const playerCards = document.querySelectorAll('.player-card');
const highlightCards = document.querySelectorAll('.highlight-card');

function addHoverEffect(cards) {
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = '0.3s';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        });
    });
}

addHoverEffect(playerCards);
addHoverEffect(highlightCards);

// ===== Clickable player cards =====
playerCards.forEach(card => {
    card.addEventListener('click', () => {
        const name = card.querySelector('h3').textContent;
        alert(`You clicked on ${name}!`);
    });
});

// ===== Clickable highlight cards =====
highlightCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        alert(`You clicked on highlight: "${title}"`);
    });
});
