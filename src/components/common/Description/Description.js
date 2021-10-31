import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Description.module.scss';

const Component = ({inputValue, handleChangeValue}) => (
  <div className={styles.root}>
    <textarea 
      className={styles.text} 
      placeholder='max 100 signs' 
      name="message" 
      rows='8' 
      cols="18" 
      maxLength="100"
      value={inputValue}
      onChange={handleChangeValue}
    />
  </div>
);

Component.propTypes = {
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
  Component as Description,
  // Container as Description,
  Component as DescriptionComponent,
};
