import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface HeartProps {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
}

const FloatingHeart: React.FC<HeartProps> = ({ left, animationDuration, size, delay }) => {
  return (
    <div
      className="fixed pointer-events-none z-10"
      style={{
        left: `${left}%`,
        bottom: '-50px',
        animation: `floatUp ${animationDuration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <Heart
        size={size}
        className="text-pink-300 opacity-60 animate-pulse"
        fill="currentColor"
      />
    </div>
  );
};

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<HeartProps[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart: HeartProps = {
        id: Date.now(),
        left: Math.random() * 100,
        animationDuration: 8 + Math.random() * 4,
        size: 16 + Math.random() * 16,
        delay: 0,
      };
      return newHeart;
    };

    // Initial hearts
    const initialHearts = Array.from({ length: 15 }, () => ({
      ...createHeart(),
      delay: Math.random() * 8,
    }));
    setHearts(initialHearts);

    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts(current => {
        const newHeart = createHeart();
        return [...current.slice(-14), newHeart];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
      {hearts.map((heart) => (
        <FloatingHeart key={heart.id} {...heart} />
      ))}
    </>
  );
};

export default FloatingHearts;