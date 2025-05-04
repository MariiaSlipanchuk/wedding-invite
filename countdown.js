const weddingDate = new Date("2025-09-20T14:30:00");
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const timeLeft = weddingDate - now;

  if (timeLeft <= 0) {
    countdown.innerHTML = "Весілля вже розпочалося!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  countdown.innerHTML = ${days} днів ${hours} год ${minutes} хв ${seconds} сек;
}

updateCountdown();
setInterval(updateCountdown, 1000);
