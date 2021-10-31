import React from 'react';
import PropTypes from 'prop-types';

import styles from './ValidMessage.module.scss';

const Component = ({children, variant, text}) => {
  
  let style;

  switch (variant) {
    case 'noSeat':
      style = 'validMessageWrapper validMessageSeat';
      break;
    case 'emptyName':
      style = 'validMessageWrapper validMessageName';
      break;
    case 'emptyEmail':
      style = 'validMessageWrapper validMessageEmail';
      break;
    case 'invalidEmail':
      style = 'validMessageWrapper validMessageEmail2';
      break;
    case 'unchecked':
      style = 'validMessageWrapper validMessageCheckBox';
      break;
    default:
      style = 'validMessageWrapper';
  }

  return (
    <div className={style}>
      <div className={styles.validMessage}>{text}</div>
      {children}
    </div>
  );
};

Component.defaultProps = {
  children: '',
};

Component.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  text: PropTypes.string,
};

export {
  Component as ValidMessage,
  Component as ValidMessageComponent,
};
