import { useRef, useEffect } from "react";

const Draw = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const stars = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate stars
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 1.5 + 0.5;

      stars.push({ x, y, radius });
    }

    starsRef.current = stars;

    // Draw stars
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      });
    };

    // Update stars position and animate
    const updateStars = () => {
      stars.forEach((star) => {
        star.x -= 0.5;
        star.y += 0.5;

        if (star.x < -star.radius) {
          star.x = canvas.width + star.radius;
        }
        if (star.y > canvas.height + star.radius) {
          star.y = -star.radius;
        }
      });
    };

    // Animation loop
    const animate = () => {
      drawStars();
      updateStars();
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0 }}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default Draw;
