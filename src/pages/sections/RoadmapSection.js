import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import clsx from 'clsx';

function RoadmapSection() {
  
  let CSS = /* css */ `
  ${ /** RoadmapSection CSS */''}
  #roadmap_wrapper {
    display:block;
    position: relative;
    width:95%;
    margin: auto;
    z-index: 1;
    text-align: center;
  }
  ${ /** Constants */''}
  #roadmap_box {
    margin: auto;
    display: flex;
    position: relative;
  }
  .phase_marker {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  .marker_title {
    width: 4em;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .marker_title h3 {
    margin: auto;
  }

  ${ /** Portrait */''}
  @media screen and (max-width: 370px) {
    #roadmap_box {
      max-width: 19em;
    }
    #phase_prototype {
      width: 9.5em;
    }
    #phase_framework, #phase_multichain {
      width: 19em;
    }
    .features_box {
      max-width: 11em;
      min-width: 9em;
      margin: auto;
    }
    .feature_complete, .feature_incomplete {
      font-size: .65em;
    }
  }
  @media screen and (min-width: 0px), @media screen and (min-width: 370px), @media screen and (min-width: 768px) {
    #roadmap_container {
      margin-top: 5em;
    }
    #roadmap_box {
      justify-content: flex-start;
      align-content: flex-start;
      flex-direction: column;
    }
    .phase_marker {
      flex-direction: row-reverse;
      width: 100%;
      height: 3em;
      margin-top: 0;
      margin-left: 0;
      margin-right: 0;
    }
    .marker_line {
      border-left: none;
      border-bottom: 4px dotted black;
      height: 0;
      width: 100%;
      margin: auto;
      margin-left: 1em;
      margin-right: 1em;
    }

    #phase_prototype, #phase_framework, #phase_multichain {
      background: rgba(0, 0, 0, 0.1);
    }

    #shape_arrow {
      display: none;
    }
  }
  @media screen and (min-width: 370px) {
    #roadmap_box {
      max-width: 22em;
    }
  }
  @media screen and (min-width: 768px) {
    #roadmap_box {
      max-width: 35em;
    }
  }

  ${ /** Landscape */''}
  @media screen and (min-width: 996px) {
    #roadmap_container {
      margin-top: 8em;
    }
    #roadmap_box {
      justify-content: center;
      align-content: center;
      max-width: 100%;
      flex-direction: row;
    }
    .phase_marker {
      flex-direction: column;
      width: 4em;
      height: 10em;
      margin-top: -5.5em;
      margin-left: -1.25em;
      margin-right: -1.25em;
    }
    .marker_line {
      border-left: 4px dotted black;
      border-bottom: none;
      height: 6em;
      width: 0;
      margin: auto;
      margin-left: 0;
      margin-right: 0;
    }
    #phase_prototype, #phase_framework, #phase_multichain {
      background: none;
    }
    #shape_arrow {
      display: block;
      width: 0; 
      height: 0; 
      border-top: 1.4em solid transparent;
      border-bottom: 1.4em solid transparent;
      border-left: 1.75em solid white;
      position:absolute;
      right:0;
      top: 0;
      margin-right: -1.25em;
      margin-top: -.4em;
    }
  }

  ${ /** Fit to common screens */''}
  @media screen and (min-width: 370px), @media screen and (min-width: 768px), @media screen and (min-width: 996px) {
    #phase_prototype {
      width: 11em;
    }
    #phase_framework, #phase_multichain {
      width: 22em;
    }
    .features_box {
      max-width: 12.5em;
      min-width: 11em;
      margin: auto;
    }
    .feature_complete, .feature_incomplete {
      font-size: .75em;
    }
  } 
  @media screen and (min-width: 1200px) {
    #phase_prototype {
      width: 13em;
    }
    #phase_framework, #phase_multichain {
      width: 26em;
    }
    .features_box {
      min-width: 13em;
      max-width: 14em;
      margin: auto;
    }
    .feature_complete, .feature_incomplete {
      font-size: .9em;
    }
  }

  ${ /** Constants */''}
  #phase_prototype, #phase_framework, #phase_multichain {
    border-radius: .4em;
    display: flex;
    flex-direction: column;
    padding-bottom: .25em;
  }

  #roadmap_arrow {
    position: relative;
  }
  .title_present {
    background: #222222;
    color: #FFFFFF;
    height: 2em;
    line-height: 2em;
    cursor: default;
  }
  .title_future {
    background: #FFFFFF;
    color: #000000;
    height: 2em;
    line-height: 2em;
    cursor: default;
  }
  .features_container {
    display:flex;
    flex-wrap: nowrap;
  }
  .feature_complete, .feature_incomplete {
    width: 14em;
    margin: auto;
    margin-bottom: .5em;
    height: 1.8em;
  }
  .feature_complete {
    background: grey;
    color: white;
    border-radius: .3em;
    border: none;
  }
  .feature_incomplete {
    background: white;
    color: black;
    border-radius: .3em;
    border: .1px grey solid;
  }

  `;

  return (
    <div className={styles.section_roadmap}>
      <div id='roadmap_wrapper' data-aos="fade-up">
        <h1>🛣 v2 Roadmap</h1>
        <div id='roadmap_container'>
          <div id='roadmap_box'>

            <div id='phase_prototype' data-aos="fade-right">
              <h4 className='title_present'>Prototype</h4>
              <p>Proof of Concept</p>
              <div className='features_container'>
                <div className='features_box'>
                  <div className='feature_complete'>🏦 Treasury Management</div>
                  <div className='feature_complete'>🏵 Gov Token Creation</div>
                  <div className='feature_incomplete'>🗳 Basic Voting</div>
                </div>
              </div>
            </div>
            <div className='phase_marker' data-aos="fade-right">
              <div className='marker_title'>
                <h3>MVP</h3>
              </div>
              <div className="marker_line"></div>
            </div>
            
            <div id='phase_framework' data-aos="fade-right">
              <h4 className='title_future'>DAO Framework on Optimism</h4>
              <p>Team + Community Collaboration</p>
              <div className='features_container'>
                <div className='features_box'>
                  <div className='feature_incomplete'>✅ Simple Majority Vote</div>
                  <div className='feature_incomplete'>🔒 Token Staking</div>
                  <div className='feature_incomplete'>🎛 Token Distribution</div>
                </div>
                <div className='features_box'>              
                  <div className='feature_incomplete'>⛓ On-Chain Execution</div>
                  <div className='feature_incomplete'>📥 Delegation</div>
                  <div className='feature_incomplete'>🗽 Community Dashboard</div>
                </div>
              </div>
            </div>

            <div className='phase_marker' data-aos="fade-right">
              <div className='marker_title'>
                <h3>v2</h3>
              </div>
              <div className="marker_line"></div>
            </div>

            <div id='phase_multichain' data-aos="fade-right">
              <div id='roadmap_arrow'>              
                <h4 className='title_future'>Multichain Deployment</h4>
                <div id='shape_arrow'></div>
              </div>
              <p>Fully Decentralized Organization</p>
              <div className='features_container'>
                <div className='features_box'>
                  <div className='feature_incomplete'>📈 Token Launchpad</div>
                  <div className='feature_incomplete'>🌉 Layer 2 Bridges</div>
                  <div className='feature_incomplete'>🐸 Identity Integration</div>
                </div>
                <div className='features_box'>
                  <div className='feature_incomplete'>🗣 Social Tools</div>
                  <div className='feature_incomplete'>🔌 Custom DAO Integrations</div>
                  <div className='feature_incomplete'>🏛 Voting Module Library</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <style>{CSS}</style>
    </div>
  );
}

export default RoadmapSection;
