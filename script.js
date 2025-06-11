const envelope = document.querySelector('.envelope-wrapper');
const heartsContainer = document.querySelector('.hearts-container');

envelope.addEventListener('click', () => {
  envelope.classList.toggle('flap');

  if (envelope.classList.contains('flap')) {
    createHearts();
  } else {
    heartsContainer.innerHTML = '';
  }
});

function createHearts() {
  heartsContainer.innerHTML = '';
  

  
  for (let i = 0; i < 1000; i++) {
      setTimeout(() => {
          const heart = document.createElement('div');
          heart.classList.add('floating-heart');
          heart.innerHTML = '❤️';
          
          // Posição aleatória na parte inferior
          heart.style.left = `${Math.random() * 100}%`;
          heart.style.bottom = '0';
          
          // Cor aleatória
          heart.style.color = colors[Math.floor(Math.random() * colors.length)];
          
          // Tamanho aleatório
          const size = Math.random() * 20 + 10;
          heart.style.fontSize = `${size}px`;
          
          // Duração e delay aleatórios
          const duration = Math.random() * 5 + 10;
          heart.style.animationDuration = `${duration}s`;
          heart.style.animationDelay = `${Math.random() * 0.5}s`;
          
          heartsContainer.appendChild(heart);
          
          // Remove após animação
          setTimeout(() => {
              heart.remove();
          }, duration * 1000);
      }, i * 200);
  }
}
