import React from 'react';
// import PropTypes from 'prop-types';
import shortid from 'shortid';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Navbar.module.scss';

import { Button } from '../../common/Button/Button';
import { Row } from '../../layout/Row/Row';
import { Column } from '../../layout/Column/Column';

const Component = () => {

  const menu = ['HOME', 'CREATE', 'EXAMPLES', 'CART'];

  return (
    <nav className={styles.root}>
      <Row>
        {menu.map(el => (
          <Column key={shortid.generate()} className={styles.navCol}>
            <Button variant='nav' width='wdtFull'>{el}</Button>
          </Column>
        ))}
      </Row>
    </nav>
  );
};

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
