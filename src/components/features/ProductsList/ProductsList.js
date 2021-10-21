import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { products as featuresFromDB } from '../../../data/dbProducts'; // from store -> from DB Api
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductsList.module.scss';

import { Product } from '../Product/Product';

const Component = ({className, variant}) => {

  useEffect(() => {
    // console.log(tShirtsFeatures);
  });

  return (
    <div>
      {variant === 'all' &&
        <article className={clsx(className, styles.root)}>
          {featuresFromDB.map(featuresDB => ( //filtere feturesDB in store (features.id < 4)
            <Product key={featuresDB.id} type='common' featuresDB={featuresDB}/>         
          ))}
        </article>
      }
      {variant === 'top' &&
        <article className={clsx(className, styles.root)}>
          <h1 className={styles.title}>TOP 3</h1>
          {featuresFromDB.map(featuresDB => (
            <Product key={featuresDB.id} type='common' featuresDB={featuresDB}/>         
          ))}
        </article>
      }
    </div>
  );
};

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
  Component as ProductsList,
  // Container as ProductsList,
  Component as ProductsListComponent,
};
