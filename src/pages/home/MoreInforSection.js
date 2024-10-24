import React from "react";
import "./MoreInforSection.css";
import { MORE_INFO_DATA } from "../../mockdata/mockData";

export default function MoreInforSection() {
  const textData = MORE_INFO_DATA["en_US"] ?? {};
  // 车辆图片动画
  const ImageContainer = ({ rightContent, leftContent }) => {
    return (
      <div className='imgs-container row-width-80'>
        <div className='right-side'>
          {rightContent.img ? (
            <img
              className='img'
              src={rightContent.img}
              alt={rightContent.alt || "right image"}
            />
          ) : null}
        </div>
        <div className='left-side'>
          {leftContent.img ? (
            <img
              className='img'
              src={leftContent.img}
              alt={leftContent.alt || "left image"}
            />
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <div className='more-section-container'>
      <div className='p-4 row-width-80'>
        {textData.content.map((paragraph, index) => (
          <div
            key={index}
            className='paragraph row-width-80 color-yellow-second-deep text-bold'
          >
            {paragraph}
          </div>
        ))}
      </div>
      <div className='more-img-container'>
        <ImageContainer
          rightContent={textData.imageContent.iwc}
          leftContent={textData.imageContent.amg}
        />
        <ImageContainer
          rightContent={textData.imageContent.vehicle}
          leftContent={textData.imageContent.detail1}
        />
        <ImageContainer
          rightContent={textData.imageContent.softTop}
          leftContent={textData.imageContent.detail2}
        />
      </div>
    </div>
  );
}
