import React from "react";
import "./InteriorDetailSection.css";
import BannerScrollAnimation from "../../components/BannerScrollAnimation";
import { INTERIOR_SECTION_DATA } from "../../mockdata/mockData";
import useVisibility from "../../hooks/useVisibility";
import RotatingCircle from "../../components/RotatingCircle";

export default function InteriorDetailSection() {
  const grayBox1 = useVisibility();
  const grayBox2 = useVisibility();
  const globalTitle = useVisibility(0.5, true);
  const rotatingCircle1 = useVisibility();
  const rotatingCircle2 = useVisibility();

  return (
    <div className='interior-container'>
      <div className='banner-animation-box' ref={globalTitle.ref}>
        <BannerScrollAnimation
          data={INTERIOR_SECTION_DATA.dataOne}
          leftIn={true}
          isVisible={globalTitle.isVisible}
        />
        <BannerScrollAnimation
          data={INTERIOR_SECTION_DATA.dataTwo}
          rightIn={true}
          isVisible={globalTitle.isVisible}
        />
      </div>
      <div className='image-container' ref={grayBox1.ref}>
        <img
          src='/assets/parallax_interior1.png'
          alt=''
          className='interior1-img'
          ref={rotatingCircle1.ref}
        />
        <div className={`gray-box ${grayBox1.isVisible ? "active" : ""}`}>
          {INTERIOR_SECTION_DATA.boxDataOne.map((e, index) => (
            <div key={index}>{e}</div>
          ))}
        </div>
        <div className='inter-rota-1'>
          <RotatingCircle
            rightDown={true}
            isVisible={rotatingCircle1.isVisible}
          />
        </div>
      </div>

      <div className='image-container' ref={grayBox2.ref}>
        <div
          className={`gray-box box-small ${grayBox2.isVisible ? "active" : ""}`}
        >
          {INTERIOR_SECTION_DATA.boxDataTwo.map((e, index) => (
            <div key={index}>{e}</div>
          ))}
        </div>
        <img
          src='/assets/parallax_interior2.png'
          alt=''
          className='interior2-img'
          ref={rotatingCircle2.ref}
        />
        <div className='inter-rota-2'>
          <RotatingCircle
            rightUp={true}
            isVisible={rotatingCircle2.isVisible}
          />
        </div>
      </div>
    </div>
  );
}
