// Get canvas context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Helper functions
function Circle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
}

function Rectangle(x, y, w, h) {
    ctx.strokeRect(x, y, w, h);
}

function Line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function Triangle(x1, y1, x2, y2, x3, y3) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.stroke();
}


Rectangle(80, 120, 80, 60);
Circle(100, 100, 50);
Triangle(100, 100, 50, 50, 150, 150);


