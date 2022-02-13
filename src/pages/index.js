import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import {useLocation} from '@docusaurus/router';

import CoverSection from './sections/CoverSection';
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
  return (
    <div className={styles.landing}> 
      <CoverSection />
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

  return (
    <Layout
      title='Home'
      description="Description will go into a meta tag in <head />">
      <LandingPage />
      <style>{CSS}</style>
    </Layout>
  );
}


