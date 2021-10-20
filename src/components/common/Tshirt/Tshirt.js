import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Tshirt.module.scss';

const Component = () => {

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

  return (
    <article className={styles.root}>
      <div className={styles.tShirt}>
        <div
          style={{ backgroundColor: colors.main }}
          className={styles.mainPart}
        >
          <div
            style={{ backgroundColor: colors.mainStripe }}
            className={`${styles.stripe} ${styles.mainPartStripe}`}
          ></div>
          <div
            style={{ color: colors.logo }}
            className={`${styles.stripe} ${styles.logo}`}
          >
            W
          </div>
          <div
            style={{ backgroundColor: colors.sleeveL }}
            className={styles.sleeveL}
          >
            <div
              style={{ backgroundColor: colors.stripeL }}
              className={`${styles.stripe} ${styles.stripeL}`}
            ></div>
          </div>
          <div
            style={{ backgroundColor: colors.sleeveR }}
            className={styles.sleeveR}
          >
            <div
              style={{ backgroundColor: colors.stripeR }}
              className={`${styles.stripe} ${styles.stripeR}`}
            ></div>
          </div>
          <div className={styles.collar}>
            <div
              style={{ backgroundColor: colors.collarStripe }}
              className={`${styles.stripe} ${styles.collarStripeL}`}
            ></div>
            <div
              style={{ backgroundColor: colors.collarStripe }}
              className={`${styles.stripe} ${styles.collarStripeR}`}
            ></div>
          </div>
        </div>
      </div>
    </article>
  );
};

// Component.propTypes = {
// };

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
