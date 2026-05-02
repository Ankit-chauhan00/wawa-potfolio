import { useEffect, useState } from "react";

export const Cursor = ({ 
  size = 8, 
  outerSize = 30, 
  color = "indigo-500",
  delay = 0.1,
  opacity = 0.7
}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [delayedPos, setDelayedPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationId;
    
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    // Delayed cursor following effect
    const updateDelayedPos = () => {
      setDelayedPos((prevPos) => ({
        x: prevPos.x + (pos.x - prevPos.x) * delay,
        y: prevPos.y + (pos.y - prevPos.y) * delay,
      }));
      animationId = requestAnimationFrame(updateDelayedPos);
    };

    animationId = requestAnimationFrame(updateDelayedPos);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(animationId);
    };
  }, [pos, delay]);

  return (
    <>
      {/* Outer ring (delayed) */}
      <div
        className={`fixed top-0 left-0 rounded-full border-2 border-${color} pointer-events-none z-50`}
        style={{
          width: `${outerSize}px`,
          height: `${outerSize}px`,
          transform: `translate(${delayedPos.x - outerSize / 2}px, ${delayedPos.y - outerSize / 2}px)`,
          transition: "opacity 0.3s ease",
          opacity: opacity,
        }}
      />

      {/* Inner dot (follows immediately) */}
      <div
        className={`fixed top-0 left-0 rounded-full bg-${color} pointer-events-none z-50`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`,
          boxShadow: `0 0 10px rgba(99, 102, 241, ${opacity})`,
        }}
      />
    </>
  );
};