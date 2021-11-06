import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CreateProduct.module.scss';

import { Column } from '../../layout/Column/Column'; 
import { CreateProductButtons } from '../CreateProductButtons/CreateProductButtons';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';
import { Row } from '../../layout/Row/Row';
// import { AddProductTemp } from '../../features/AddProductTemp/AddProductTemp';
import { Tshirt } from '../../common/Tshirt/Tshirt';

const Component = () => {
  
  const [colors, setColors] = useState({
    main: 'white',
    mainStripe: 'transparent',
    logo: 'transparent',
    sleeveL: 'white',
    sleeveR: 'white',
    stripeL: 'blue',
    stripeR: 'transparent',
    collarStripe: 'transparent',
  });
  
  const handleSettingColors = (props, value) => {
    // e.preventDefault();
    console.log('DUPA');
    console.log(props);
    console.log(value);
    console.log('...........');
  };

  return (
    <div className={styles.root}>
      <Row variant='verCenter'>
        <Column flex='f2'>
          <GlassWrapper>
            {/* <AddProductTemp /> */}
            <Tshirt view='create' creator={colors}/>
          </GlassWrapper>
        </Column>
        <Column flex='f10'>
          <CreateProductButtons creator={colors} onClick={(props, value) => handleSettingColors(props, value)}/>
        </Column>
      </Row>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
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
  Component as CreateProduct,
  // Container as CreateProduct,
  Component as CreateProductComponent,
};
