let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

// rectangle
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, 150, 75);

// circle
ctx.beginPath();
ctx.arc(750, 55, 50, 0, 2 * Math.PI);
ctx.strokeStyle = '#000000';
ctx.stroke();
ctx.fillStyle = '#006600';
ctx.fill();

// triangle
ctx.beginPath();
ctx.moveTo(0, 600);
ctx.lineTo(0, 500);
ctx.lineTo(100, 500);
ctx.closePath();
ctx.fillStyle = '#FFCC00';
ctx.fill();

// square
ctx.fillStyle = 'rgb(200, 0, 0)';
ctx.fillRect(750, 550, 50, 50);
