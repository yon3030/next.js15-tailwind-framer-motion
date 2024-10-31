import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    let momentum = 0;
    let lastTime = performance.now();
    let rafId: number | null = null;

    const MOMENTUM_MULTIPLIER = 0.5;
    const FRICTION = 0.95;
    const MIN_MOMENTUM = 0.1;
    const MAX_MOMENTUM = 20;

    const update = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 16;
      lastTime = currentTime;

      if (Math.abs(momentum) > MIN_MOMENTUM) {
        momentum *= FRICTION;
        const movement = momentum * deltaTime;
        window.scrollBy(0, movement);
        rafId = requestAnimationFrame(update);
      } else {
        momentum = 0;
        rafId = null;  // Reset rafId when animation stops
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Cancel existing animation if any
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }

      const wheelDelta = e.deltaY;
      momentum = Math.max(
        Math.min(
          momentum + (wheelDelta * MOMENTUM_MULTIPLIER),
          MAX_MOMENTUM
        ),
        -MAX_MOMENTUM
      );

      // Start new animation
      if (!rafId) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(update);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
}