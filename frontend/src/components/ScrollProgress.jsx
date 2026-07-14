import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scroll =
        window.scrollY /
        (document.body.scrollHeight - window.innerHeight);

      setWidth(scroll * 100);
    };

    window.addEventListener("scroll", updateProgress);

    return () =>
      window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-cyan-400 z-[9999]"
      style={{
        width: `${width}%`,
      }}
    />
  );
};

export default ScrollProgress;