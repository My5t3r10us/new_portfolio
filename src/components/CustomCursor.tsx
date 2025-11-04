import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
    <AnimatePresence>
      <motion.div
        key="cursor-dot"
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      />
      <motion.div
        key="cursor-ring"
        className="fixed top-0 left-0 w-8 h-8 border-[2.5px] border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 2.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      />
      {/* <motion.div
        className="fixed top-0 left-0 w-[120px] h-1 bg-white pointer-events-none z-[9998] mix-blend-difference"
        initial={{ opacity: 0 }}
        animate={{
          x: mousePosition.x - 60,
          y: mousePosition.y - 2,
          opacity: isPointer ? 1 : 0,
          scale: isPointer ? 1 : .6,
          rotate: isPointer ? 360 : 0,
        }}
        transition={{
          x: { type: 'spring', stiffness: 350, damping: 22 },
          y: { type: 'spring', stiffness: 350, damping: 22 },
          scale: { type: 'spring', stiffness: 80, damping: 8 },
          opacity: { type: 'tween', duration: 0.2, ease: 'linear' },
          rotate: { 
            duration: 4,
            repeat: Infinity, // boucle infinie
            ease: 'linear'
          }
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-[120px] bg-white pointer-events-none z-[9998] mix-blend-difference"
        initial={{ opacity: 0 }}
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 60,
          opacity: isPointer ? 1 : 0,
          scale: isPointer ? 1 : .6,
          rotate: isPointer ? 360 : 0,
        }}
        transition={{
          x: { type: 'spring', stiffness: 350, damping: 22 },
          y: { type: 'spring', stiffness: 350, damping: 22 },
          scale: { type: 'spring', stiffness: 80, damping: 8 },
          opacity: { type: 'tween', duration: 0.2, ease: 'linear' },
          rotate: { 
            duration: 4,
            repeat: Infinity, // boucle infinie
            ease: 'linear'
          }
        }}
      /> */}
    </AnimatePresence>
    </>
  );
};
