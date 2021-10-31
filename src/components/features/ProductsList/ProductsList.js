import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

// import { products as featuresFromDB } from '../../../data/dbProducts'; // from store -> from DB Api

import { connect } from 'react-redux';
import { getAll, getTopThree, getLiked, getFetchStatus, caFetchProducts } from '../../../redux/productRedux.js';

import styles from './ProductsList.module.scss';

import { Product } from '../Product/Product';
import { Row } from '../../layout/Row/Row';

const Component = ({
  variant, 
  productsAll, 
  productsTopThree, 
  productsLiked, 
  activeFetch,
  fetchProductsDispatch,
}) => {

  useEffect(() => {
    productsAll.length < 1 && !activeFetch && fetchProductsDispatch(productsAll, false, activeFetch);
  });

  return (
    <article>
      {!activeFetch &&
        (<div>
          {variant === 'top' &&
            <Row variant='wrap' justify='sb'>
              <h1 className={styles.title}>TOP 3</h1>
              {productsTopThree.map(featuresDB => (
                <Product key={shortid.generate()} view='home' type='common' featuresDB={featuresDB}/>         
              ))}
            </Row>
          }
          {variant === 'all' &&
            <Row variant='wrap' justify='sb'>
              <h1 className={styles.title}>PRODUCTS</h1>
              {productsAll.map(featuresDB => (
                <Product key={shortid.generate()} view='home' type='common' featuresDB={featuresDB}/>         
              ))}
            </Row>
          }
          {variant === 'liked' &&
            <Row variant='wrap' justify='sb'>
              <h1 className={styles.title}>Favourites</h1>
              {productsLiked.map(featuresDB => (
                <Product key={shortid.generate()} view='home' type='common' featuresDB={featuresDB} className='styles.scaleDown'/>         
              ))}
            </Row>
          }
        </div>)
      }
    </article>
  );
};

Component.propTypes = {
  variant: PropTypes.string,
  productsAll: PropTypes.array,
  productsTopThree: PropTypes.array,
  productsLiked: PropTypes.array,
  activeFetch: PropTypes.bool,
  fetchProductsDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  productsAll: getAll(state),
  productsTopThree: getTopThree(state),
  productsLiked: getLiked(state),
  activeFetch: getFetchStatus(state),
});

const mapDispatchToProps = dispatch => ({
  fetchProductsDispatch: (products, refetch, activeFetch) => dispatch(caFetchProducts(products, refetch, activeFetch)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as ProductsList,
  Component as ProductsListComponent,
};
