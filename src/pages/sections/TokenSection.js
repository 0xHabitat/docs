import React from 'react';
import styles from '../index.module.css';
import Shape2 from '/img/shape-2.svg';
import Coins from '/img/image-token-coins.svg';
import './TokenSection.css'
import useCurrentWidth from '../components/Shapes';

function TokenSection() {

  return (
    <div className={styles.section_token} data-aos="fade-up" data-aos-delay="100">
      <Shape2 height='100%' width='100%' className={styles.shapes} preserveAspectRatio={useCurrentWidth()}/>
      <div id='token_wrapper'>
        <div id='token_container'>
          <div id='token_content'>
            <div id='token_title'>
              <h2>🌱 HABITAT Token</h2>
            </div>
            <div id='token_text'>
              <p>The HABITAT Token is the governance token guiding the HABITAT DAO. HABITAT is used to participate in decisions about new features, upgrades and updates within the Habitat Ecosystem. New sophisticated voting modules can be proposed, voted on and implemented. Together with you and the communities on Habitat, we build an open-source, all-in-one community toolkit on Ethereum.</p>
            </div>
          </div>
          <div id='token_image'>
            <Coins id='token_img' className={styles.svg_img} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default TokenSection;
