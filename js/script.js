document.addEventListener("DOMContentLoaded", function () {

    // ========================
    // ELEMENTOS
    // ========================

    const hoverSound = document.getElementById("hover-sound");
    const clickSound = document.getElementById("click-sound");
    const bgMusic = document.getElementById("bg-music");
    const soundToggle = document.getElementById("sound-toggle");

    if (hoverSound) hoverSound.volume = 0.3;
    if (clickSound) clickSound.volume = 0.5;

    if (bgMusic) {
        bgMusic.volume = 0.2;
        bgMusic.loop = true;
    }

    // ========================
    // CONFIGURACIÓN INICIAL
    // ========================

    if (localStorage.getItem("soundEnabled") === null) {
        localStorage.setItem("soundEnabled", "false");
    }

    let soundEnabled = localStorage.getItem("soundEnabled") === "true";

    // Restaurar tiempo
    if (bgMusic) {
        const savedTime = localStorage.getItem("bgMusicTime");
        if (savedTime) {
            bgMusic.currentTime = parseFloat(savedTime);
        }
    }

    // ========================
    // RESTAURAR ESTADO ENTRE PÁGINAS
    // ========================

    if (bgMusic && soundEnabled) {
        bgMusic.play().then(() => {
            if (soundToggle) soundToggle.textContent = "🔊";
        }).catch(() => {
            // Si el navegador bloquea autoplay,
            // se activará cuando el usuario haga cualquier click
        });
    } else {
        if (soundToggle) soundToggle.textContent = "🔇";
    }

    // ========================
    // BOTÓN SONIDO
    // ========================

    if (soundToggle && bgMusic) {
        soundToggle.addEventListener("click", function () {

            soundEnabled = !soundEnabled;
            localStorage.setItem("soundEnabled", soundEnabled);

            if (soundEnabled) {
                bgMusic.play().then(() => {
                    soundToggle.textContent = "🔊";
                }).catch(err => {
                    console.log("Error al reproducir:", err);
                });
            } else {
                bgMusic.pause();
                soundToggle.textContent = "🔇";
            }
        });
    }

    // ========================
    // GUARDAR TIEMPO CONTINUAMENTE
    // ========================

    if (bgMusic) {
        setInterval(() => {
            if (!bgMusic.paused) {
                localStorage.setItem("bgMusicTime", bgMusic.currentTime);
            }
        }, 1000);
    }

    // ========================
    // SONIDOS INTERACTIVOS
    // ========================

    function playHover() {
        if (!hoverSound) return;
        hoverSound.currentTime = 0;
        hoverSound.play();
    }

    function playClick() {
        if (!clickSound) return;
        clickSound.currentTime = 0;
        clickSound.play();
    }

    document.querySelectorAll(".planet, .star-item").forEach(el => {
        el.addEventListener("mouseenter", playHover);
    });

    document.querySelectorAll(".planet, .back-btn").forEach(el => {
        el.addEventListener("click", function (e) {

            if (!this.href) return;

            const link = this.href;
            e.preventDefault();

            playClick();

            if (bgMusic && !bgMusic.paused) {
                localStorage.setItem("bgMusicTime", bgMusic.currentTime);
            }

            setTimeout(() => {
                window.location.href = link;
            }, 120);
        });
    });

    // ========================
    // CANVAS ESPACIAL
    // ========================

    const canvas = document.getElementById("space-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    let shootingStars = [];
    let mouseX = 0;

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
    });

    class Star {
        constructor() { this.reset(); }

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

});

function goSim() {

    // sonido click
    const click = document.getElementById("click-sound");
    if (click) click.play();

    // redirección
    setTimeout(() => {
        window.location.href = "simulacion/login.html"; // 👉 tu simulación
    }, 200);
}