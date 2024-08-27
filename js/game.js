const canavs = document.getElementById('playzone');
const ctx = canvas.getContext('2d');

let tankX = canvas.width / 2;
let tankY = canvas.height / 2;

function drawTank(x, y) {
    ctx.fillStyle = 'green';
    ctx.fillRect(x, y, 50, 50);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameloop() {
    clearCanvas();
    drawTank(tankX, tankY);
    requestAnimationFrame(gameloop);
}

//  MOVEMENTS

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            tankY -= tankspeed;
            break;
        case 'ArrowDown':
            tankY -= tankspeed;
            break;
        case 'ArrowLeft':
            tankX -= tankspeed;
            break;
        case 'ArrowRight':
            tankX += tankspeed;
            break;
    }
});

gameloop();