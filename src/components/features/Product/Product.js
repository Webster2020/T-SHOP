import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Product.module.scss';

import { Button } from '../../common/Button/Button';
import { Modal } from '../Modal/Modal'; 
import { Tshirt } from '../../common/Tshirt/Tshirt';
import { ProductButtons } from '../ProductButtons/ProductButtons';
import { Row } from '../../layout/Row/Row';

const Component = ({view, type, featuresDB}) => {

  const [modal, setModal] = useState(false);

  const openModal = e => {
    e.preventDefault();
    setModal(true);
  };

  const closeModal = e => {
    e.preventDefault();
    setModal(false);
  };

  return (
    <Row className={styles.root}>
      <Button onClick={e => openModal(e)}>
        <Tshirt view={view} type={type} featuresDB={featuresDB}/>
      </Button>
      {modal && 
        <Button variant='overlay' onClick={e => closeModal(e)}>
          <Modal>
            <Tshirt view={view} type={type} featuresDB={featuresDB}/>
          </Modal>
        </Button>
      }
      <ProductButtons featuresDB={featuresDB}/>
    </Row>
  );
};

Component.propTypes = {
  view: PropTypes.string,
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
