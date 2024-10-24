import React, { useEffect, useRef, useState } from "react";
import "./ImgAnimation.css";

export default function ImgAnimation({ imageUrl, isVisible }) {
  const [isExpanded, setIsExpanded] = useState(isVisible);
  // 动画在组件加载后自动开始
  useEffect(() => {
    setIsExpanded(isVisible);
  }, [isVisible]);

  return (
    <div className={`img-animation-container ${isExpanded ? "expanded" : ""}`}>
      <img
        src={imageUrl}
        alt='Animated'
        className={`expandable-image ${isVisible ? "show" : ""}`}
      />
    </div>
  );
}
