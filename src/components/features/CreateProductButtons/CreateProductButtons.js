import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CreateProductButtons.module.scss';

import { Button } from '../../common/Button/Button';
import { Row } from '../../layout/Row/Row';

const Component = ({creator, onClick}) => {

  const changeColor = (props, value) => {
    onClick(props, value);
    // console.log(props);
    // console.log(value);
  };

  return(
    <Row className={styles.root}>
      <Button variant='glass' className={styles.colorButton} onClick={changeColor('main', 'green')}>
        <div className={styles.content} style={{backgroundColor: creator.main}}></div>
      </Button>
      <Button variant='glass' className={styles.colorButton} onClick={changeColor}>
        <div className={styles.content} style={{backgroundColor: creator.main}}></div>
      </Button>
    </Row>
  );
};

Component.propTypes = {
  creator: PropTypes.object,
  onClick: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CreateProductButtons,
  // Container as CreateProductButtons,
  Component as CreateProductButtonsComponent,
};
