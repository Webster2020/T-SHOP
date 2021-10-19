import React from 'react';
// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Navbar.module.scss';

import { Button } from '../../common/Button/Button';

const Component = () => (
  <nav className={styles.navbarContainer}>
    <div className={styles.navbarRow}>
      <div className={styles.navbarCol}>
        <Button variant='nav' width='wdtFull'>LOGO</Button>
      </div>
      <div className={styles.navbarCol}>
        <Button variant='nav' width='wdtFull'>HOME</Button>
      </div>
      <div className={styles.navbarCol}>
        <Button variant='nav' width='wdtFull'>CREATE</Button>
      </div>
      <div className={styles.navbarCol}>
        <Button variant='nav' width='wdtFull'>EXAMPLES</Button>
      </div>
      <div className={styles.navbarCol}>
        <Button variant='nav' width='wdtFull'>CART</Button>
      </div>
    </div>
  </nav>
);

// Component.propTypes = {
// };

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Navbar,
  // Container as Navbar,
  Component as NavbarComponent,
};
