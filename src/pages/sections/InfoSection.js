import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import clsx from 'clsx';
import Shape3 from '/img/shape-3.svg';
import Distributed from '/img/image-info-distributed.svg';
import Habitat from '/img/image-info-habitat.svg';

let CSS = `
#info_wrapper {
  display:block;
  position: relative;
  width:90%;
  margin: auto;
  z-index: 1;
}
#info_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
}
.info_feature {
  margin: 2em;
  min-width: 11em;
  max-width: 25em;
  min-height:10em;
  flex: 1 1 0;
}
.info_img {
  margin-bottom: 1em;
  display: block;
  max-width: 6em;
  min-width: 5em; 
}
#info_title {
  padding: .5em;
  text-align: center;
}
#buttons {
  padding: 2em;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-evenly;
}
#buttons button {
  border-radius: .5em;
  cursor: pointer;
  border: none;
  flex: 1 1 0;
  max-width: 12em;
  min-width: 7em;
  height: 3em;
  margin: auto;
  margin-left: .5em;
  margin-right: .5em;
  margin-bottom: 1em;
  filter: drop-shadow(0px 3.57004px 3.57004px rgba(0, 0, 0, 0.25));
}
#buttons button:hover {
  opacity: 0.8;
}
#button_twitter {
  background: #A3DDE9;
  color: #000000;
}
#button_discord {
  background: #635BFF;
  color: #FFFFFF;
}
#button_github {
  background: #222222;
  color: #FFFFFF;
}
#button_blog {
  background: #F5CC66;
  color: #000000;
}
#button_docs {
  background: #FFFFFF
  color: #000000;
}
`;

export default function InfoSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.section_info}>
      <Shape3 height='100%' width='100%' className={styles.shapes}/>
      <div id='info_wrapper'>
        <div id='info_container'>
          <div className='info_feature'>
            <img className='info_img' src='/img/image-info-optimism.png'/>
            <h4>Scaling on an Optimistic Rollup</h4>
            <p>Saves up to 96% transaction costs at PayPal-like speed. <a href='https://www.optimism.io/'>Read more</a>.</p>
          </div>
          <div className='info_feature'>
            <Habitat className={clsx('info_img', styles.svg_img)}/>
            <h4>Owned and Governed by You.</h4>
            <p>Grow the Habitat by signaling new tools and vote on new features.</p>
          </div>
          <div className='info_feature'>
            <Distributed className={clsx('info_img', styles.svg_img)}/>
            <h4>Independent and Autonomous</h4>
            <p>Communities on Habitat stay sovereign. Your community, your rules.</p>
          </div>
        </div>
        <h2 id='info_title' >Join the Habitat 🏕</h2>
        <div id='buttons'>
          <button id='button_twitter'>🐦 Twitter</button>
          <button id='button_discord'>💬 Discord</button>
          <button id='button_github'>🔧 Github</button>
          <button id='button_blog'>📒 Blog</button>
          <button id='button_docs'>🔎 Docs</button>
        </div>
      </div>
      <style>{CSS}</style>
    </div>
  );
}
