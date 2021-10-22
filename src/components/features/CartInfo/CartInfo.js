import React from 'react';
// import PropTypes from 'prop-types';
import shortid from 'shortid';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CartInfo.module.scss';

import { info } from '../../../data/dbInfo';

import { Row } from '../../layout/Row/Row';
import { Column } from '../../layout/Column/Column';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';


const Component = () => (
  <Row>
    {info.map((e) => (
      <Column key={shortid.generate()}>
        <GlassWrapper>
          <div className={styles.infoContent}>
            <h4>{e}</h4>
          </div>
        </GlassWrapper>
      </Column>
    ))}
  </Row>
);

// Component.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
// };

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CartInfo,
  // Container as CartInfo,
  Component as CartInfoComponent,
};
