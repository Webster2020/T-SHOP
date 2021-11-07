import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CreateProductButtons.module.scss';

import { Button } from '../../common/Button/Button';
import { Row } from '../../layout/Row/Row';

const Component = ({colors, action}) => {

  // const changeColor = (props, value) => {
  //   action(props, value);
  // };

  const stripesColorsArr = ['transparent', 'white', 'black', 'green', 'yellow'];
  const mainColorsArr = stripesColorsArr.slice(1, stripesColorsArr.length);
  const tShirtElements = [];
  
  const genTshirtElements = () => {
    for (const key in colors) tShirtElements.push(key);
  };

  useEffect(() => genTshirtElements());

  return(
    <div>
      {Object.keys(colors).map((elem) => (
        <Row key={shortid.generate()} className={styles.root}>
          {stripesColorsArr.map((color) => (
            <Button key={shortid.generate()} variant='glass' className={styles.colorButton} onClick={() => action(elem, color)}>
              <div className={styles.content} style={{backgroundColor: color}}></div>
            </Button>
          ))}
          <h2>{elem}</h2>
          {/* <Button variant='glass' className={styles.colorButton} onClick={() => action(elem, 'transparent')}>
            <div className={styles.content} style={{backgroundColor: 'transparent'}}></div>
          </Button>
          <Button variant='glass' className={styles.colorButton} onClick={() => action('main', 'white')}>
            <div className={styles.content} style={{backgroundColor: 'white'}}></div>
          </Button>
          <Button variant='glass' className={styles.colorButton} onClick={() => action('main', 'black')}>
            <div className={styles.content} style={{backgroundColor: 'black'}}></div>
          </Button>
          <Button variant='glass' className={styles.colorButton} onClick={() => action('main', 'green')}>
            <div className={styles.content} style={{backgroundColor: 'green'}}></div>
          </Button>
          <Button variant='glass' className={styles.colorButton} onClick={() => action('main', 'yellow')}>
            <div className={styles.content} style={{backgroundColor: 'yellow'}}></div>
          </Button> */}
        </Row>
      ))}
    </div>
  );
};

Component.propTypes = {
  colors: PropTypes.object,
  action: PropTypes.func,
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
