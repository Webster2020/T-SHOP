import React from 'react';
import PropTypes from 'prop-types';

import styles from './CheckBox.module.scss';

const Component = ({
  inputType, 
  inputName, 
  inputValue, 
  handleChangeValue,
}) => (
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

export {
  Component as CheckBox,
  Component as CheckBoxComponent,
};
