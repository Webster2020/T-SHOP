import React from 'react';

import styles from './Logo.module.scss';

const Component = () => (
  <div className={styles.root}>
    <h1>T<span>SHOP</span></h1>
  </div>
);

export {
  Component as Logo,
  Component as LogoComponent,
};
