<!DOCTYPE html>
<html>
<head>
  <title>Bouncing Ball</title>
  <style>
    #ball {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: blue;
      position: absolute;
      top: 0;
      left: 0;
    }
  </style>
</head>
<body>
  <div id="ball"></div>

  <script>
    const ball = document.getElementById('ball');
    let x = 0;
    let y = 0;
    let dx = 2;
    let dy = 2;

    function animate() {
      x += dx;
      y += dy;

      if (x + 50 > window.innerWidth || x < 0) {
        dx *= -1;
      }

      if (y + 50 > window.innerHeight || y < 0) {
        dy *= -1;
      }

      ball.style.left = x + 'px';
      ball.style.top = y + 'px';

      requestAnimationFrame(animate);
    }

    animate();
  </script>
</body>
</html>
