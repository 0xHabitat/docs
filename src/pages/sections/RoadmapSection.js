import React from 'react';
import styles from '../index.module.css';
import './RoadmapSection.css'

function RoadmapSection() {

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
    </div>
  );
}

export default RoadmapSection;
