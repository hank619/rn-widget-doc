import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        RN-Widget is coding with TypeScript, you only need to add several dependencies to your project.
      </>
    ),
  },
  {
    title: 'Powerful',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        RN-Widget is a powerful widget library for React Native. It has a lot of widgets that usually used.
      </>
    ),
  },
  {
    title: 'With Form Embeded In',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        RN-Widget has Form embed in, it acts quite like the action of Form of <a href="https://ant.design/components/overview/">AntD</a>. So you don't have much cost to learn to use it.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
