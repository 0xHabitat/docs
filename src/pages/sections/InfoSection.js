import React from 'react';
import styles from '../index.module.css';
import clsx from 'clsx';
import Shape3 from '/img/shape-3.svg';
import Distributed from '/img/image-info-distributed.svg';
import Habitat from '/img/image-info-habitat.svg';
import Optimism from '/img/image-info-optimism.svg';
import Link from '@docusaurus/Link';
import './InfoSection.css'

export default function InfoSection() {

  return (
    <div className={styles.section_info} data-aos="fade-up" data-aos-delay="100">
      <Shape3 height='100%' width='100%' className={styles.shapes}/>
      <div id='info_wrapper'>
        <div id='info_container'>
          <div className='info_feature'>
            <Optimism className={clsx('info_img', styles.svg_img)}/>
            <h4>Scaling on an Optimistic Rollup</h4>
            <p>Saves up to 96% transaction costs at PayPal-like speed. <a href='https://l2fees.info/'>Read more</a>.</p>
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
          <Link id='button_twitter' className='button' to='https://twitter.com/0xhabitat'>🐦 Twitter</Link>
          <Link id='button_discord' className='button' to='https://discord.com/invite/Pqdj73UTt6'>💬 Discord</Link>
          <Link id='button_github' className='button' to='https://github.com/0xHabitat'>🔧 Github</Link>
          <Link id='button_blog' className='button' to='/blog'>📒 Blog</Link>
          <Link id='button_docs' className='button' to='/docs'>🔎 Docs</Link>
        </div>
      </div>
    </div>
  );
}
