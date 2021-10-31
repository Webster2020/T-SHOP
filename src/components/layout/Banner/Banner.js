import React from 'react';

import styles from './Banner.module.scss';

import { Logo } from '../../common/Logo/Logo'; 

const Component = () => (
  <div className={styles.root}>
    <Logo />
  </div>
);

export {
  Component as Banner,
  Component as BannerComponent,
};
