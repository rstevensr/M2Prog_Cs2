const canvas = document.getElementById("canvasId")
const g = canvas.getContext("2d");


g.beginPath();
g.moveTo(350, 120);
g.lineTo(250, 300);
g.lineTo(450, 300);
g.closePath();
g.fillStyle = "green";
g.fill();

g.beginPath();
g.arc(350, 200, 7, 0, Math.PI * 2);
g.fillStyle = "blue";
g.fill();

g.beginPath();
g.arc(330, 180, 7, 0, Math.PI * 2);
g.fillStyle = "blue";
g.fill();