import React from 'react';
import Layout from '@theme/Layout';
import Loadable from '@docusaurus/react-loadable'
import CoverSection from './sections/CoverSection'
import loading from './loading.module.css';

const LandingPage = Loadable({
  loader: () => import('./LandingPage'),
  loading: () => 
  <div className={loading.loader}>
    <h1 className={loading.sliding}>🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏 🌎 🌍 🌏
    </h1>
  </div>
});

export default function Home() {
  return (
    <Layout
      title='Home'
      description="🌱 Build and scale your DAO">
        <CoverSection />
        <LandingPage />
    </Layout>
  );
}


