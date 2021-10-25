import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CheckBox.module.scss';

const Component = ({inputType, inputName, inputValue, handleChangeValue}) => (
  <div className={styles.root}>
    <label className={styles.checkBox}>
      I accept all the rules
      <input
        type={inputType}
        name={inputName}
        checked={inputValue}
        onChange={handleChangeValue}
      />
      <span className={styles.checkMark}></span>
    </label>
  </div>
);

Component.defaultProps = {
  inputType: 'text',
  inputName: 'text',
};

Component.propTypes = {
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  inputValue: PropTypes.bool,
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
  Component as CheckBox,
  // Container as CheckBox,
  Component as CheckBoxComponent,
};
