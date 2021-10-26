import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { caDelFromCart } from '../../../redux/cartRedux.js';

import { TiDocumentText } from 'react-icons/ti';

import styles from './CartProduct.module.scss';

import { Button } from '../../common/Button/Button';
import { Column } from '../../layout/Column/Column';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';
import { Row } from '../../layout/Row/Row';
import { Tshirt } from '../../common/Tshirt/Tshirt';
import { CartProductAmount } from '../CartProductAmount/CartProductAmount.js';

const Component = ({product, delFromCartDispatch}) => {

  const totalCost = product.price * product.amount;

  return (
    <Row variant={'verTop'}>

      <Column>
        <Button variant='cartGlass' onClick={() => delFromCartDispatch(product)}>
          <GlassWrapper>
            <div className={styles.buttonContent}>
              <h2>x</h2>
            </div>
          </GlassWrapper>
        </Button>

        <GlassWrapper>
          <div className={styles.blindContent} style={{height: '45px'}}>
            <h2>{product.id}</h2>
          </div>
        </GlassWrapper>

        <Button variant='cartGlass'>
          <GlassWrapper>
            <div className={styles.buttonContent}>
              <h2>
                <TiDocumentText style={{ marginTop: '5px' }} />
              </h2>
            </div>
          </GlassWrapper>
        </Button>

      </Column>

      <Column flex={'f6'}>
        <GlassWrapper>
          <div className={styles.product}>
            <Column flex={'f6'}>
              <Tshirt view='cart' type='common' featuresDB={product}/>
            </Column>
          </div>
        </GlassWrapper>
      </Column>

      <Column>
        <GlassWrapper>
          <div className={styles.content}>
            <h3>cost: {product.price}$</h3>
          </div>
        </GlassWrapper>
        <GlassWrapper>
          <div className={styles.content}>
            <h3>total: {totalCost}$</h3>
          </div>
        </GlassWrapper>
        <GlassWrapper>
          <div className={styles.blindContent} style={{height: '23px'}}></div>
        </GlassWrapper>
      </Column>

      <CartProductAmount product={product}/>

    </Row>
  );
};

Component.propTypes = {
  product: PropTypes.object,
  delFromCartDispatch: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = dispatch => ({
  delFromCartDispatch: data => dispatch(caDelFromCart(data)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  // Component as CartProduct,
  Container as CartProduct,
  Component as CartProductComponent,
};
