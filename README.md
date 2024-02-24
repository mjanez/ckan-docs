# CKAN Docs: Deployments and more!
Welcome to the CKAN Deployments! This repository serves as a comprehensive guide for deploying CKAN in various environments, including through source code, Docker, Kubernetes, API documentation, additional information, and tips in a a Docusaurus [^1] website.

## Contents
1. [Introduction](#introduction)
2. [Deployment Methods](#deployment-methods)
3. [API Documentation](#api-documentation)
4. [Additional Information](#additional-information)
5. [Contributing](#contributing)
6. [License](#license)

## Introduction
CKAN [^2] is a powerful open-source data management system that makes it easy to publish, share, and use data. This repository aims to provide detailed documentation to facilitate CKAN deployments in different environments.

## Deployment Methods
This section covers various methods for deploying CKAN:

- **Source Code**: Deploying CKAN from source code (RHEL, Debian, CentOS, SLES).
- **Docker**: Deployment of CKAN using Docker containers via Docker Compose.
- **Kubernetes**: Deploying CKAN on Kubernetes clusters.

## API information
Here you can find complete documentation for the CKAN API, including endpoints, parameters and examples of use with Swagger [^3].

## Doc deployment
This documentation is deployed using GitHub Pages. To deploy the documentation, run the following commands:

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
>The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.
>
>Open `docs/intro.md` and edit some lines: the site **reloads automatically** and displays your changes.

## Contributing
Contributions to this documentation repository are welcome! If you have suggestions, improvements, or would like to report issues, please feel free to submit a pull request or open an issue.

## License
This documentation is licensed under the [GNU Affero General Public License (AGPL)](https://www.gnu.org/licenses/agpl-3.0.html).

[^1]: [Docusaurus](https://docusaurus.io/)
[^2]: [CKAN: An open source DMS](https://ckan.org/)
[^3]: [Swagger](https://swagger.io/).
