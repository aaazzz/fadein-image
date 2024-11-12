import React, { useEffect, useRef, useState } from 'react';
import './style.css';

const FadeComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            observer.unobserve(ref.current);
          }, 500); // magic number!
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`fade-component ${isVisible ? 'fade-in' : ''}`}>
      {children}
    </div>
  );
};

export default FadeComponent;
