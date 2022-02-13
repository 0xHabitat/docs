import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import clsx from 'clsx';
import Shape2 from '/img/shape-2.svg';
import Coins from '/img/image-token-coins.svg';

let CSS = `
#token_wrapper {
  display:block;
  position: relative;
  width:90%;
  margin: auto;
  z-index: 1;
}
#token_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
}
#token_content {
  max-width: 38em;
  min-width: 20em;
  flex: 1 1 0;
  margin: 1em;
}
#token_image {
  min-width: 20em;
  max-width: 30em;
  min-height:10em;
  flex: 1 1 1;
}
#token_img {
  margin: auto;
  display: block;
  max-width: 13em;
  min-width: 10em; 
}
`;

function TokenSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.section_token}>
      <Shape2 height='100%' width='100%' className={styles.shapes}/>
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
      <style>{CSS}</style>
    </div>
  );
}

export default TokenSection;
