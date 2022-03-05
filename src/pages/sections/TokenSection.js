import React from 'react';
import styles from '../index.module.css';
import Shape2 from '/img/shape-2.svg';
import Coins from '/img/image-token-coins.svg';
import './TokenSection.css'
import useCurrentWidth from '../components/Shapes';
import Link from '@docusaurus/Link';

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
              <p>Community ownership is the key benefit of the HABITAT Token.</p>
              <p>Making collective decisions about new features and upgrades for the Habitat dapp. Adding and funding new diamond facets (contracts) such as voting modules, DeFi, treasury management, NFT and many more.</p>
              <p>Together with you and the communities on Habitat, we build an open-source, all-in-one community toolkit on Ethereum.</p>
              <div id='token_button'>
                <Link id='button_waitlist' className='button' to='https://0xhabitat.substack.com/'>Join Waitlist</Link>
              </div>
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
