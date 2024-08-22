// script.js

let points = 0;

// Add event listeners to all Justin placeholders
document.querySelectorAll('.justin').forEach(justin => {
    justin.addEventListener('click', () => {
        points += 10;
        document.getElementById('points').innerText = `Points: ${points}`;
    });
});

document.addEventListener('mousemove', function(e) {
    let bubbleTrail = document.getElementById('bubble-trail');
    let bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = `${e.clientX}px`;
    bubble.style.top = `${e.clientY}px`;

    bubbleTrail.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 3000); // Removes the bubble after 3 seconds
});
