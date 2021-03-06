import React from 'react';
import PropTypes from 'prop-types';

import styles from './Tshirt.module.scss';

const Component = ({view, type, featuresDB, colors}) => {

  // const [colors, setColors] = useState({
  //   main: 'white',
  //   mainStripe: 'transparent',
  //   logo: 'transparent',
  //   sleeveL: 'white',
  //   sleeveR: 'white',
  //   stripeL: 'red',
  //   stripeR: 'transparent',
  //   collarStripe: 'transparent',
  // });

  const colorSource = type === 'common' ? featuresDB.colors : colors; 

  return (
    <article className={`${view === 'home' && styles.root} ${view === 'cart' && styles.rootInCart} ${view === 'create' && styles.rootInCreate}`}>
      <div className={styles.tShirt}>
        <div
          style={{ backgroundColor: colorSource.main }}
          className={styles.mainPart}
        >
          <div
            style={{ backgroundColor: colorSource.mainStripe }}
            className={`${styles.stripe} ${styles.mainPartStripe}`}
          ></div>
          <div
            style={{ color: colorSource.logo }}
            className={`${styles.stripe} ${styles.logo}`}
          >
            W
          </div>
          <div
            style={{ backgroundColor: colorSource.sleeveL }}
            className={styles.sleeveL}
          >
            <div
              style={{ backgroundColor: colorSource.stripeL }}
              className={`${styles.stripe} ${styles.stripeL}`}
            ></div>
          </div>
          <div
            style={{ backgroundColor: colorSource.sleeveR }}
            className={styles.sleeveR}
          >
            <div
              style={{ backgroundColor: colorSource.stripeR }}
              className={`${styles.stripe} ${styles.stripeR}`}
            ></div>
          </div>
          <div className={styles.collar}>
            <div
              style={{ backgroundColor: colorSource.collarStripe }}
              className={`${styles.stripe} ${styles.collarStripeL}`}
            ></div>
            <div
              style={{ backgroundColor: colorSource.collarStripe }}
              className={`${styles.stripe} ${styles.collarStripeR}`}
            ></div>
          </div>
        </div>
      </div>
    </article>
  );
};

Component.propTypes = {
  view: PropTypes.string,
  type: PropTypes.string,
  featuresDB: PropTypes.object,
  colors: PropTypes.object,
};

export {
  Component as Tshirt,
  Component as TshirtComponent,
};
