import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import clsx from 'clsx';
import Shape1 from '/img/shape-1.svg';
import DAO from '/img/image-about-dao.svg';

let CSS = `
#about_wrapper {
  display:block;
  position: relative;
  width:90%;
  margin: auto;
  z-index: 1;
}
#about_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
}
#about_content {
  max-width: 40em;
  min-width: 20em;
  flex: 1 1 0;
  margin-right: 2em;
}
#about_img {
  margin: auto;
  min-width: 20em;
  max-width: 30em;
  min-height:10em;
  flex: 1 1 0;
}
`;

export default function AboutSection() {

  return (
    <div className={styles.section_about}>
      <Shape1 height='100%' width='100%' className={styles.shapes}/>
      <div id='about_wrapper'>
        <div id='about_container'>
          <div id='about_content'>
            <div id='about_title'>
              <h2>🎨 A New Design Space for Organisations</h2>
            </div>
            <div id='about_text'>
              <p>Start your community on Habitat and enjoy the scaling benefits of optimistic rollups on Ethereum. Rollups can extend the DAO space by enabling more organisation features and trustless execution of voting results. New modules and features are built and maintained by the Habitat DAO and its contributors making them free to use for every community.</p>
            </div>
          </div>
          <DAO className={clsx('about_img', styles.svg_img)}/>
        </div>
      </div>
      <style>{CSS}</style>
    </div>
  );
}

