import React from 'react';
import PropTypes from 'prop-types';

import styles from './GlassWrapper.module.scss';

const Component = ({children}) => (
  <div className={styles.root}>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as GlassWrapper,
  Component as GlassWrapperComponent,
};
