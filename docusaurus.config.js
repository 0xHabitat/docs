// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Habitat',
  tagline: 'Start your organization on Optimism',
  url: 'https://habitat/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '0xHabitat', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // TODO: Integrate Algolia search - https://docusaurus.io/docs/search

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs', // /docs landingpage controller
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/0xHabitat/docs/tree/main',
        },
        blog: {
          blogTitle: 'Habitat Blog',
          blogDescription: 'Community updates and more!',
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{
        name: 'habitat, 0xhabitat, crypto, blockchain, dao, daos, communities, governance, govern, voting, vote, votes, ethereum, eth, optimism, rollup, diamond, diamonds, diamond standard, modules, library, facets, facet, code, solidity, contract, contracts, smart contracts, smart contract, evm, nft, token, tokens, economics', 
        content: 'docs, documentation, documents, homepage, home, index, community, main, mainpage, blog, discord, github, twitter, blog, substack, sourcecode, code, roadmap, info'}],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: ' ',
          darkIconStyle: {
            marginLeft: '1px',
          },
          lightIcon: ' ',
          lightIconStyle: {
            marginLeft: '1px',
          },
        },
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: '🌱 Habitat',
          src: 'img/v2-logo-full.svg',
          srcDark: 'img/v2-logo-full_dark.svg',
          href: '/',
          target: '_self',
          width: 200,
          height: 32,
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'intro',
            label: 'Docs',
            className: 'navbar_item',
          },
          { 
            to: 'https://0xhabitat.substack.com/', 
            label: 'Blog', 
            position: 'left',
            className: 'navbar_item',
          },
          // {
          //   type: 'docSidebar',
          //   position: 'left',
          //   sidebarId: 'intro',
          //   label: 'intro',
          // },
          // {
          //   type: 'search',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/0xHabitat',
            // label: 'GitHub',
            className: 'navbar_github',
            'aria-label': 'GitHub repository',
            position: 'right'
          },
          {
            href: 'https://twitter.com/0xhabitat',
            // label: 'Twitter',
            className: 'navbar_twitter',
            'aria-label': 'Twitter posts',
            position: 'right'
          },
          {
            href: 'https://discord.com/invite/Pqdj73UTt6',
            // label: 'Discord',
            className: 'navbar_discord',
            'aria-label': 'Discord community',
            position: 'right'
          },

        ],
      },
      footer: {
        logo: {
          alt: '🌱 Habitat',
          src: 'img/v2-logo-full.svg',
          srcDark: 'img/v2-logo-full_dark.svg',
          href: '/',
          width: 200,
          height: 32,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image: 'https://0xhabitat.org/lib/assets/preview-v2.jpg',
    }),
};

module.exports = config;
