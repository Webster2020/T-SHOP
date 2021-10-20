import React from 'react';
// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Home.module.scss';

import { Container } from '../../layout/Container/Container';
import { Header } from '../../layout/Header/Header';
import { ProductsList } from '../../features/ProductsList/ProductsList';
import { Promotion } from '../../layout/Promotion/Promotion';

const Component = () => (
  <div className={styles.root}>
    <Header />
    <Container>
      <ProductsList />
    </Container>
    <Promotion variant='promo'/>
    <Container>
      <ProductsList />
    </Container>
    <Promotion variant='benefits'/>
  </div>
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
  Component as Home,
  // Container as Home,
  Component as HomeComponent,
};
