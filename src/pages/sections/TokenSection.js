import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import clsx from 'clsx';
import Shape2 from '/img/shape-2.svg';

function TokenSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.section__token}>
      <Shape2 height='100%' width='100%'/>

    </div>
  );
}

export default TokenSection;
