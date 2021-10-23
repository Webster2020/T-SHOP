import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// import { products as featuresFromDB } from '../../../data/dbProducts'; // from store -> from DB Api

import { connect } from 'react-redux';
import { getAll, getTopThree } from '../../../redux/productRedux.js';

import styles from './ProductsList.module.scss';

import { Product } from '../Product/Product';
import { Row } from '../../layout/Row/Row';

const Component = ({variant, productsAll, productsTopThree}) => {

  useEffect(() => {
    console.log('products');
    // console.log(productsAll);
    // console.log(productsTopThree);
  });

  return (
    <article>
      {variant === 'top' &&
        <Row variant='wrap' justify='sb'>
          <h1 className={styles.title}>TOP 3</h1>
          {productsTopThree.map(featuresDB => (
            <Product key={featuresDB.id} view='home' type='common' featuresDB={featuresDB}/>         
          ))}
        </Row>
      }
      {variant === 'all' &&
        <Row variant='wrap' justify='sb'>
          <h1 className={styles.title}>PRODUCTS</h1>
          {productsAll.map(featuresDB => (
            <Product key={featuresDB.id} view='home' type='common' featuresDB={featuresDB}/>         
          ))}
        </Row>
      }
    </article>
  );
};

Component.propTypes = {
  variant: PropTypes.string,
  productsAll: PropTypes.array,
  productsTopThree: PropTypes.array,
};

const mapStateToProps = state => ({
  productsAll: getAll(state),
  productsTopThree: getTopThree(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as ProductsList,
  Container as ProductsList,
  Component as ProductsListComponent,
};
