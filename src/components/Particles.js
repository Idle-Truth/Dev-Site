import { useEffect, useRef } from "react";
import "./Particles.css";

const Particles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray = [];
        const colors = ["#ff0000", "#ff7300", "#ffbf00", "#ff8000"];

        class Particle {
            constructor(x, y, size, color, speedX, speedY) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.color = color;
                this.speedX = speedX;
                this.speedY = speedY;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.02;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        function initParticles() {
            particlesArray = [];
            for (let i = 0; i < 50; i++) {
                let size = Math.random() * 5 + 1;
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let color = colors[Math.floor(Math.random() * colors.length)];
                let speedX = (Math.random() - 0.5) * 1;
                let speedY = (Math.random() - 0.5) * 1;
                particlesArray.push(new Particle(x, y, size, color, speedX, speedY));
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach((particle, index) => {
                particle.update();
                particle.draw();
                if (particle.size <= 0.2) {
                    particlesArray.splice(index, 1);
                    particlesArray.push(new Particle(
                        Math.random() * canvas.width,
                        Math.random() * canvas.height,
                        Math.random() * 5 + 1,
                        colors[Math.floor(Math.random() * colors.length)],
                        (Math.random() - 0.5) * 1,
                        (Math.random() - 0.5) * 1
                    ));
                }
            });
            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        });

    }, []);

    return <canvas ref={canvasRef} className="particles-canvas"></canvas>;
};

export default Particles;
