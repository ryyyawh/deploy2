function toggleSidebar() { 
document.getElementById('sidebar').classList.toggle('show'); 
} 
function copyCode(id) { 
const code = document.getElementById(id).innerText; navigator.clipboard.writeText(code).then(() => alert('Code copied!'));
}
const canvas = document.getElementById('diamondCanvas'); 
const ctx = canvas.getContext('2d'); 
let width, height, diamonds = []; 
function resize() { 
width = canvas.width = window.innerWidth; 
height = canvas.height = window.innerHeight; 
} 
window.addEventListener('resize', resize); 
resize(); for (let i = 0; i < 100; i++) { 
diamonds.push({ x: Math.random() * width, y: Math.random() * height, size: Math.random() * 3 + 1, speed: Math.random() * 2 + 0.5 });
} 
function draw() { 
ctx.clearRect(0, 0, width, height); ctx.fillStyle = '#0ff'; diamonds.forEach(d => { 
ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d.x + d.size, d.y + d.size); ctx.lineTo(d.x, d.y + d.size * 2); ctx.lineTo(d.x - d.size, d.y + d.size); ctx.closePath(); ctx.fill(); d.y += d.speed; if (d.y > height) { d.y = -10; d.x = Math.random() * width;
} 
}); requestAnimationFrame(draw); } draw();

