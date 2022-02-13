import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import clsx from 'clsx';

let CSS = `
#roadmap_wrapper {
  display:block;
  position: relative;
  width:95%;
  margin: auto;
  z-index: 1;
  text-align: center;
}

@media screen and (min-width: 300px) {
  #roadmap_container {
    margin-left: 0;
  }
  #roadmap_box {
    justify-content: flex-start;
    align-content: flex-start;
    margin: auto;
    max-width: 35em;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    margin-top: -4em;
    position: relative;
  }
  .phase_marker {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3em;
    margin: auto;
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: -6em;
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

  #phase_prototype {
    background: rgba(0, 0, 0, 0.1);
  }
  #phase_framework {
    background: rgba(0, 0, 0, 0.1);
  }
  #phase_multichain {
    background: rgba(0, 0, 0, 0.1);
  }

  #shape_arrow {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  #roadmap_container {
    margin-left: 7.5em;
  }
  #roadmap_box {
    justify-content: flex-start;
    align-content: flex-start;
    margin: auto;
    max-width: 35em;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    margin-top: -4em;
    position: relative;
  }
  .phase_marker {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3em;
    margin: auto;
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: -6em;
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

  #phase_prototype {
    background: rgba(0, 0, 0, 0.1);
  }
  #phase_framework {
    background: rgba(0, 0, 0, 0.1);
  }
  #phase_multichain {
    background: rgba(0, 0, 0, 0.1);
  }

  #shape_arrow {
    display: none;
  }
}


@media screen and (min-width: 1080px) {
  #roadmap_container {
    margin-left: 0;
  }
  #roadmap_box {
    justify-content: center;
    align-content: center;
    margin: auto;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 4em;
    margin-top: 0;
  }
  .phase_marker {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 4em;
    height: 10em;
    margin: auto;
    margin-top:0;
    margin-left: -1.25em;
    margin-right: -1.25em;
    margin-bottom: 0;
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
  #phase_prototype {
    background: none;
  }
  #phase_framework {
    background: none;
  }
  #phase_multichain {
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



#roadmap_arrow {
  position: relative;
}

#phase_prototype {
  border-radius: .4em;
  margin-top: 6em;
  width: 13em;
  padding-bottom: .25em;
}
#phase_framework {
  border-radius: .4em;
  margin-top: 6em;
  width: 25em;
  padding-bottom: .25em;
}
#phase_multichain {
  border-radius: .4em;
  margin-top: 6em;
  width: 25em;
  padding-bottom: .25em;
}
.title_present {
  background: #222222;
  color: #FFFFFF;
  height: 2em;
  line-height: 2em;
}
.title_future {
  background: #FFFFFF;
  color: #000000;
  height: 2em;
  line-height: 2em;
}
.feature_complete {
  background: grey;
  border-radius: .3em;
  border: none;
  width: 14em;
  margin: .4em;
  height: 1.8em;
}
.feature_incomplete {
  background: white;
  color: black;
  border-radius: .3em;
  border: .1px grey solid;
  width: 14em;
  margin: .4em;
  height: 1.8em;
}
`;

function RoadmapSection() {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.section_roadmap}>
      <div id='roadmap_wrapper'>
        <h1>🛣 v2 Roadmap</h1>
        <div id='roadmap_container'>
          <div id='roadmap_box'>

            <div id='phase_prototype'>
              <h4 className='title_present'>Prototype</h4>
              <p>Proof of Concept</p>
              <td>
                <button className='feature_complete'>🏦 Treasury Management</button>
                <button className='feature_complete'>🏵 Gov Token Creation</button>
                <button className='feature_incomplete'>🗳 Basic Voting</button>
              </td>
            </div>
            <div className='phase_marker'>
              <div className='marker_title'>
                <h3>MVP</h3>
              </div>
              <div className="marker_line"></div>
            </div>
            
            <div id='phase_framework'>
              <h4 className='title_future'>DAO Framework on Optimism</h4>
              <p>Team + Community Collaboration</p>
              <td>
                <button className='feature_incomplete'>✅ Simple Majority Vote</button>
                <button className='feature_incomplete'>🔒 Token Staking</button>
                <button className='feature_incomplete'>🎛 Token Distribution</button>
              </td>
              <td>              
                <button className='feature_incomplete'>⛓ On-Chain Execution</button>
                <button className='feature_incomplete'>📥 Delegation</button>
                <button className='feature_incomplete'>🗽 Community Dashboard</button>
              </td>
            </div>

            <div className='phase_marker'>
              <div className='marker_title'>
                <h3>v2</h3>
              </div>
              <div className="marker_line"></div>
            </div>

            <div id='phase_multichain'>
              <div id='roadmap_arrow'>              
                <h4 className='title_future'>Multichain Deployment</h4>
                <div id='shape_arrow'></div>
              </div>
              <p>Fully Decentralized Organization</p>
              <td>
                <button className='feature_incomplete'>📈 Token Launchpad</button>
                <button className='feature_incomplete'>🌉 Layer 2 Bridges</button>
                <button className='feature_incomplete'>🐸 Identity Integration</button>
              </td>
              <td>
                <button className='feature_incomplete'>🗣 Social Tools</button>
                <button className='feature_incomplete'>🔌 Custom DAO Integrations</button>
                <button className='feature_incomplete'>🏛 Voting Module Library</button>
              </td>
            </div>

          </div>
        </div>
      </div>
      <style>{CSS}</style>
    </div>
  );
}

export default RoadmapSection;
