import { useState, useEffect } from 'react';

declare global {
  interface Window {
    prevScrollY: number;
  }
}

export function useScrollVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const SCROLL_THRESHOLD = 5; // minimum scroll difference to trigger change

    const handleScroll = () => {
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        const currentScrollY = window.scrollY;
        const scrollDiff = Math.abs(currentScrollY - (window.prevScrollY || 0));
        
        // Only update if we're at top or have significant scroll difference
        if (currentScrollY === 0 || scrollDiff > SCROLL_THRESHOLD) {
          setIsVisible(currentScrollY === 0 || currentScrollY < window.prevScrollY);
          window.prevScrollY = currentScrollY;
        }
      }, 10); // small delay to prevent rapid updates
    };

    window.prevScrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return isVisible;
}
