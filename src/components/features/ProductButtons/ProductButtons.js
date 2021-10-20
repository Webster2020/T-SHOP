import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import clsx from 'clsx';
import { IoMdCart, IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductButtons.module.scss';

import { Button } from '../../common/Button/Button';

const Component = ({className}) => {

  const icons = [
    {icon: <IoMdCart size={35} />}, 
    {icon: <IoMdHeart size={35} />}, 
    {icon: <IoMdHeartEmpty size={35} />},
  ];

  return (
    <div className={clsx(className, styles.root)}>
      {icons.map(el => (
        <Button key={shortid.generate()} variant="glass" style={{margin: '2px 0'}}>
          <div className={styles.iconWrapper}>
            {el.icon}
          </div>
        </Button>
      ))}
      {/* <Button variant="glass">
        <div className={"iconWrapper"}>
          <IoMdCart size={35} />
        </div>
      </Button>
      <Button variant="glass">
        <div className={"iconWrapper"}>
          <IoMdHeart size={35} />
        </div>
      </Button>
      <Button variant="glass">
        <div className={"iconWrapper"}>
          <IoMdHeartEmpty size={35} />
        </div>
      </Button> */}
    </div>
  );
};


Component.propTypes = {
  className: PropTypes.string,
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
