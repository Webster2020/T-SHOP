import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    setColors({
      ...colors,
      [props]: value,
    });
  };

  return (
    <div className={styles.root}>
      <Row variant='verCenter'>
        <Column flex='f2' size='big'>
          <GlassWrapper>
            {/* <AddProductTemp /> */}
            <Tshirt view='create' colors={colors}/>
          </GlassWrapper>
        </Column>
        <Column flex='f10'>
          <CreateProductButtons colors={colors} action={handleSettingColors}/>
        </Column>
      </Row>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as CreateProduct,
  Component as CreateProductComponent,
};
