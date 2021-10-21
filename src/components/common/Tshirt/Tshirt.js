import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Tshirt.module.scss';

const Component = ({type, featuresDB}) => {

  useEffect(() => {
    type === 'common' ? console.log(featuresDB.colors) : console.log('custom..');
  });

  const [colors, setColors] = useState({
    main: 'white',
    mainStripe: 'transparent',
    logo: 'transparent',
    sleeveL: 'white',
    sleeveR: 'white',
    stripeL: 'transparent',
    stripeR: 'transparent',
    collarStripe: 'transparent',
  });

  const colorSource = type === 'common' ? featuresDB.colors : colors; 

  return (
    <article className={styles.root}>
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
  type: PropTypes.string,
  featuresDB: PropTypes.object,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Tshirt,
  // Container as Tshirt,
  Component as TshirtComponent,
};
