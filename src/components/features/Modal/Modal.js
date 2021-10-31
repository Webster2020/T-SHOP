import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.scss';

const Component = ({children}) => (
  <div className={styles.overlay}>
    <div className={styles.modal}>
      {children}
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as Modal,
  Component as ModalComponent,
};
