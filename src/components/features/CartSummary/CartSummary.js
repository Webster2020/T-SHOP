import React from 'react';
// import PropTypes from 'prop-types';
import shortid from 'shortid';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CartSummary.module.scss';

import { Row } from '../../layout/Row/Row';
import { Column } from '../../layout/Column/Column';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';

const Component = () => {

  const summaryData = [
    {
      title: 'PRODUCT 1 COST:',
      value: 180.00,
    },
    {
      title: 'PRODUCT 2 COST:',
      value: 210.00,
    },
    {
      title: 'SHIPPING COST:',
      value: 0.00,
    },
  ];

  const summaryTotal = {
    title: 'TOTAL COST:',
    value: summaryData.map(el => el.value).reduce((a,b) => a + b),
  };

  return (
    <GlassWrapper>
      <div className={styles.summaryContent}>

        {summaryData.map(el => (
          <Row key={shortid.generate()}>
            <Column justify={'horStart'}>
              <h4 className={styles.summaryElem}>{el.title}</h4>
            </Column>
            <Column justify={'horEnd'}>
              <h4 className={styles.summaryElem}>{el.value}$</h4>
            </Column>
          </Row>
        ))}

        <Row>
          <Column justify={'horStart'}>
            <h3 className={styles.summaryTot}>{summaryTotal.title}</h3>
          </Column>
          <Column justify={'horEnd'}>
            <h3 className={styles.summaryTot}>{summaryTotal.value}$</h3>
          </Column>
        </Row>

      </div>
    </GlassWrapper>
  );
};

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
