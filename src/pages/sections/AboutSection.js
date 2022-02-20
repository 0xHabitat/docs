import React, {useState, useEffect} from 'react';
import styles from '../index.module.css';
import clsx from 'clsx';
import Shape1 from '/img/shape-1.svg';
import DAO from '/img/image-about-dao.svg';
import './AboutSection.css'
import useCurrentWidth from '../components/Shapes';

export default function AboutSection() {


  return (
    <div className={styles.section_about} data-aos="fade-up" data-aos-delay="100">
      <Shape1 height='100%' width='100%' className={styles.shapes} preserveAspectRatio={useCurrentWidth()}/>
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
    </div>
  );
}

