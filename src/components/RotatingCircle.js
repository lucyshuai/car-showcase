import React, { useEffect, useState } from "react";
import "./RotatingCircle.css";
/**
 * 右下方
 * @param isVisible animation
 * @param data  contains
 * @returns
 */
const RightDownBox = ({ isVisible, data }) => {
  return (
    <div>
      <div className={`right-down-minute-hand ${isVisible ? "active" : ""}`}>
        <div className={`minute-dot ${isVisible ? "active" : ""}`}>
          <div className='content-wrapper r-d'>{data}</div>
        </div>
      </div>
      <div
        className={`right-down-hour-hand ${isVisible ? "active" : ""}`}
      ></div>
    </div>
  );
};
/**
 * 右上方
 * @param isVisible animation
 * @param data  contains
 * @returns
 */
const RightUpBox = ({ isVisible, data }) => {
  return (
    <div>
      <div className={`right-up-minute-hand ${isVisible ? "active" : ""}`}>
        <div className={`minute-dot ${isVisible ? "active" : ""}`}>
          <div className='content-wrapper r-u'>{data}</div>
        </div>
      </div>
      <div className={`right-up-hour-hand ${isVisible ? "active" : ""}`}></div>
    </div>
  );
};
/**
 * 左上方
 * @param isVisible animation
 * @param data  contains
 * @returns
 */
const LeftUpBox = ({ isVisible, data }) => {
  return (
    <div>
      <div className={`left-up-minute-hand ${isVisible ? "active" : ""}`}>
        <div className={`minute-dot ${isVisible ? "active" : ""}`}>
          <div className='content-wrapper l-u'>{data}</div>
        </div>
      </div>
      <div className={`left-up-hour-hand ${isVisible ? "active" : ""}`}></div>
    </div>
  );
};
/**
 * 左下方
 * @param isVisible animation
 * @param data  contains
 * @returns
 */
const LeftDownBox = ({ isVisible, data }) => {
  return (
    <div>
      <div className={`left-down-minute-hand ${isVisible ? "active" : ""}`}>
        <div className={`minute-dot ${isVisible ? "active" : ""}`}>
          <div className='content-wrapper l-d'>{data}</div>
        </div>
      </div>
      <div className={`left-down-hour-hand ${isVisible ? "active" : ""}`}></div>
    </div>
  );
};
/**
 * 特殊方位
 * @param isVisible animation
 * @param data  contains
 * @returns
 */
const OtherOption = ({ isVisible, data }) => {
  return (
    <div>
      <div className={`right-down-minute-hand ${isVisible ? "active" : ""}`}>
        <div className={`minute-dot ${isVisible ? "active" : ""}`}>
          <div className='content-wrapper w-d'>{data}</div>
        </div>
      </div>
      <div
        className={`right-down-hour-hand ${isVisible ? "active" : ""}`}
      ></div>
    </div>
  );
};

export default function RotatingCircle({
  rightUp = false,
  rightDown = false,
  leftUp = false,
  leftDown = false,
  otherOption = false,
  isVisible = true,
  isH5 = false,
  data = "",
}) {
  useEffect(() => {}, [isVisible, isH5]);
  const defaultData =
    " Snazzy cockpit features mood lighting and tablet like infotainment screen, but the heat from the engine can make occupants uncomfortable. PHOTO: sgCarMart";
  return (
    <div className='ratating-container'>
      <div className={`ratating-root ${isVisible ? "active" : ""}`}>
        {rightDown ? (
          <RightDownBox
            isVisible={isVisible}
            data={data ? data : defaultData}
          />
        ) : rightUp ? (
          <RightUpBox isVisible={isVisible} data={data ? data : defaultData} />
        ) : leftUp ? (
          <LeftUpBox isVisible={isVisible} data={data ? data : defaultData} />
        ) : leftDown ? (
          <LeftDownBox isVisible={isVisible} data={data ? data : defaultData} />
        ) : otherOption ? (
          <OtherOption isVisible={isVisible} data={data ? data : defaultData} />
        ) : null}
      </div>
    </div>
  );
}
