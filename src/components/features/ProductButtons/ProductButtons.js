import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { IoMdCart, IoMdHeart, IoMdHeartEmpty, IoIosEye } from 'react-icons/io';

import { connect } from 'react-redux';
import { caAddToCart } from '../../../redux/cartRedux.js';
import { caProductLike, caProductUnlike } from '../../../redux/productRedux.js';

import styles from './ProductButtons.module.scss';

import { Button } from '../../common/Button/Button';

const Component = ({
  featuresDB, 
  addToCartDispatch, 
  productLikeDispatch, 
  productUnlikeDispatch,
}) => {

  const icons = [
    {
      type: 'cart',
      icon: <IoMdCart size={35} />,
    }, 
    {
      type: 'heart',
      icon: featuresDB.like ? <IoMdHeart size={35} /> : <IoMdHeartEmpty size={35} />,
    }, 
    {
      type: 'eye',
      icon: <IoIosEye size={35} />,
    },
  ];

  const clickHandler = (e, type) => {
    e.preventDefault();
    if (type === 'cart') {
      addToCartDispatch({...featuresDB, cartID: shortid.generate()});
    } else if (type === 'eye') {
      console.log('show product details (TO DO !!)');
      console.log({...featuresDB});
    } else {
      if (featuresDB.like && productUnlikeDispatch(featuresDB._id));
      if (!featuresDB.like && productLikeDispatch(featuresDB._id));
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
  productLikeDispatch: PropTypes.func,
  productUnlikeDispatch: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  addToCartDispatch: productData => dispatch(caAddToCart(productData)),
  productLikeDispatch: productId => dispatch(caProductLike(productId)),
  productUnlikeDispatch: productId => dispatch(caProductUnlike(productId)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  Container as ProductButtons,
  Component as ProductButtonsComponent,
};
