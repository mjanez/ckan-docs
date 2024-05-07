import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  sidebar: {
    'Overview': [{
      type: 'doc',
      label: 'CKAN deployments',
      id: 'intro'
    },],
    'Installation Guides': {
      'Docker with Docker Compose': [
        'installation/docker/intro', 
        'installation/docker/requirements',
        'installation/docker/ckan',
        'installation/docker/ckan-enhancements',
        'installation/docker/ckan-addons'
      ],
      'Ansible': [
        'installation/ansible/intro', 
        'installation/ansible/requirements',
        'installation/ansible/ckan',
      ],
    },
    'User guides': {
      'API': ['api/api'],
    },
    'Development': {
      'CKAN': [ 
        'development/ckan/intro'
      ],
      'Extensions': [
        'development/extensions/harvesters', 
      ],
    },
  },
};

export default sidebars;
