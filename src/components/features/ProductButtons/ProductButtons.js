import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { IoMdCart, IoMdHeart, IoMdHeartEmpty, IoIosEye } from 'react-icons/io';

import { connect } from 'react-redux';
import { caAddToCart } from '../../../redux/cartRedux.js';

import styles from './ProductButtons.module.scss';

import { Button } from '../../common/Button/Button';

const Component = ({featuresDB, addToCartDispatch}) => {
  
  const [like, setLike] = useState(false);

  const icons = [
    {
      type: 'cart',
      icon: <IoMdCart size={35} />,
    }, 
    {
      type: 'heart',
      icon: like ? <IoMdHeart size={35} /> : <IoMdHeartEmpty size={35} />,
    }, 
    {
      type: 'eye',
      icon: <IoIosEye size={35} />,
    },
  ];

  const clickHandler = (e, type) => {
    e.preventDefault();
    if (type === 'cart') {
      console.log('add to cart');
      addToCartDispatch(featuresDB);
    } else if (type === 'eye') {
      console.log('show product details');
      console.log(featuresDB);
    } else {
      setLike(!like);
      console.log(`heart is ${like ? 'full' : 'empty'}`);
    }
  };

  return (
    <div className={styles.root}>
      {icons.map(el => (
        <Button 
          key={shortid.generate()} 
          variant="glass" 
          onClick={e => clickHandler(e, el.type)}
        >
          <div className={styles.iconWrapper}>
            {el.icon}
          </div>
        </Button>
      ))}
    </div>
  );
};

Component.propTypes = {
  featuresDB: PropTypes.object,
  addToCartDispatch: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = dispatch => ({
  addToCartDispatch: productData => dispatch(caAddToCart(productData)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  // Component as ProductButtons,
  Container as ProductButtons,
  Component as ProductButtonsComponent,
};
