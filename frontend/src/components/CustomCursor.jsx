import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const idCounter = useRef(0);
  const lastSparkleTime = useRef(0);
  const location = useLocation();

  // Route change hote hi hovering reset karo
  useEffect(() => {
    setHovering(false);
  }, [location.pathname]);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractive = el && el.closest("a, button");
      setHovering(!!isInteractive);

      const now = Date.now();
      if (now - lastSparkleTime.current > 50) {
        lastSparkleTime.current = now;

        idCounter.current += 1;
        const newSparkle = {
          id: idCounter.current,
          x: e.clientX,
          y: e.clientY,
        };

        setSparkles((prev) => [...prev, newSparkle].slice(-15));

        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
        }, 600);
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ left: sparkle.x, top: sparkle.y }}
            className="pointer-events-none fixed z-[9998] hidden md:block -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_2px_rgba(34,211,238,.8)]" />
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: hovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      >
        <div className="w-8 h-8 rounded-full border-2 border-cyan-400 shadow-[0_0_20px_5px_rgba(34,211,238,.4)]" />
      </motion.div>

      <div
        style={{ transform: `translate(${position.x - 3}px, ${position.y - 3}px)` }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
      </div>
    </>
  );
};

export default CustomCursor;