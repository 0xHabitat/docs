import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

import BannerSection from './sections/BannerSection';
import AboutSection from './sections/AboutSection';
import DiamondSection from './sections/DiamondSection';
import TokenSection from './sections/TokenSection';
import RoadmapSection from './sections/RoadmapSection';
import InfoSection from './sections/InfoSection';
import Background from './components/Background';

let CSS = `
button[class*="DetachedSearchButton"] { 
  display:none; 
}
`;

function LandingPage() {
  // window.addEventListener('resize', function() {
  //   //code
  // });
  return (
    <div className={styles.landing}> 
      <BannerSection />
      <Background /> 
      <AboutSection />
      <DiamondSection />
      <TokenSection />
      <RoadmapSection />
      <InfoSection />
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  siteConfig.themeConfig.navbar.hideOnScroll = true;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <LandingPage />
      <style>{CSS}</style>
    </Layout>
  );
}


