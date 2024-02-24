import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'CKAN in 5 minutes!',
    Svg: require('@site/static/img/ckan-docker/ckan-docker-logo.svg').default,
    description: (
      <>
        The rapid deployment of CKAN with Docker and Docker Compose is documented.
      </>
    ),
  },
  {
    title: 'API Help',
    Svg: require('@site/static/img/homepage/api-svgrepo-com.svg').default,
    description: (
      <>
        Documentation and tips to help you get using the CKAN API.
      </>
    ),
  }
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
