import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import { TiDocumentText } from 'react-icons/ti';

import styles from './CartProduct.module.scss';

import { Button } from '../../common/Button/Button';
import { Column } from '../../layout/Column/Column';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';
import { Row } from '../../layout/Row/Row';
import { Tshirt } from '../../common/Tshirt/Tshirt';

const Component = ({product}) => {

  const productCost = 99;
  const ammount = 1;
  const totalCost = productCost * ammount;
  const indexFromMap = 1;

  return (
    <Row variant={'verTop'}>

      <Column>
        <Button variant='cartGlass'>
          <GlassWrapper>
            <div className={styles.buttonContent}>
              <h2>x</h2>
            </div>
          </GlassWrapper>
        </Button>

        <GlassWrapper>
          <div className={styles.blindContent} style={{height: '45px'}}>
            <h2>{indexFromMap}</h2>
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
              <Tshirt view={'cart'} />
            </Column>
          </div>
        </GlassWrapper>
      </Column>

      <Column>
        <GlassWrapper>
          <div className={styles.content}>
            <h3>cost: {productCost}$</h3>
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

      <Column>
        <Button variant='cartGlass'>
          <GlassWrapper>
            <div className={styles.buttonAmountContent}>
              <h2>+</h2>
            </div>
          </GlassWrapper>
        </Button>
        <GlassWrapper>
          <div className={styles.buttonAmountContent}>
            <h2>{ammount}</h2>
          </div>
        </GlassWrapper>
        <Button variant='cartGlass'>
          <GlassWrapper>
            <div className={styles.buttonAmountContent}>
              <h2>-</h2>
            </div>
          </GlassWrapper>
        </Button>
      </Column>

    </Row>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  product: PropTypes.object,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CartProduct,
  // Container as CartProduct,
  Component as CartProductComponent,
};
