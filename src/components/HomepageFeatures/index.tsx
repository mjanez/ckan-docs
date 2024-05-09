import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({message: 'CKAN in 5 minutes!'}),
    Svg: require('@site/static/img/ckan-docker/ckan-docker-logo.svg').default,
    description: translate({message: 'Get ready to deploy CKAN with Docker and Ansible.'}),
  },
  {
    title: translate({message: 'Installation Guides'}),
    Svg: require('@site/static/img/homepage/map-svgrepo-com.svg').default,
    description: translate({message: 'Guides for installing CKAN on various platforms and environments.'}),
  },
  {
    title: translate({message: 'API Help'}),
    Svg: require('@site/static/img/homepage/api-svgrepo-com.svg').default,
    description: translate({message: 'Documentation and tips to help you get using the CKAN API.'}),
  }
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img">
         </Svg>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3"><Translate>{title}</Translate></Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}