import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import {useLocation} from '@docusaurus/router';
import AOS from "aos";
import "aos/dist/aos.css";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

import CoverSection from './sections/CoverSection';
import AboutSection from './sections/AboutSection';
import DiamondSection from './sections/DiamondSection';
import TokenSection from './sections/TokenSection';
import RoadmapSection from './sections/RoadmapSection';
import InfoSection from './sections/InfoSection';
import Background from './components/Background';

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

  // for CSS template highlighting: https://marketplace.visualstudio.com/items?itemName=bierner.comment-tagged-templates 
  let CSS = /* css */ `
  button[class*="DetachedSearchButton"] { 
    display:none; 
    max-width: 100% !important;
    overflow-x: hidden !important;
  }
  `;

  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  useEffect(() => {
      if (ExecutionEnvironment.canUseDOM) {
          AOS.init();
          // updateDarkModeClass();
      }
  }, [ExecutionEnvironment.canUseDOM]);

  // function updateDarkModeClass() {
  //     if (!document) return;
  //     if (document.documentElement?.dataset?.theme === "dark" && !document.documentElement.classList.contains("dark")) {
  //         document.documentElement.classList.add("dark");
  //     } else {
  //         document.documentElement.classList.remove("dark");
  //     }
  // }

  // useEffect(() => {
  //     if (!ExecutionEnvironment.canUseDOM) return;
  //     const observer = new MutationObserver((mutations) => {
  //         mutations.forEach(function(mutation) {
  //             if (mutation.type == "attributes"
  //                 && mutation.attributeName === "data-theme") {
  //                 updateDarkModeClass();
  //             }
  //         });
  //     });
  //     observer.observe(document.documentElement, {
  //         attributes: true,
  //         childList: false,
  //         subtree: false
  //     });
  //     return () => {
  //         observer.disconnect();
  //     };
  // }, [ExecutionEnvironment.canUseDOM]);
  
  return (
    <Layout
      title='Home'
      description="Description will go into a meta tag in <head />">
      <LandingPage />
      <style>{CSS}</style>
    </Layout>
  );
}


