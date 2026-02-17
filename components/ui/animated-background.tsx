"use client";

import { useEffect, useRef } from "react";

/**
 * AnimatedBackground Component
 * Canvas animado ligero (< 500KB) que reemplaza el video pesado
 * Crea un efecto de partículas flotantes y líneas conectadas
 */

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    alpha: number;
}

export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationFrameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Configuración responsive
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        // Número de partículas basado en tamaño de pantalla
        const particleCount = window.innerWidth < 768 ? 30 : 60;

        // Inicializar partículas
        const initParticles = () => {
            particlesRef.current = [];
            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    radius: Math.random() * 2 + 1,
                    alpha: Math.random() * 0.5 + 0.2,
                });
            }
        };

        initParticles();

        // Colores Navy → Cyan (usando hex directo)
        const cyanRgb = { r: 189, g: 232, b: 245 };  // #BDE8F5
        const skyRgb = { r: 73, g: 136, b: 196 };    // #4988C4

        // Función de animación
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Actualizar y dibujar partículas
            particlesRef.current.forEach((particle) => {
                // Movimiento
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Rebote en bordes
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                // Dibujar partícula con glow
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);

                // Gradiente radial para efecto glow
                const gradient = ctx.createRadialGradient(
                    particle.x,
                    particle.y,
                    0,
                    particle.x,
                    particle.y,
                    particle.radius * 3
                );
                gradient.addColorStop(
                    0,
                    `rgba(${cyanRgb.r}, ${cyanRgb.g}, ${cyanRgb.b}, ${particle.alpha})`
                );
                gradient.addColorStop(
                    1,
                    `rgba(${cyanRgb.r}, ${cyanRgb.g}, ${cyanRgb.b}, 0)`
                );

                ctx.fillStyle = gradient;
                ctx.fill();
            });

            // Dibujar conexiones entre partículas cercanas
            particlesRef.current.forEach((p1, i) => {
                particlesRef.current.slice(i + 1).forEach((p2) => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Solo conectar si están cerca
                    if (distance < 150) {
                        const opacity = (1 - distance / 150) * 0.3;

                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);

                        // Gradiente de línea (cyan → sky)
                        const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
                        gradient.addColorStop(
                            0,
                            `rgba(${cyanRgb.r}, ${cyanRgb.g}, ${cyanRgb.b}, ${opacity})`
                        );
                        gradient.addColorStop(
                            1,
                            `rgba(${skyRgb.r}, ${skyRgb.g}, ${skyRgb.b}, ${opacity})`
                        );

                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                });
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Resize handler
        const handleResize = () => {
            setCanvasSize();
            initParticles();
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.6 }}
        />
    );
}