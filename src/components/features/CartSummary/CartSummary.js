import React from 'react';
// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CartSummary.module.scss';

import { Row } from '../../layout/Row/Row';
import { Column } from '../../layout/Column/Column';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';

const Component = () => (
  <GlassWrapper>
    <div className={styles.summaryContent}>
      <Row>
        <Column justify={'horStart'}>
          <h4>PRODUCTS COST:</h4>
        </Column>
        <Column justify={'horEnd'}>
          <h4>180.00$</h4>
        </Column>
      </Row>
      <Row>
        <Column justify={'horStart'}>
          <h4>SHIPPING COST:</h4>
        </Column>
        <Column justify={'horEnd'}>
          <h4>0.00$</h4>
        </Column>
      </Row>
      <Row>
        <Column justify={'horStart'}>
          <h3>TOTAL COST:</h3>
        </Column>
        <Column justify={'horEnd'}>
          <h3>180.00$</h3>
        </Column>
      </Row>
    </div>
  </GlassWrapper>
);

// Component.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
// };

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CartSummary,
  // Container as CartSummary,
  Component as CartSummaryComponent,
};
