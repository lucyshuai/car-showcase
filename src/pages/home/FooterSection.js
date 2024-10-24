import React from "react";
import "./FooterSection.css";
import BannerScrollAnimation from "../../components/BannerScrollAnimation";
import { MORE_INFO_DATA } from "../../mockdata/mockData";
import useVisibility from "../../hooks/useVisibility";

export default function FooterSection() {
  const textData = MORE_INFO_DATA["en_US"] ?? {};
  const banner = useVisibility();

  const BannerBox = ({ side, imgSrc, title, dataList }) => {
    return (
      <div className={`infor-banner ${side}-boder`}>
        {side === "left" ? (
          <div className='img-left-root'>
            <img className='img' src={imgSrc} alt='null' />
          </div>
        ) : (
          ""
        )}
        <div className={`banner-list-${side}`}>
          <span className='banner-title'>{title}</span>
          {dataList.map((e, index) => (
            <div className={`text-${side}`} key={index}>
              {side === "right" ? <span className={`dot-${side}`}></span> : ""}
              {e}
              {side === "left" ? <span className={`dot-${side}`}></span> : ""}
            </div>
          ))}
        </div>
        {side === "right" ? (
          <div className='img-right-root'>
            <img className='img' src={imgSrc} alt='null' />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };
  return (
    <div className='footer-container'>
      <div className='preference-container' ref={banner.ref}>
        <BannerScrollAnimation
          contents={
            <BannerBox
              side='left'
              imgSrc='/assets/footer_left_what_we_like.png'
              title='What We Like'
              dataList={textData.bannerContent.like}
            />
          }
          leftIn={true}
          isVisible={banner.isVisible}
        />
        <BannerScrollAnimation
          contents={
            <BannerBox
              side='right'
              imgSrc='/assets/footer_right_what_we_dislike.png'
              title='What We Dislike'
              dataList={textData.bannerContent.dislike}
            />
          }
          rightIn={true}
          isVisible={banner.isVisible}
        />
      </div>
      <img
        src='/assets/bottom_advertisment.png'
        alt=''
        className='bottom_advertisment-img'
      />
      <div className='footer-connect'>
        <img
          src='/assets/asiaone_footer_desktop.png'
          alt=''
          className='asiaone_footer'
        />
      </div>
    </div>
  );
}
