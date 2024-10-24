import React, { useState } from "react";
import "./RotatingCircle.css"; // 引入 CSS 文件

const RotatingCircle = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className='ratating-container'>
      <div className={`clock`}>
        <div className={`minute-hand ${isVisible ? "active" : ""}`}>
          <div className='minute-dot'>
            Snazzy cockpit features mood lighting and tablet like infotainment
            screen, but the heat from the engine can make occupants
            uncomfortable. PHOTO: sgCarMart
          </div>
        </div>
        <div className={`hour-hand ${isVisible ? "active" : ""}`}></div>
      </div>
    </div>
  );
};

export default RotatingCircle;
