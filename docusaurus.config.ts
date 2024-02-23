import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
const organizationName = 'mjanez' // Usually your GitHub org/user name.
const projectName = 'ckan-docs' // Usually your repo name.
const deploymentBranch = 'gh-pages'

const config: Config = {
  title: 'CKAN Docs',
  tagline: 'Deployments and more!',
  favicon: 'img/favicon.ico',
  
  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,
  organizationName: `${organizationName}`, // Usually your GitHub org/user name.
  projectName: `${projectName}`, // Usually your repo name.
  deploymentBranch: `${deploymentBranch}`,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Serve the docs at the site's root
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/ckan-docker/ckan-docker-logo.png',
    navbar: {
      title: 'CKAN Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ckan-docker/ckan-docker-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/${organizationName}/${projectName}/blob/main/CKAN_Docs.pdf',
          label: 'DownloadPdf',
          position: 'right',
        },
        {
          href: 'https://github.com/${organizationName}/${projectName}',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/${organizationName}/${projectName}',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CKAN Docs!. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
