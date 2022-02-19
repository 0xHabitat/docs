import React, { useEffect } from 'react';
import styles from './index.module.css';
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import AOS from "aos";
import "aos/dist/aos.css";

import Background from './components/Background';
import AboutSection from './sections/AboutSection';
import DiamondSection from './sections/DiamondSection';
import TokenSection from './sections/TokenSection';
import RoadmapSection from './sections/RoadmapSection';
import InfoSection from './sections/InfoSection';
// const Background = lazy(() => import('./components/Background'));
// const CoverSection = lazy(() => import('./sections/CoverSection'));
// const AboutSection = lazy(() => import('./sections/AboutSection'));
// const DiamondSection = lazy(() => import('./sections/DiamondSection'));
// const TokenSection = lazy(() => import('./sections/TokenSection'));
// const RoadmapSection = lazy(() => import('./sections/RoadmapSection'));
// const InfoSection = lazy(() => import('./sections/InfoSection'));

// const renderLoader = () => <p>Loading</p>;

function LandingPage() {

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
        AOS.init();
        // updateDarkModeClass();
    }
}, [ExecutionEnvironment.canUseDOM]);

  return (
    <div className={styles.landing}> 
      <Background />
      <AboutSection />
      <DiamondSection />
      <TokenSection />
      <RoadmapSection />
      <InfoSection />
    </div>
  );
}

export default LandingPage;