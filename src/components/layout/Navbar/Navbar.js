import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/cartRedux.js';

import styles from './Navbar.module.scss';

import { Button } from '../../common/Button/Button';
import { Row } from '../../layout/Row/Row';
import { Column } from '../../layout/Column/Column';

const Component = ({productsInCart}) => {

  const menu = ['home', 'create', 'examples', 'cart'];

  return (
    <nav className={styles.root}>
      <Row className={styles.rowBorder}>
        {menu.map(el => (
          <Column key={shortid.generate()} className={styles.navCol}>
            <Link to={'/' + el} style={{ textDecoration: 'none' }}>
              <Button variant='nav' width='wdtFull' stable={true}>
                {`${el.toUpperCase()} ${el === 'cart' ? ('(' + productsInCart.length + ')') : ''}`}
              </Button>
            </Link>
          </Column>
        ))}
      </Row>
    </nav>
  );
};

Component.propTypes = {
  productsInCart: PropTypes.array,
};

const mapStateToProps = state => ({
  productsInCart: getAll(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Navbar,
  Component as NavbarComponent,
};
