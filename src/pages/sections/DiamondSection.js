import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import clsx from 'clsx';

let CSS = `

`;

function DiamondSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.section_diamond}>
      <style>{CSS}</style>
    </div>
  );
}

export default DiamondSection;
