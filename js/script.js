const canvas = document.getElementById("space-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
let shootingStars = [];
let mouseX = 0;
let mouseY = 0;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

class Star {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 1.5;
        this.speed = Math.random() * 0.3 + 0.05;
        this.depth = Math.random() * 2;
    }

    update() {
        this.y += this.speed;

        if (this.y > canvas.height) {
            this.reset();
            this.y = 0;
        }

        // Parallax effect
        this.x += (mouseX - canvas.width / 2) * 0.00002 * this.depth;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    }
}

class ShootingStar {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.len = Math.random() * 80 + 50;
        this.speed = Math.random() * 8 + 6;
        this.angle = Math.PI / 4;
        this.opacity = 1;
    }

    update() {
        this.x += this.speed;
        this.y += this.speed;
        this.opacity -= 0.01;
    }

    draw() {
        ctx.strokeStyle = `rgba(255,255,255,${this.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
            this.x - this.len * Math.cos(this.angle),
            this.y - this.len * Math.sin(this.angle)
        );
        ctx.stroke();
    }
}

for (let i = 0; i < 400; i++) {
    stars.push(new Star());
}

function animate() {
    ctx.fillStyle = "rgba(0, 0, 20, 0.8)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        star.update();
        star.draw();
    });

    shootingStars.forEach((star, index) => {
        star.update();
        star.draw();
        if (star.opacity <= 0) {
            shootingStars.splice(index, 1);
        }
    });

    if (Math.random() < 0.003) {
        shootingStars.push(new ShootingStar());
    }

    requestAnimationFrame(animate);
}

animate();