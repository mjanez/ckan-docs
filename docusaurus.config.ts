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

  plugins: [require.resolve('docusaurus-lunr-search')],

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
      logo: {
        alt: 'CKAN Docs: Deployments and more!',
        src: 'img/ckan-docker/ckan-docker-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sidebar',
          position: 'left',
          label: 'CKAN Docs',
        },
        {
          type: 'html',
          position: 'right',
          value: '<FAIcon icon="fa-brands fa-github" size="4x" />',
        },
        {
          href: `https://github.com/${organizationName}/${projectName}/blob/main/static/pdf/CKAN_Docs.pdf`,
          'aria-label': 'Download PDF',
          title: 'PDF Download',
          className: 'navbar__icon navbar__github',
          position: 'right',
          html: '<i class="fa fa-file-pdf-o"></i>',
        },
        {
          href: `https://github.com/${organizationName}/${projectName}`,
          'aria-label': 'GitHub repository',
          title: 'GitHub repository',
          className: 'navbar__icon navbar__github',
          position: 'right',
          html: '<i class="fa fa-github"></i>',
        },
        
        // Add a dropdown with locales
        {
          type: 'localeDropdown',
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
              label: 'CKAN Docs: Deployments and more!',
              to: '/intro',
            },
          ],
        },
        {
          title: 'More info',
          items: [
            {
              label: 'CKAN documentation',
              href: `https://docs.ckan.org/en/latest/contents.html`,
            },
            {
              label: 'CKAN - The open source DMS',
              href: `https://ckan.org/`,
            },
            {
              label: 'Open Knowledge Foundation',
              href: `https://okfn.org/`,
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
