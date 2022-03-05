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

function LandingPage() {

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
        AOS.init();
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