import React from 'react';
import PropTypes from 'prop-types';

import styles from './CartHeader.module.scss';

import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';

const Component = ({text}) => (
  <GlassWrapper>
    <div className={styles.cartHeader}>
      <h1>{text}</h1>
    </div>
  </GlassWrapper>
);

Component.propTypes = {
  text: PropTypes.string,
};

export {
  Component as CartHeader,
  Component as CartHeaderComponent,
};
