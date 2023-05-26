import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    src: require('../../static/img/fic.png').default,
    description: (
      <>
        Simply invite Archivist to your Discord server and it will start recognizing
        links from Archive of Our Own immediately.
      </>
    ),
  },
  {
    title: 'Info at a Glance',
    src: require('../../static/img/imgpreview.png').default,
    description: (
      <>
        With a colored sidebar that shows fic rating, recognizable icons from AO3,
        and a preview of fanart in the fic, you can easily see important info at a
        glance.

      </>
    ),
  },
  {
    title: 'Share Your Bio',
    src: require('../../static/img/user.png').default,
    description: (
      <>
        Need to post an intro to a server? Did someone ask for a link to all your 
        fics? Drop the link to your user profile, and Archivist will do the rest 
        for you!
      </>
    ),
  },
  {
    title: 'Get A Series Summary',
    src: require('../../static/img/series.png').default,
    description: (
      <>
        Find out if a Series is complete, when it was last updated, how many works 
        there are, and view any series notes or descriptions the authors have 
        provided.
      </>
    ),
  },
  {
    title: 'Advanced Features',
    src: require('../../static/img/settings.png').default,
    description: (
      <>
        Supports links from collections, multiple authors, multiple series, fully
        customizable embeds, and other convenient moderation features.
      </>
    ),
  },
];

function Feature({src, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} className={styles.featureSvg} alt={title} />
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
