import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import clsx from 'clsx';

let CSS = `
.section_banner {
  --height-banner: 40em;
  height: var(--height-banner); 
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
}
@media screen and (max-width: 966px) {
  .section_banner {
    padding: 2rem;
  }
}
`;

function BannerSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', 'section_banner')}>
      <div className="hero__container">
        <div className="hero__tagline">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </div>
      <style>{CSS}</style>
    </header>
  );
}

export default BannerSection;