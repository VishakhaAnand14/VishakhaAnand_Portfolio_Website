import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

const COLORS = [
  "168, 85, 247",   // purple
  "236, 72, 153",   // pink
  "34, 211, 238",   // cyan
  "251, 146, 60",   // orange
];

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      initParticles();
    };

    const initParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 6000);
      const particles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: Math.random() * 0.5 + 0.1,
        });
      }
      particlesRef.current = particles;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY + window.scrollY,
      };
    };

    const handleScroll = () => {
      // Update canvas height if page grows
      const docHeight = document.documentElement.scrollHeight;
      if (canvas.height !== docHeight) {
        canvas.height = docHeight;
      }
    };

    const connectParticles = (particles: Particle[]) => {
      const maxDist = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;
      const interactionRadius = 150;

      const particles = particlesRef.current;

      for (const p of particles) {
        // Drift motion
        p.x += p.vx;
        p.y += p.vy;

        // Soft boundary wrap
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Cursor interaction — push particles away & glow
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let drawAlpha = p.alpha;
        let drawRadius = p.radius;

        if (dist < interactionRadius) {
          const force = (interactionRadius - dist) / interactionRadius;
          // Push away from cursor
          p.x -= dx * force * 0.04;
          p.y -= dy * force * 0.04;
          // Glow effect near cursor
          drawAlpha = Math.min(p.alpha + force * 0.6, 1);
          drawRadius = p.radius + force * 3;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, drawRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${drawAlpha})`;
        ctx.fill();

        // Glow
        if (drawAlpha > 0.3) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, drawRadius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${drawAlpha * 0.15})`;
          ctx.fill();
        }
      }

      // Draw connecting lines between nearby particles
      // Limit to visible viewport for performance
      const scrollY = window.scrollY;
      const viewTop = scrollY - 50;
      const viewBottom = scrollY + window.innerHeight + 50;
      const visibleParticles = particles.filter(
        (p) => p.y > viewTop && p.y < viewBottom
      );
      connectParticles(visibleParticles);

      animFrameRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    animFrameRef.current = requestAnimationFrame(animate);

    // Observe body size changes to resize canvas
    const observer = new ResizeObserver(() => {
      const docHeight = document.documentElement.scrollHeight;
      if (canvas.height !== docHeight) {
        canvas.height = docHeight;
      }
    });
    observer.observe(document.body);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animFrameRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
    />
  );
};

export default ParticleBackground;
