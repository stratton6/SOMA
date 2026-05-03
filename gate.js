// gate.js — password gate logic

const CORRECT_PASSWORD = 'zuriihh';

document.getElementById('pwd').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') unlock();
});

function unlock() {
  const input = document.getElementById('pwd');
  const errEl = document.getElementById('err');
  const card  = document.getElementById('card');

  const value = input.value.trim();

  if (value === CORRECT_PASSWORD) {
    // Fade out and navigate
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    card.style.opacity = '0';
    card.style.transform = 'translateY(-20px) scale(0.97)';
    setTimeout(() => {
      window.location.href = 'letter.html';
    }, 650);
  } else {
    // Wrong password — shake, show error, clear
    errEl.textContent = 'not quite right... try again 🌸';
    input.value = '';
    input.focus();

    // Shake the card
    card.classList.remove('shake');
    void card.offsetWidth; // reflow to restart animation
    card.classList.add('shake');

    // Clear error after 3 seconds
    setTimeout(() => {
      errEl.textContent = '';
    }, 3000);
  }
}