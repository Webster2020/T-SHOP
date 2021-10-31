import React from 'react';
import PropTypes from 'prop-types';

import styles from './Bricks.module.scss';

const Component = ({children}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={`${styles.brick} ${styles.dark}`}></div>
      <div className={`${styles.brick} ${styles.white}`}></div>
    </div>
    <div className={styles.wrapper}>
      <div className={`${styles.brick} ${styles.white}`}></div>
      <div className={styles.brick}></div>
      <div className={`${styles.brick} ${styles.dark}`}></div>
    </div>
    <div className={styles.wrapper}>
      <div className={styles.brick}></div>
      <div className={`${styles.brick} ${styles.dark}`}></div>
      <div className={`${styles.brick} ${styles.white}`}></div>
      <div className={styles.brick}></div>
    </div>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as Bricks,
  Component as BricksComponent,
};
