import React, { useState, useEffect } from "react";
import "./StickyMenu.css";
/**
 *
 * 顶部菜单
 */
export default function StickyMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`menu-container ${isSticky ? "sticky" : ""}`}>
      <div className='menu-hamburger'>
        <img
          className='hamburger-icon'
          src='/assets/nav-hamburger.svg'
          alt=''
        />
      </div>
      <div className='menu-icon' onClick={toggleMenu}>
        <div className={`menu-items ${isMenuOpen ? "show" : ""}`}>
          <a
            href='https://whatsapp.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='icon'
              src='/assets/nav-whatsapp.svg'
              alt='whatsapp'
            />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='icon'
              src='/assets/nav-instagram.svg'
              alt='instagram'
            />
          </a>
          <a
            href='https://telegram.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='icon'
              src='/assets/nav-telegram.svg'
              alt='telegram'
            />
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='icon'
              src='/assets/nav-facebook.svg'
              alt='facebook'
            />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='icon' src='/assets/nav-twitter.svg' alt='twitter' />
          </a>
        </div>
        {isMenuOpen ? (
          <img
            className='arrow-up-icon'
            src='/assets/nav-arrow-up.svg'
            alt=''
          />
        ) : (
          <img className='share-icon' src='/assets/nav-share.svg' alt='' />
        )}
      </div>
    </div>
  );
}
