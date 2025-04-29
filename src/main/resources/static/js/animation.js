// Grayscale geometric animation
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas to full window size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Draw random shapes
function drawRandomShape() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 100 + 20;
    const rotation = Math.random() * Math.PI * 2;
    const grayValue = Math.floor(Math.random() * 155) + 100; // Light grayscale (100-255)
    
    ctx.fillStyle = 'rgba(${grayValue}, ${grayValue}, ${grayValue}, 0.3)';
    ctx.beginPath();

    // Randomly choose between circle, triangle, or square
    const shapeType = Math.floor(Math.random() * 3);
    switch (shapeType) {
        case 0: // Circle
            ctx.arc(x, y, size / 2, 0, Math.PI * 2);
            break;
        case 1: // Triangle
            ctx.moveTo(x, y);
            ctx.lineTo(x + size, y);
            ctx.lineTo(x + size / 2, y + size);
            break;
        case 2: // Square
            ctx.rect(x, y, size, size);
            break;
    }

    ctx.closePath();
    ctx.fill();
}

// Animate every 500ms
setInterval(drawRandomShape, 500);

// Initial background fill
ctx.fillStyle = '#f8f9fa';
ctx.fillRect(0, 0, canvas.width, canvas.height);