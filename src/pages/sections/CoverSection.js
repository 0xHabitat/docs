import React from 'react';
import './CoverSection.css'
// import Image from '@theme/IdealImage';
import Day from '/img/cover-day.png'
import Night from '/img/cover-night.png';

function CoverSection() {

  return (
    <header className='cover_container'>
      {/* <Image img={Day} className='background-image'/> */}
      <div className='cover_caption' /* data-aos="fade-right" */>
        <h1 className='cover_title'>Build and Scale your DAO</h1>
        <p className='cover_subtitle'>Start your Organization on Optimism</p>
      </div>
    </header>
  );
}

export default CoverSection;