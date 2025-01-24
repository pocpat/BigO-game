// components/StarSky.jsx
import  { useEffect, useRef } from 'react';
import '../src/starsky.css';

const StarSky = () => {
  const nightSkyRef = useRef(null);

  useEffect(() => {
    const createStars = () => {
      const numStars = 100;
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.floor(Math.random() * 5) + 3;
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        if (nightSkyRef.current) {
          nightSkyRef.current.appendChild(star);
        }
      }
    };

    createStars();

  }, []);

  return <div className="night-sky" ref={nightSkyRef}></div>;
};

export default StarSky;