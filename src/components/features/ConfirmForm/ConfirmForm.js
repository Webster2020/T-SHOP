import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAll, getCost, caClearCart } from '../../../redux/cartRedux.js';
import { caAddOrderToDB } from '../../../redux/orderRedux.js';

import styles from './ConfirmForm.module.scss';

import { Input } from '../../common/Input/Input';
import { CheckBox } from '../../common/CheckBox/CheckBox';
import { OrderButton } from '../../common/OrderButton/OrderButton';
import { ValidMessage } from '../../common/ValidMessage/ValidMessage';

const Component = ({
  cartContent, 
  cartValue, 
  addOrderDispatch, 
  clearCartDispatch,
}) => {

  const [formValid, setFormValid] = useState(false);
  const [inputNameValue, setInputNameValue] = useState('');

  const [inputEmailValue, setInputEmailValue] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [error, setError] = useState('');

  const [checkBoxValue, setCheckBoxValue] = useState(false);
  
  const handleChangeName = (event) => {
    setInputNameValue(event.target.value.replace(/[^A-Za-z]/gi, ''));
  };

  const handleChangeEmail = (event) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(event.target.value)) {
      setIsEmailValid(true);
      setError('');
    } else {
      setIsEmailValid(false);
      setError('invalidEmail');
    }
    setInputEmailValue(event.target.value);
  };

  const handleChangeCheckBox = () => {
    setCheckBoxValue(!checkBoxValue);
  };

  const validation = (event) => {
    event.preventDefault();
    setFormValid(false);
    if (inputNameValue === '') {
      setError('emptyName');
    } else if (inputEmailValue === '') {
      setError('emptyEmail');
    } else if (!isEmailValid) {
      setError('invalidEmail');
    } else if (!checkBoxValue) {
      setError('unchecked');
    } else {
      console.log('everything is OK!');
      addOrderDispatch({
        name: inputNameValue,
        email: inputEmailValue,
        products: cartContent,
        cost: cartValue,
      });
      setError('');
      setFormValid(true);
    }
  };

  const submit = () => {
    setInputNameValue('');
    setInputEmailValue('');
    setCheckBoxValue(false);
    clearCartDispatch();
  };

  return (
    <div className={styles.root}>
      <form>
        <Input
          inputType={'text'}
          inputName={'name'}
          inputValue={inputNameValue}
          handleChangeValue={handleChangeName}
        />
        {error === 'emptyName' && (
          <ValidMessage variant={error} text='empty name!' />
        )}
        <Input
          inputType={'text'}
          inputName={'email'}
          inputValue={inputEmailValue}
          handleChangeValue={handleChangeEmail}
        />
        {error === 'emptyEmail' && (
          <ValidMessage variant={error} text='empty email!' />
        )}
        {error === 'invalidEmail' && (
          <ValidMessage variant={error} text='invalid email!' />
        )}
        <CheckBox
          inputType={'checkbox'}
          inputName={'checkbox'}
          inputValue={checkBoxValue}
          handleChangeValue={handleChangeCheckBox}
        />
        {error === 'unchecked' && (
          <ValidMessage variant={error} text='check it!' />
        )}
        {!formValid && (
          <OrderButton text={'CHECK FORM'} onClick={e => validation(e)} />
        )}
        {formValid && (
          <OrderButton text={'NOW YOU CAN CONFIRM'} onClick={() => submit()} />
        )}
      </form>
    </div>
  );
};

Component.propTypes = {
  cartContent: PropTypes.array,
  cartValue: PropTypes.number,
  addOrderDispatch: PropTypes.func,
  clearCartDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  cartContent: getAll(state),
  cartValue: getCost(state),
});

const mapDispatchToProps = dispatch => ({
  addOrderDispatch: data => dispatch(caAddOrderToDB(data)),
  clearCartDispatch: () => dispatch(caClearCart()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as ConfirmForm,
  Component as ConfirmFormComponent,
};
