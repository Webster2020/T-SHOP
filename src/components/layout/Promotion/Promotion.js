import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Promotion.module.scss';

import { Bricks } from '../../features/Bricks/Bricks';

const Component = ({className, variant}) => (
  <div className={clsx(className, styles.root)}>

    {variant === 'promo' && 
      (
        <div className={styles.sectionRow}>
          <div className={`${styles.sectionCol} ${styles.sectionPromo}`}>
            <h1>CREATE</h1>
            <h1>CUSTOM</h1>
            <h1>PRODUCT</h1>
          </div>
          <div className={styles.sectionCol}>
            <Bricks />
          </div>
        </div>
      )
    }

    {variant === 'benefits' && 
      (
        <div className={styles.sectionRow}>
          <div className={`${styles.sectionCol} ${styles.sectionBenefits}`}>
            <h1>FREE SHIPPING</h1>
          </div>
          <div className={`${styles.sectionCol} ${styles.sectionBenefits}`}>
            <h1>60-DAYS REFUND</h1>
          </div>
          <div className={`${styles.sectionCol} ${styles.sectionBenefits}`}>
            <h1>24/7 SUPPORT</h1>
          </div>
        </div>
      )
    }

  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Promotion,
  // Container as Promotion,
  Component as PromotionComponent,
};
