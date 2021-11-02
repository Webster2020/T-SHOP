import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { caAddDescription, caDelFromCart } from '../../../redux/cartRedux.js';

import { TiDocumentText } from 'react-icons/ti';
import { FaTshirt } from 'react-icons/fa';

import styles from './CartProduct.module.scss';

import { Button } from '../../common/Button/Button';
import { CartProductAmount } from '../CartProductAmount/CartProductAmount.js';
import { Column } from '../../layout/Column/Column';
import { Description } from '../../common/Description/Description.js';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';
import { Row } from '../../layout/Row/Row';
import { Tshirt } from '../../common/Tshirt/Tshirt';

const Component = ({product, index, delFromCartDispatch, addDescriptionDispatch}) => {

  const totalCost = product.price * product.amount;
  const [description, setDescription] = useState(false);
  const [descValue, setDescValue] = useState('');

  const showDescription = e => {
    e.preventDefault();
    setDescription(!description);
  };

  const handleChangeDesc = e => {
    setDescValue(e.target.value);
  };

  return (
    <Row variant={'verTop'} className={styles.col}>

      <Column className={styles.row}>
        <Button variant='cartGlass' onClick={() => delFromCartDispatch(product)}>
          <GlassWrapper>
            <div className={styles.buttonContent}>
              <h2>x</h2>
            </div>
          </GlassWrapper>
        </Button>

        <GlassWrapper>
          <div className={styles.blindContent} style={{height: '45px'}}>
            <h2>{index + 1}</h2>
          </div>
        </GlassWrapper>

        <Button variant='cartGlass' onClick={e => showDescription(e)}>
          <GlassWrapper>
            <div className={styles.buttonContent}>
              <h2>
                {!description ? <TiDocumentText style={{ marginTop: '5px' }} /> : <FaTshirt style={{ marginTop: '5px' }} />}
              </h2>
            </div>
          </GlassWrapper>
        </Button>

      </Column>

      {!description ?
        (
          <Column flex={'f6'}>
            <GlassWrapper>
              <div className={styles.product}>
                <Column>
                  <Tshirt view='cart' type='common' featuresDB={product}/>
                </Column>
              </div>
            </GlassWrapper>
          </Column>
        )
        :
        (
          <Column flex={'f6'}>
            <GlassWrapper>
              <div className={styles.description}>
                <Column>
                  <Description 
                    inputValue={descValue}
                    handleChangeValue={handleChangeDesc}
                  />
                </Column>
              </div>
            </GlassWrapper>
            <Button 
              variant='cartGlass' 
              onClick={() => addDescriptionDispatch({
                id: product.id, 
                cartID: product.cartID,
                description: descValue,
              })}
            >
              <GlassWrapper>
                <div className={styles.buttonContent}>
                  <h5>ADD DESCRIPTION</h5>
                </div>
              </GlassWrapper>
            </Button>
          </Column>
        )
      }

      <Column className={styles.row}>
        <GlassWrapper>
          <div className={styles.content}>
            <h3>cost: {product.price}$</h3>
          </div>
        </GlassWrapper>
        <GlassWrapper>
          <div className={styles.content}>
            <h3>total: {totalCost}$</h3>
          </div>
        </GlassWrapper>
        <GlassWrapper>
          <div className={`${styles.blindContent} ${styles.hide}`} style={{height: '23px'}}></div>
        </GlassWrapper>
      </Column>

      <CartProductAmount product={product}/>

    </Row>
  );
};

Component.propTypes = {
  product: PropTypes.object,
  index: PropTypes.number,
  delFromCartDispatch: PropTypes.func,
  addDescriptionDispatch: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  delFromCartDispatch: data => dispatch(caDelFromCart(data)),
  addDescriptionDispatch: data => dispatch(caAddDescription(data)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  Container as CartProduct,
  Component as CartProductComponent,
};
