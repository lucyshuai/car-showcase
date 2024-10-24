import React, { useState, useEffect } from "react";
import "./ShowUpAnimation.css";

export default function ShowUpAnimation() {
  const [isCircleVisible, setIsCircleVisible] = useState(false);
  const [isCircleFixed, setIsCircleFixed] = useState(false);
  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // 圆形从底部出现
      if (scrollPosition > 100) {
        setIsCircleVisible(true);
      } else {
        setIsCircleVisible(false);
      }

      // 圆形固定在页面中间
      if (
        scrollPosition > windowHeight * 0.5 &&
        scrollPosition < windowHeight * 1.5
      ) {
        setIsCircleFixed(true);
      } else {
        setIsCircleFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className='scroll-animation-container'>
      <div
        className={`grey-circle ${isCircleVisible ? "visible" : ""} ${
          isCircleFixed ? "fixed" : ""
        }`}
      ></div>
    </div>
  );
}
