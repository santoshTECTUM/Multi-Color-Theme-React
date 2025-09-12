import React, { useEffect } from "react";
import { useTheme } from "styled-components";

export default function MovingBackground() {
  const theme = useTheme();

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.left = 0;
    canvas.style.top = 64 + "px";
    canvas.style.zIndex = 0;
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    let particles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1 + Math.random() * 3,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);

    const maxDist = 150; // distance to connect particles
    let raf;

    function draw() {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p, i) => {
        // move particle
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        // draw particle
        ctx.beginPath();
        ctx.fillStyle = theme.colors.primary + "45"; // semi-transparent dots
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // connect with other particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            ctx.beginPath();
            // opacity fades with distance
            const opacity = 1 - dist / maxDist;
            ctx.strokeStyle = `${theme.colors.secondary}${Math.floor(
              opacity * 255
            ).toString(16).padStart(2, "0")}`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(p.x, p.y);
            // ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      raf = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.body.removeChild(canvas);
    };
  }, [theme]);

  return null;
}
