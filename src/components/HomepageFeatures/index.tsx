import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    description: (
      <>
        RN-Widget is coding with TypeScript, you only need to add several dependencies to your project.
      </>
    ),
  },
  {
    title: 'Powerful',
    description: (
      <>
        RN-Widget is a powerful widget library for React Native. It has a lot of widgets that usually used.
      </>
    ),
  },
  {
    title: 'With Form Embeded In',
    description: (
      <>
        RN-Widget has Form embed in, it acts quite like the action of Form of <a href="https://ant.design/components/overview/">AntD</a>. So you don't have much cost to learn to use it.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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
