import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/cartRedux.js';

import styles from './CartSummary.module.scss';

import { Row } from '../../layout/Row/Row';
import { Column } from '../../layout/Column/Column';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';

const Component = ({productsInCart}) => {

  const shippingCost = {
    title: 'SHIPPING COST:',
    value: 0.00,
  };

  const summaryTotal = {
    title: 'TOTAL COST:',
    value: productsInCart.length > 0 ? productsInCart.map(el => el.price * el.amount).reduce((a,b) => a + b) : 0,
  };

  return (
    <GlassWrapper>
      <div className={styles.summaryContent}>

        {productsInCart.map((el, index) => (
          <Row key={shortid.generate()}>
            <Column justify={'horStart'} flex='f8'>
              <h4 className={styles.summaryElem}>{`${index + 1}. PRODUCT, ${el.amount} x ${el.price}$`}</h4>
              <h5 className={styles.summaryElemDesc}>{el.description}</h5>
            </Column>
            <Column justify={'horEnd'} flex='f4'>
              <h4 className={styles.summaryElem}>{el.price * el.amount}$</h4>
            </Column>
          </Row>
        ))}

        <Row>
          <Column justify={'horStart'} flex='f8'>
            <h4 className={styles.summaryElem}>{shippingCost.title}</h4>
          </Column>
          <Column justify={'horEnd'} flex='f4'>
            <h4 className={styles.summaryElem}>{shippingCost.value}$</h4>
          </Column>
        </Row>

        <Row>
          <Column justify={'horStart'} flex='f8'>
            <h3 className={styles.summaryTot}>{summaryTotal.title}</h3>
          </Column>
          <Column justify={'horEnd'} flex='f4'>
            <h3 className={styles.summaryTot}>{summaryTotal.value}$</h3>
          </Column>
        </Row>

      </div>
    </GlassWrapper>
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
  // Component as CartSummary,
  Container as CartSummary,
  Component as CartSummaryComponent,
};
