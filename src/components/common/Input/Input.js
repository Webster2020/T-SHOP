import React from 'react';
import PropTypes from 'prop-types';

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

export {
  Component as Input,
  Component as InputComponent,
};
