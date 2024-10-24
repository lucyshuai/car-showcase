import React from "react";
import "./DetailsSection.css";
import { DETAIL_DATA } from "../../mockdata/mockData";

/**
 * 详情页
 */
export default function DetailsSection() {
  const textData = DETAIL_DATA["en_US"] ?? {};
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
      <img src='/assets/carousel-1.png' alt='' className='car-img' id='cars' />
    </div>
  );
}
