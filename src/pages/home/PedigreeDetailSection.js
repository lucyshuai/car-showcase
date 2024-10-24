import React from "react";
import "./PedigreeDetailSection.css";
import { PADIGREE_DATA } from "../../mockdata/mockData";
import ImgAnimation from "../../components/ImgAnimation";
import useVisibility from "../../hooks/useVisibility";

export default function PedigreeDetailSection() {
  const imgOne = useVisibility();
  const imgTwo = useVisibility();

  const textData = PADIGREE_DATA["en_US"] ?? {};
  return (
    <div className='page-container'>
      <div className='text-uppercase p-b-16 row-width-80'>Pedigree</div>
      <div className='page-section-list-root'>
        <div className='detail-row row-width-80' ref={imgOne.ref}>
          <div className='text-con color-yellow-second left'>
            {textData.detailOne.map((e, index) => (
              <div key={index}>{e}</div>
            ))}
          </div>
          <div className='image-box'>
            <ImgAnimation
              imageUrl='/assets/pedigree_porsche.png'
              isVisible={imgOne.isVisible}
            />
          </div>
        </div>
        <div className='detail-row p-t row-width-80' ref={imgTwo.ref}>
          <div className='image-box'>
            <ImgAnimation
              imageUrl='/assets/pedigree_mercedes_benz_sl.png'
              isVisible={imgTwo.isVisible}
            />
          </div>
          <div className='text-con color-yellow-second right'>
            {textData.detailTwo.map((e, index) => (
              <div className='line-grap' key={index}>
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
