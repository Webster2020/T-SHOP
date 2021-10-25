import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Input.module.scss';

const Component = ({inputType, inputName, inputValue, handleChangeValue}) => (
  <div className={styles.root}>
    <input
      type={inputType}
      name={inputName}
      value={inputValue}
      onChange={handleChangeValue}
    />
    <label htmlFor={inputType}>{inputName.toUpperCase()}</label>
  </div>
);

Component.defaultProps = {
  inputType: 'text',
  inputName: 'text',
};

Component.propTypes = {
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  inputValue: PropTypes.string,
  handleChangeValue: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Input,
  // Container as Input,
  Component as InputComponent,
};
