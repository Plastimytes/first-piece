const ball = document.getElementById('ball');

function bounce() {
  ball.style.transform = 'translateY(-100px)';
  setTimeout(() => {
    ball.style.transform = 'translateY(0)';
  }, 500);
}

setInterval(bounce, 1000);
