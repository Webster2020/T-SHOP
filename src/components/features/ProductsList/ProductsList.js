import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { products as featuresFromDB } from '../../../data/dbProducts'; // from store -> from DB Api
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductsList.module.scss';

import { Product } from '../Product/Product';
import { Row } from '../../layout/Row/Row';

const Component = ({variant}) => {

  useEffect(() => {
    // console.log(tShirtsFeatures);
  });

  return (
    <article>
      {variant === 'top' &&
        <Row variant='wrap' justify='sb'>
          <h1 className={styles.title}>TOP 3</h1>
          {featuresFromDB.map(featuresDB => (
            <Product key={featuresDB.id} view='home' type='common' featuresDB={featuresDB}/>         
          ))}
        </Row>
      }
      {variant === 'all' &&
        <Row variant='wrap' justify='sb'>
          <h1 className={styles.title}>PRODUCTS</h1>
          {featuresFromDB.map(featuresDB => ( //filtere feturesDB in store (features.id < 4)
            <Product key={featuresDB.id} view='home' type='common' featuresDB={featuresDB}/>         
          ))}
        </Row>
      }
    </article>
  );
};

Component.propTypes = {
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
