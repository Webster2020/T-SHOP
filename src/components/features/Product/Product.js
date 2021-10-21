import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Product.module.scss';

import { Tshirt } from '../../common/Tshirt/Tshirt';
import { ProductButtons } from '../ProductButtons/ProductButtons';

const Component = ({className, type, featuresDB}) => {

  useEffect(() => {
    // console.log(features);
  });

  return (
    <div className={clsx(className, styles.root)}>
      <Tshirt type={type} featuresDB={featuresDB}/>
      <ProductButtons />
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
  Component as Product,
  // Container as Product,
  Component as ProductComponent,
};
