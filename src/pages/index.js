import React/* , { useEffect, lazy, Suspense } */ from 'react';
// import clsx from 'clsx';
import Layout from '@theme/Layout';
import Loadable from '@docusaurus/react-loadable'
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import styles from './index.module.css';
// import {useLocation} from '@docusaurus/router';
// import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import CoverSection from './sections/CoverSection'
// import LandingPage from './LandingPage';
const LandingPage = Loadable({
  loader: () => import('./LandingPage'),
  loading: () => <div>Loading...</div>
});

export default function Home() {

  // const context = useDocusaurusContext();
  // const { siteConfig = {} } = context;
  
  return (
    <Layout
      title='Home'
      description="Description will go into a meta tag in <head />">
        <CoverSection />
        <LandingPage />
    </Layout>
  );
}


