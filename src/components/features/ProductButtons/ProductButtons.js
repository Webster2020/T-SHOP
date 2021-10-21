import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import clsx from 'clsx';
import { IoMdCart, IoMdHeart, IoMdHeartEmpty, IoIosEye } from 'react-icons/io';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductButtons.module.scss';

import { Button } from '../../common/Button/Button';

const Component = ({className, featuresDB}) => {
  
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
    } else if (type === 'eye') {
      console.log('show product details');
      console.log(featuresDB);
    } else {
      setLike(!like);
      console.log(`heart is ${like ? 'full' : 'empty'}`);
    }
  };

  return (
    <div className={clsx(className, styles.root)}>
      {icons.map(el => (
        <Button 
          key={shortid.generate()} 
          variant="glass" 
          style={{margin: '2px 0'}}
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
  className: PropTypes.string,
  type: PropTypes.string,
  featuresDB: PropTypes.object,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductButtons,
  // Container as ProductButtons,
  Component as ProductButtonsComponent,
};
