// Falling Lines Animation
const canvas = document.getElementById('falling-lines');
const ctx = canvas.getContext('2d');

let width, height, lines;

function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    lines = [];
    
    for (let i = 0; i < 50; i++) {
        lines.push({
            x: Math.random() * width,
            y: Math.random() * height,
            length: Math.random() * 80 + 20,
            speed: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.5 + 0.1
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    
    lines.forEach(line => {
        ctx.globalAlpha = line.opacity;
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.y + line.length);
        ctx.stroke();
        
        line.y += line.speed;
        
        if (line.y > height) {
            line.y = -line.length;
            line.x = Math.random() * width;
        }
    });
    
    requestAnimationFrame(draw);
}

// Reveal Animation on Scroll
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Event Listeners
window.addEventListener('scroll', reveal);
window.addEventListener('resize', init);

// Start
init();
draw();
reveal(); // Initial check
