//Create constant ball
const ball = document.getElementById('ball');


//Use a function bounce//
function bounce() {
  ball.style.transform = 'translateY(-100px)';
  setTimeout(() => {
    ball.style.transform = 'translateY(0)';
  }, 500);
}

setInterval(bounce, 1000);
