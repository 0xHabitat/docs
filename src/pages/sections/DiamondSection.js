import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import clsx from 'clsx';
import Lottie from 'lottie-web';
import './DiamondSection.css'


function DiamondSection() {

  const [animation, showAnimation] = useState(false);
  const el = useRef(null);

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;
    const div1Pos = topPos(el.current) - 420;

    function onScroll() {
      const scrollPos = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPos) {
        showAnimation(true);
      }
      if (div1Pos > scrollPos) {
        showAnimation(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  

  useEffect(() => {
    let anim = Lottie.loadAnimation({
      container: el.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/img/diamond-animation.json',
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        hideOnTransparent: true
      }
    })
    
    if (animation == true) {
      anim.addEventListener('DOMLoaded', function(e) {
        anim.playSegments([0, 101], true); 
        anim.addEventListener('complete', () => {
          anim.playSegments([101, 271], true);
          //TODO remove eventlistener but continue loop
        });
      });
    } else if (animation == false) {
      anim.destroy();
    }
  }, [animation])

  return (
    <div className={styles.section_diamond}>
      <div id='diamond_container'>
        <div id='diamond_content' data-aos="fade-left">
          <h2>💎 Working with Diamonds</h2>
          <p>Habitat is building with EIP-2535 “Diamond Standard”. This standard allows organisations to use already existing features (contracts/facets) and easily share new. DAO facets are developed by Habitat and the DAO communities on Ethereum.</p>
        </div>
        <div id='diamond_legend' /* data-aos="flip-up" */>
          <div id='legend_dao'>
            <div id='dao_square'>
              <div id='square_shape'></div>
            </div>
            <div className='legend_key'>
              <p>Organization</p>
            </div>
          </div>
          <div id='legend_facet'>
            <div id='facet_triangle'>
              <div id='triangle_shape'></div>
            </div>
            <div className='legend_key'>
              <p>Facet Contract</p>
            </div>
          </div>
        </div>
        <div id='diamond_animation' ref={el}></div>
        <div id='diamond_image'></div>
      </div>
    </div>
  );
}

export default DiamondSection;
