import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import { TiDocumentText } from 'react-icons/ti';

import styles from './CartProduct.module.scss';

import { Row } from '../../layout/Row/Row';
import { Column } from '../../layout/Column/Column';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';
import { Button } from '../../common/Button/Button';
import { Tshirt } from '../../common/Tshirt/Tshirt';

const Component = () => (
  <Row variant={'verTop'}>
    <Column>
      <Button>
        <GlassWrapper>
          <div className={styles.buttonContent}>
            <h2>x</h2>
          </div>
        </GlassWrapper>
      </Button>
      <Button>
        <GlassWrapper>
          <div className={styles.buttonContent}>
            <h2>
              <TiDocumentText style={{ marginTop: '5px' }} />
            </h2>
          </div>
        </GlassWrapper>
      </Button>
      <GlassWrapper>
        <div className={styles.blindContent} style={{height: '45px'}}></div>
      </GlassWrapper>
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
          <h3>cost: 99$</h3>
        </div>
      </GlassWrapper>
      <GlassWrapper>
        <div className={styles.content}>
          <h3>total: 99$</h3>
        </div>
      </GlassWrapper>
      <GlassWrapper>
        <div className={styles.blindContent} style={{height: '23px'}}></div>
      </GlassWrapper>
    </Column>
    <Column>
      <Button>
        <GlassWrapper>
          <div className={styles.buttonAmountContent}>
            <h2>+</h2>
          </div>
        </GlassWrapper>
      </Button>
      <GlassWrapper>
        <div className={styles.buttonAmountContent}>
          <h2>0</h2>
        </div>
      </GlassWrapper>
      <Button>
        <GlassWrapper>
          <div className={styles.buttonAmountContent}>
            <h2>-</h2>
          </div>
        </GlassWrapper>
      </Button>
    </Column>
  </Row>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
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
