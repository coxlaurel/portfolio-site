'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const size = 700;
  const circle = useRef<HTMLDivElement | null>(null);

  const moveCircle = (x: number, y: number) => {
    gsap.set(circle.current, {
      x,
      y,
    });
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    moveCircle(clientX, clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    return () => window.removeEventListener('mousemove', manageMouseMove);
  }, []);

  return (
    <div
      ref={circle}
      style={{
        backgroundImage: 'radial-gradient(circle, rgb(214, 255, 121, 0.8) 0%, rgb(214, 255, 121, 0) 70%',
        width: size,
        height: size,
        position: 'fixed',
        top: 0,
        left: 0,
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    />
  );
}