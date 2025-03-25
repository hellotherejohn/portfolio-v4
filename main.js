document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.shuffle-link');

  links.forEach(link => {
    const text = link.textContent;
    link.innerHTML = '';
    let isShuffled = false;

    // Wrap each character in a span, preserving spaces
    for (let char of text) {
      if (char === ' ') {
        link.appendChild(document.createTextNode(' '));
      } else {
        const span = document.createElement('span');
        span.textContent = char;
        link.appendChild(span);
      }
    }

    function shuffleChars() {
      const chars = link.querySelectorAll('span');
      chars.forEach(char => {
        const randomX = (Math.random() - 0.5) * 2;
        const randomY = (Math.random() - 0.5) * 8;
        const randomRotation = (Math.random() - 0.5) * 30;
        char.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
      });
    }

    link.addEventListener('mouseenter', () => {
      if (!isShuffled) {
        shuffleChars();
        isShuffled = true;
      }
    });

    link.addEventListener('mouseleave', () => {
      const chars = link.querySelectorAll('span');
      chars.forEach(char => {
        char.style.transform = 'none';
      });
      isShuffled = false;
    });
  });
});