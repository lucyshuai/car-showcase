import React, { useEffect } from "react";
import "./MoreInforSection.css";
import { MORE_INFO_DATA } from "../../mockdata/mockData";
import RotatingCircle from "../../components/RotatingCircle";
import BannerScrollAnimation from "../../components/BannerScrollAnimation";
import useVisibility from "../../hooks/useVisibility";
import useIsMobile from "../../hooks/useIsMobile";

// 车辆图片动画
const ImageContainer = ({ rightContent, leftContent, isVisible, isH5 }) => {
  return (
    <div className='imgs-container'>
      <div className='position-r'>
        {isH5 ? (
          <BannerScrollAnimation
            contents={
              <MoreInfoData
                data={rightContent}
                side='left'
                isShow={isVisible}
                isH5={true}
              />
            }
            leftIn={true}
            isVisible={isVisible}
          />
        ) : (
          <BannerScrollAnimation
            contents={
              <MoreInfoData
                data={rightContent}
                side='right'
                isShow={isVisible}
              />
            }
            leftIn={true}
            isVisible={isVisible}
          />
        )}
      </div>
      <div className='position-r'>
        {isH5 ? (
          <BannerScrollAnimation
            contents={
              <MoreInfoData
                data={leftContent}
                side='right'
                isShow={isVisible}
                isH5={true}
              />
            }
            rightIn={true}
            isVisible={isVisible}
          />
        ) : (
          <BannerScrollAnimation
            contents={
              <MoreInfoData data={leftContent} side='left' isShow={isVisible} />
            }
            rightIn={true}
            isVisible={isVisible}
          />
        )}
      </div>
    </div>
  );
};
const MoreInfoData = ({ data, side, isShow }) => {
  return (
    <div className={`more-infor-box-${side}`}>
      <div className={`${side}-rotating-root`}>
        {side === "right" ? (
          <RotatingCircle leftUp={isShow} />
        ) : (
          <RotatingCircle rightUp={isShow} />
        )}
      </div>
      <div className='yellow-c-img'>
        {data.img ? (
          <img className='c-img' src={data.img} alt={data.alt || "d-image"} />
        ) : null}
      </div>
    </div>
  );
};

export default function MoreInforSection() {
  const textData = MORE_INFO_DATA["en_US"] ?? {};
  const banner1 = useVisibility();
  const banner2 = useVisibility();
  const banner3 = useVisibility();
  const isH5 = useIsMobile();
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
        <div className='more-img-root' ref={banner1.ref}>
          <ImageContainer
            rightContent={textData.imageContent.iwc}
            leftContent={textData.imageContent.amg}
            isVisible={banner1.isVisible}
            isH5={isH5}
          />
        </div>
        <div className='more-img-root' ref={banner2.ref}>
          <ImageContainer
            rightContent={textData.imageContent.vehicle}
            leftContent={textData.imageContent.detail1}
            isVisible={banner2.isVisible}
            isH5={isH5}
          />
        </div>

        <div className='more-img-root' ref={banner3.ref}>
          <ImageContainer
            rightContent={textData.imageContent.softTop}
            leftContent={textData.imageContent.detail2}
            isVisible={banner3.isVisible}
            isH5={isH5}
          />
        </div>
      </div>
    </div>
  );
}
