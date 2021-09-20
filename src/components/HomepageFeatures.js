import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
// Tech affairs is an inclusive environemnt for individuals who are passionate about using technology 
// to improve themselves and the life of others.

const FeatureList = [
  {
    title: 'Community',
    Svg: require('../../static/img/undraw_community.svg').default,
    description: (
      <>
        Tech Affairs is a tight-knit group of welcoming individuals who are passionate
         about all things tech.
      </>
    ),
  },
  {
    title: 'Development',
    Svg: require('../../static/img/undraw_development.svg').default,
    description: (
      <>
        In this committee, you're provided the opportunity to develop technical,
         leadership, and presentation skills by working on projects that matter.
      </>
    ),
  },
  {
    title: 'Innovation',
    Svg: require('../../static/img/undraw_code.svg').default,
    description: (
      <>
        Tech Affairs drives innovation in SHPE by creating efficient and user-friendly
         products that change the way we do things. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
