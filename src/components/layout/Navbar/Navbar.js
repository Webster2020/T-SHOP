import React from 'react';
// import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Navbar.module.scss';

import { Button } from '../../common/Button/Button';
import { Row } from '../../layout/Row/Row';
import { Column } from '../../layout/Column/Column';

const Component = () => {

  const menu = ['home', 'create', 'examples', 'cart'];

  return (
    <nav className={styles.root}>
      <Row>
        {menu.map(el => (
          <Column key={shortid.generate()} className={styles.navCol}>
            <Link to={'/' + el} style={{ textDecoration: 'none' }}>
              <Button variant='nav' width='wdtFull' stable={true}>{el.toUpperCase()}</Button>
            </Link>
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
