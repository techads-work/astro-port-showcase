import { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars
    const stars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = [];
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        speed: Math.random() * 0.5 + 0.1,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Twinkling effect
        star.opacity += star.speed * (Math.random() > 0.5 ? 1 : -1);
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 191, 255, ${star.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

export default StarBackground;
