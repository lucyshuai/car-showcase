import React, { useEffect, useRef, useState } from "react";

const AnimatedBox = ({ children }) => {
  const boxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  // 使用 Render Props 方式将 isVisible 和 boxRef 返回给父组件
  return children({ isVisible, ref: boxRef });
};

export default AnimatedBox;
