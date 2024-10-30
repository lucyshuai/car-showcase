import React from "react";
import "./DetailsSection.css";
import { DETAIL_DATA } from "../../mockdata/mockData";
import Carousel from "../../components/Carousel";
import useVisibility from "../../hooks/useVisibility";
import BannerScrollAnimation from "../../components/BannerScrollAnimation";

/**
 * 详情页
 */
export default function DetailsSection() {
  const textData = DETAIL_DATA["en_US"] ?? {};
  const banner = useVisibility(0.5, true);
  const images = Object.values(DETAIL_DATA.carsInformation).map(
    (item) => item.src
  );

  return (
    <div className='details-contanier'>
      <div className='title-root border-line'>
        <div className='title-de '>
          TEXT
          <span>JEREMY CHUA</span>
        </div>
        <div className='title-de'>
          DESIGN
          <span>CJ. FOO</span>
        </div>
      </div>

      <div className='p-2' style={{ fontSize: "16px", color: "#695e3e" }}>
        PUBLISHED ON 03 APRIL 2023, 3:37 PM
      </div>
      {textData.map((paragraph, index) => (
        <div key={index} className='paragraph row-width-80 color-white-primary'>
          {paragraph}
        </div>
      ))}
      <div className='details-banner-root' ref={banner.ref}>
        <BannerScrollAnimation
          contents={<Carousel images={images} />}
          leftIn={true}
          isVisible={banner.isVisible}
        />
      </div>
    </div>
  );
}
