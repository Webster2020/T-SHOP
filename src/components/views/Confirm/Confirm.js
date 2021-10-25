import React from 'react';
// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

// import styles from './Confirm.module.scss';

import { Container } from '../../layout/Container/Container'; 
import { ConfirmForm } from '../../features/ConfirmForm/ConfirmForm';

const Component = () => (
  <Container variant='my'>
    <ConfirmForm />
  </Container>
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
  Component as Confirm,
  // Container as Confirm,
  Component as ConfirmComponent,
};
