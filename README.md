# CKAN Docs: Deployments and more!
Welcome to the CKAN Deployments! This repository serves as a comprehensive guide for deploying CKAN in various environments, including through source code, Docker, Kubernetes, API documentation, additional information, and tips in a a Docusaurus [^1] website.

## Contents
- [CKAN Docs: Deployments and more!](#ckan-docs-deployments-and-more)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Deployment Methods](#deployment-methods)
  - [API information](#api-information)
  - [Doc deployment](#doc-deployment)
  - [Start your site](#start-your-site)
  - [Translations](#translations)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction
CKAN [^2] is a powerful open-source data management system that makes it easy to publish, share, and use data. This repository aims to provide detailed documentation to facilitate CKAN deployments in different environments.

## Deployment Methods
This section covers various methods for deploying CKAN:

- **Source Code**: Deploying CKAN from source code (RHEL, Debian, CentOS, SLES) using [Ansible](https://www.ansible.com/).
- **Docker**: Deployment of CKAN using Docker containers via Docker Compose.
- **Kubernetes**: Deploying CKAN on Kubernetes clusters.

## API information
Here you can find complete documentation for the CKAN API, including endpoints, parameters and examples of use with Swagger [^3].

## Doc deployment
This documentation is deployed using GitHub Pages. To deploy the documentation locally run the following commands:

```bash
# To preview your changes as you edit the files, you can run a local development server that will serve your website and reflect the latest changes.
npm install
npm run start


#To build the website:
npm run build


# It is important to test your build locally before deploying it for production. Docusaurus provides a docusaurus serve command for that:
npm run serve
```

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

> [!TIP]
>The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.
>
>The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/. `npm run start -- --locale es` to test the Spanish locale.
>
>Open `docs/intro.md` and edit some lines: the site **reloads automatically** and displays your changes.

## Translations
1. Configure your site and add the navbar item of type `localeDropdown` so that users can select the locale they want :
```js
const config: Config = {
  title: 'CKAN Docs',
  tagline: 'Deployments and more!',
  favicon: 'img/favicon.ico',

  ...

    // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'fa'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      fa: {
        direction: 'rtl',
      },
    },
  },

  ...

  themeConfig: {
    navbar: {
      items: [
        {
          type: 'localeDropdown',
          position: 'left',
        },
      ],
    },
  },
};
```

2. Run the `write-translations` command:

   ```bash
   npm run write-translations -- --locale fr
   ```

  It will extract and initialize the JSON translation files that you need to translate. The code.json file at the root includes all translation API calls extracted from the source code, which could either be written by you or provided by the themes, some of which may already be translated by default.

3. Copy your docs Markdown files from `docs/` to `i18n/fr/docusaurus-plugin-content-docs/current`, and translate them:

  ```bash
  mkdir -p i18n/fr/docusaurus-plugin-content-docs/current
  cp -r docs/** i18n/fr/docusaurus-plugin-content-docs/current
  ```

3. Translate the `mdx` files.

> [!TIP]
> More information about translation and tutorials from i18n in the Docusaurus documentation: [Docusaurus. Internationalisation](https://docusaurus.io/docs/i18n/tutorial)

## Contributing
Contributions to this documentation repository are welcome! If you have suggestions, improvements, or would like to report issues, please feel free to submit a pull request or open an issue.

## License
This documentation is licensed under the [GNU Affero General Public License (AGPL)](https://www.gnu.org/licenses/agpl-3.0.html).

[^1]: [Docusaurus](https://docusaurus.io/)
[^2]: [CKAN: An open source DMS](https://ckan.org/)
[^3]: [Swagger](https://swagger.io/).
