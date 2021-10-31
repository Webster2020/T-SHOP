import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getCost } from '../../../redux/cartRedux.js';

import styles from './ConfirmData.module.scss';

import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';
import { Row } from '../../layout/Row/Row'; 

const Component = ({cartValue}) => {

  return (
    <div className={styles.root}>
      <Row>
        <GlassWrapper>
          <h3 className={styles.orderValue}>Value of order: {cartValue}$</h3>
        </GlassWrapper>
      </Row>
    </div>
  );
};

Component.propTypes = {
  cartValue: PropTypes.func,
};

const mapStateToProps = state => ({
  cartValue: getCost(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as ConfirmData,
  Component as ConfirmDataComponent,
};
