// ===== Filter players by position =====
const filter = document.getElementById('positionFilter');
const players = document.querySelectorAll('.player-card');

filter.addEventListener('change', () => {
    const value = filter.value;

    players.forEach(player => {
        const positionText = player.querySelector('p:nth-of-type(2)').textContent;
        let position = positionText.split(':')[1]; // split on colon only
        position = position ? position.trim() : ''; // remove extra spaces

        if (value === 'all' || position === value) {
            player.style.display = 'block';
        } else {
            player.style.display = 'none';
        }
    });
});

// ===== Clickable player cards =====
players.forEach(card => {
    card.addEventListener('click', () => {
        const name = card.querySelector('h3').textContent;
        alert(`You clicked on ${name}!`);
    });
});

// ===== Hover effect on cards =====
players.forEach(card => {
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
