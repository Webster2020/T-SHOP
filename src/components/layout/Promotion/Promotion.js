import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import styles from './Promotion.module.scss';

import { Bricks } from '../../features/Bricks/Bricks';
import { Row } from '../Row/Row';

const Component = ({variant}) => {

  const benefits = ['FREE SHIPPING', '60-DAYS REFUND', '24/7 SUPPORT'];

  return (
    <div className={styles.root}>

      {variant === 'promo' && 
        (
          <Row variant='wrap' className={styles.scaleDown65}>
            <div className={`${styles.sectionCol} ${styles.sectionPromo}`}>
              <h1>CREATE</h1>
              <h1>CUSTOM</h1>
              <h1>PRODUCT</h1>
            </div>
            <div className={styles.sectionCol}>
              <Bricks />
            </div>
          </Row>
        )
      }

      {variant === 'benefits' && 
        (
          <Row variant='wrap' className={styles.scaleDown90}>
            {benefits.map(el => (
              <div key={shortid.generate()} className={`${styles.sectionCol} ${styles.sectionBenefits}`}>
                <h1>{el}</h1>
              </div> 
            ))}
          </Row>
        )
      }

    </div>
  );

};

Component.propTypes = {
  variant: PropTypes.string,
};

export {
  Component as Promotion,
  Component as PromotionComponent,
};
