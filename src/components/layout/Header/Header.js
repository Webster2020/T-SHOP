import React from 'react';

import styles from './Header.module.scss';

import { Banner } from '../Banner/Banner';

const Component = () => (
  <header className={styles.root}>
    <Banner />
  </header>
);

export {
  Component as Header,
  Component as HeaderComponent,
};
