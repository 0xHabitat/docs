import React from 'react';
import Layout from '@theme/Layout';
import Loadable from '@docusaurus/react-loadable'
import CoverSection from './sections/CoverSection'

const LandingPage = Loadable({
  loader: () => import('./LandingPage'),
  loading: () => <div>Loading...</div>
});

export default function Home() {
  return (
    <Layout
      title='Home'
      description="Description will go into a meta tag in <head />">
        <CoverSection />
        <LandingPage />
    </Layout>
  );
}


