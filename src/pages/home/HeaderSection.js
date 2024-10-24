import React, { useEffect, useState } from "react";
import "./HeaderSection.css";

export default function HeaderSection() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNextSectionClick = () => {
    const nextSection = document.querySelector(".details-contanier");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ShowUp = () => {
    return (
      <div className={`show-up-container ${isScrollingDown ? "active" : ""}`}>
        <div className='show-up-text'>
          A luxurious upgrade that packs plenty of firepower
        </div>
        <img
          className={`arrow-down-img ${isScrollingDown ? "active" : ""}`}
          src='/assets/main-arrow-down.svg'
          alt='null'
          onClick={handleNextSectionClick}
        ></img>
      </div>
    );
  };

  return (
    <div className='header-container'>
      <div className='header-section-title'>Mercedes-Benz SL55 AMG</div>
      <img src='/assets/masthead_back_img.jpg' alt='' className='deep-img' />
      <img
        src='/assets/masthead_fore_img.png'
        alt=''
        className='masthead_fore-img'
      />
      <img src='/assets/masthead_ring.svg' alt='' className='ring-img' />
      <img
        src='/assets/masthead_ring_rotate.svg'
        alt=''
        className='animated-yellow-circle'
      />{" "}
      <ShowUp />
    </div>
  );
}
