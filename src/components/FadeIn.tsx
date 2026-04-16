import React, { useEffect, useRef, useState } from "react";

const FadeIn = ({ children, delay = 0 }: any) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<any>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible(true);
            }, delay * 1000);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (domRef.current) observer.observe(domRef.current);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;