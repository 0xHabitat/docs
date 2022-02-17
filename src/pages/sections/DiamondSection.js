import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import clsx from 'clsx';
import Lottie from 'lottie-web';
// import * as start from '/img/diamond-start.json';
// import * as loop from '/img/diamond-loop.json';


function DiamondSection() {

  let CSS = /* css */ `
  ${ /** DiamondSection CSS */''}
  #diamond_container {
    margin: auto;
    display: flex;
    position:relative;
    width: 90%;
    min-height: 40em;
  }
  ${ /** Working with Diamonds text */''}
  #diamond_content {
    position: absolute;
    right: 0;
    text-align: right;
    width: 26em;
    height: 100%;
  }
  ${ /** Legend */''}
  #diamond_legend {
    position: absolute;
    bottom: 0;
    text-align: left;
    margin-left: 2em;
    margin-bottom: 1em;
  }
  #legend_dao {
    margin: 1em;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
  }
  #dao_square {
    height: 3em;
    width: 3em;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  #square_shape {
    margin: auto;
    background: #222;
    height: 2em;
    text-align: center;
    transform:rotate(45deg);
    width:2em;
  }
  .legend_key {
    height: 3em;
    display:flex;
    margin-left: .25em;
  }
  .legend_key p {
    margin: auto;
  }
  #legend_facet {
    margin: 1em;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  #facet_triangle {
    height: 3em;
    width: 3em;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  #triangle_shape {
    margin: auto;
    margin-bottom: .6em;
    margin-right: .1em;
    width: 0;
    height: 0;
    border-left: 1em solid transparent;
    border-right: 1em solid transparent;
    border-bottom: 2em solid #fff;
    transform:rotate(20deg);
  }
  ${ /** Animation container */''}
  #diamond_animation {
    margin: auto;
    min-width: 30em;
    max-widht: 60em;
  }
  `;

  let anim;
  const [animation, showAnimation] = useState(false);
  const el = useRef(null);

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;
    const div1Pos = topPos(el.current) - 420;
    console.log(div1Pos)

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
        progressiveLoad: true,
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
      </div>
      <style>{CSS}</style>
    </div>
  );
}

export default DiamondSection;
