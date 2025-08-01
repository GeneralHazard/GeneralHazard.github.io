const correctOrder = [1, 8, 7];
let currentStep = 0;

const grid = document.getElementById('puzzle-grid');
const surprise = document.getElementById('surprise');

// Create 9 buttons
for (let i = 1; i <= 9; i++) {
  const btn = document.createElement('button');
  btn.classList.add('tile');
  btn.innerText = '❤️';
  btn.dataset.index = i;

  btn.addEventListener('click', () => handleClick(i, btn));
  grid.appendChild(btn);
}

function handleClick(index, btn) {
  if (index === correctOrder[currentStep]) {
    btn.style.backgroundColor = '#ffb6c1';
    currentStep++;
    if (currentStep === correctOrder.length) {
      showSurprise();
    }
  } else {
    resetGame();
  }
}

function showSurprise() {
  // Stop and remove background music
  const music = document.getElementById('bg-music');
  if (music) {
    music.pause();
    music.currentTime = 0;
    music.remove(); // Optional: removes it from the DOM
  }

  // Show the surprise
  grid.style.display = 'none';
  surprise.classList.remove('hidden');
  document.getElementById('falling-hearts').classList.remove('hidden');
  startFallingHearts();
}

function resetGame() {
  alert('Cube Lagi Sayang❤️');
  currentStep = 0;
  const buttons = document.querySelectorAll('.tile');
  buttons.forEach(btn => btn.style.backgroundColor = '#fff0f5');
}

// Heart animation
function startFallingHearts() {
  const container = document.getElementById('falling-hearts');

  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 2) + 's';
    heart.style.fontSize = (1 + Math.random() * 2) + 'em';
    heart.style.animationDelay = Math.random() + 's';

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 300);
}