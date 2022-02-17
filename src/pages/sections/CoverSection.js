import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import clsx from 'clsx';

function CoverSection() {
  
  let CSS = /* css */ `
  ${ /** CoverSection CSS */''}
  @media screen and (max-width: 768px) {
    .cover_caption {
      left: 1em;
    }
  }
  @media screen and (min-width: 768px) {
    .cover_caption {
      left: 2em;
    }
  }
  .section_cover {
    position: relative;
    overflow: hidden;
  }
  .cover_caption {
    position: absolute;
    bottom: 1em;
    margin-right: 2em;
  }
  .cover_title, .cover_subtitle {
    display: flex;
    color: #fff;
    text-shadow: 1px 1px 8px #000;
    margin: 0;
    line-height: 1.1em;
  }
  .cover_title {
    font-size: 2.5em;
  }
  .cover_subtitle {
    font-size: 1.25em;
  }

  `;

  return (
    <header className='cover_container'>
      <div className='cover_caption' /* data-aos="fade-right" */>
        <h1 className='cover_title'>Build and Scale your DAO</h1>
        <p className='cover_subtitle'>Start your Organization on Optimism</p>
      </div>
      <style>{CSS}</style>
    </header>
  );
}

export default CoverSection;