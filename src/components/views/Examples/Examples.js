import React from 'react';
// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Examples.module.scss';

import { Container } from '../../layout/Container/Container';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';
import { Row } from '../../layout/Row/Row';

const Component = () => (
  <div className={styles.root}>
    <Container variant='my'>
      <Row>
        <GlassWrapper>
          <h2 className={styles.title}>PAGE IN BUILD</h2>
        </GlassWrapper>
      </Row>
    </Container>
  </div>
);

// Component.propTypes = {
// };

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Examples,
  // Container as Examples,
  Component as ExamplesComponent,
};
