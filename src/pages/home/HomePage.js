import React from "react";
import PedigreeDetailSection from "./PedigreeDetailSection";
import "./HomePage.css";
import VideoSection from "./VideoSection";
import SEO from "../../components/SEO.react";
import DetailsSection from "./DetailsSection";
import InteriorDetailSection from "./InteriorDetailSection";
import MoreInforSection from "./MoreInforSection";
import FooterSection from "./FooterSection";
import StickyMenu from "../../components/StickyMenu.react";
import HeaderSection from "./HeaderSection";

export default function HomePage() {
  const sections = [
    <HeaderSection />,
    <DetailsSection />,
    <PedigreeDetailSection />,
    <InteriorDetailSection />,
    <VideoSection />,
    <MoreInforSection />,
    <FooterSection />,
  ];
  return (
    <>
      <SEO />
      <div className='home'>
        <StickyMenu />
        {sections.map((section, index) => (
          <div key={index} className='container'>
            {section}
          </div>
        ))}
      </div>
    </>
  );
}
