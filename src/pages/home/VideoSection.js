import React from "react";
import "./VideoSection.css";
import { VIDEO_DATA, VIDEO_SECTION_DATA } from "../../mockdata/mockData";
import BannerScrollAnimation from "../../components/BannerScrollAnimation";
import useVisibility from "../../hooks/useVisibility";
export default function VideoSection() {
  const textData = VIDEO_DATA["en_US"] ?? {};
  const banner = useVisibility(0.5, true);
  const carAnimation = useVisibility(0.5, true);

  return (
    <div className='video-section'>
      <div className='video-contanier'>
        <div className='row-width-80'>
          <div className='text-uppercase title-bold-yellow p-b-16'>
            {textData.title}
          </div>
          {textData.part1.map((content, index) => (
            <div key={index} className='paragraph color-white-primary'>
              {content}
            </div>
          ))}
          <div className='video-root'>
            <video className='video' autoPlay muted loop>
              <source src='assets/benz_amg_video.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
          {textData.part2.map((content, index) => (
            <div
              key={index}
              className='paragraph color-white-primary'
              ref={carAnimation.ref}
            >
              {content}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`d-car-animation ${carAnimation.isVisible ? "move-in" : ""}`}
      >
        <img src='/assets/progress.png' alt='' className='progress-img' />
      </div>
      <div className='banner-animation-box' ref={banner.ref}>
        <BannerScrollAnimation
          data={VIDEO_SECTION_DATA.dataOne}
          leftIn={true}
          isVisible={banner.isVisible}
        />
        <BannerScrollAnimation
          data={VIDEO_SECTION_DATA.dataTwo}
          rightIn={true}
          isVisible={banner.isVisible}
        />
      </div>
    </div>
  );
}
