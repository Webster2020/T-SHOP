import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/cartRedux.js';

import styles from './CartProductsList.module.scss';

import { CartProduct } from '../CartProduct/CartProduct';
import { Column } from '../../layout/Column/Column';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';
import { Row } from '../../layout/Row/Row';

const Component = ({productsInCart}) => {

  useEffect(() => {
    console.log(productsInCart);
  });

  return (
    <div className={styles.root}>
      {productsInCart.length >0 ? 
        productsInCart.length > 0 && productsInCart.map((product, index) => (
          <CartProduct key={shortid.generate()} product={product} index={index}/>
        ))
        :
        <Row variant={'verTop'}>
          <Column>
            <GlassWrapper>
              <div className={styles.emptyCart}>
                <h2>Cart is empty</h2>
              </div>
            </GlassWrapper>
          </Column>
        </Row>
      }
    </div>
  );
};

Component.propTypes = {
  productsInCart: PropTypes.array,
};

const mapStateToProps = state => ({
  productsInCart: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as CartProductsList,
  Container as CartProductsList,
  Component as CartProductsListComponent,
};
