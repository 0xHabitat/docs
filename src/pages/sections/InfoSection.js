import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import clsx from 'clsx';
import Shape3 from '/img/shape-3.svg';

function InfoSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.section__info}>
      <Shape3 height='100%' width='100%'/>

    </div>
  );
}

export default InfoSection;
