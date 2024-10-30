import React, { useEffect, useState } from "react";
import "./Carousel.css"; // 自定义样式
import RotatingCircle from "./RotatingCircle";
import { DETAIL_DATA } from "../mockdata/mockData";

const Carousel = ({ images }) => {
  const imgDataList = Object.values(DETAIL_DATA.carsInformation).map(
    (item) => ({
      ...item,
      data: item.data,
      isShow: false,
    })
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentData, setCurrentData] = useState(imgDataList[0].data);
  const [currentPosition, setCurrentPosition] = useState(imgDataList[0]);
  const [rotationKey, setRotationKey] = useState(0);
  const [isActive, setIsActive] = useState(false); // 控制 dots 的 active 类
  // 切换到下一个图片
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setRotationKey((prevKey) => prevKey + 1);
    setIsActive(true); // 设置 dots 为 active
  };

  // 切换到上一个图片
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setRotationKey((prevKey) => prevKey + 1);
    setIsActive(true); // 设置 dots 为 active
  };

  // 点击某个圆点时切换到对应的图片
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setRotationKey((prevKey) => prevKey + 1);
    setIsActive(true); // 设置 dots 为 active
  };

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setIsActive(false), 300); // 300ms 后重置为 false
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  useEffect(() => {
    setCurrentData(imgDataList[currentIndex].data);
    // setCurrentPosition(imgDataList[currentIndex]);
  }, [currentIndex, imgDataList]);

  return (
    <div>
      <div className='rotating-root'>
        <RotatingCircle
          key={rotationKey}
          leftUp={true}
          data={currentData}
          isVisible={true}
        />
      </div>
      <div className='carousel'>
        <div className={`carousel-ring ${isActive ? "active" : ""}`}>
          <img
            src='/assets/masthead_ring.svg'
            alt=''
            className='masthead_ring-img active'
          />
          <div className='dots'>
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className='carousel-images'>
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-image ${
                index === currentIndex ? "active" : ""
              }`}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
              }}
            >
              <img src={image} alt='' />
            </div>
          ))}
        </div>
        <span className='prev' onClick={prevSlide}></span>
        <span className='next' onClick={nextSlide}></span>
      </div>
    </div>
  );
};

export default Carousel;
