import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ConfirmForm.module.scss';

import { Input } from '../../common/Input/Input';
import { CheckBox } from '../../common/CheckBox/CheckBox';
import { OrderButton } from '../../common/OrderButton/OrderButton';
import { ValidMessage } from '../../common/ValidMessage/ValidMessage';

const Component = () => {
 
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
    console.log('checking form validation!');
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
      // setBookingDataDispatch({
      //   name: inputNameValue,
      //   email: inputEmailValue
      // });
      setError('');
      setFormValid(true);
    }
  };

  const submit = (event) => {
    setInputNameValue('');
    setInputEmailValue('');
    setCheckBoxValue(false);
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
          <OrderButton text={'CHECK FORM'} onClick={(e) => validation(e)} />
        )}
        {formValid && (
          <OrderButton text={'BOOK TICKETS'} onClick={(e) => submit(e)} />
        )}
      </form>
    </div>
  );
};

// Component.propTypes = {
// };

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ConfirmForm,
  // Container as OrderForm,
  Component as ConfirmFormComponent,
};
