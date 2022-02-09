import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import clsx from 'clsx';
import Shape1 from '/img/shape-1.svg';


function AboutSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.section__about}>
      <Shape1 height='100%' width='100%'/>
      {/* <h1>🎨 A New Design Space for Organisations</h1> */}
    </div>
  );
}

export default AboutSection;
