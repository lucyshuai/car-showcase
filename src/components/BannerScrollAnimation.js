import React, { useEffect, useState } from "react";
import "./BannerScrollAnimation.css";

/**
 *
 * @param contents //component
 * @param data // component data
 * @param isVisible // animation is visible
 * @param leftIn // left box position
 * @param rightIn // right box position
 * @returns
 */

export default function BannerScrollAnimation({
  contents = undefined,
  data = "",
  isVisible = false,
  leftIn = false,
  rightIn = false,
}) {
  const [isLeftIn, setisLeftIn] = useState(false);
  const [isRightIn, setisRightIn] = useState(false);

  useEffect(() => {
    setisRightIn(rightIn);
    setisLeftIn(leftIn);
  }, [leftIn, rightIn, isVisible]);

  return (
    <>
      {isLeftIn && !contents ? (
        <div
          className={`left-banner-container ${isVisible ? " left-in " : ""}`}
        >
          {data}
        </div>
      ) : isRightIn && !contents ? (
        <div
          className={`right-banner-container ${isVisible ? " right-in " : ""}`}
        >
          {data}
        </div>
      ) : !isRightIn && contents ? (
        <div className={`right-container ${isVisible ? " right-in " : ""}`}>
          {contents}
        </div>
      ) : !isLeftIn && contents ? (
        <div className={`left-container ${isVisible ? " left-in " : ""}`}>
          {contents}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
