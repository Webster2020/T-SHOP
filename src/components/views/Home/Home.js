import React from 'react';
import PropTypes from 'prop-types';
import { BsFillGearFill } from 'react-icons/bs';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Home.module.scss';

import { Navbar } from '../../layout/Navbar/Navbar';
import { Header } from '../../layout/Header/Header';
import { Section } from '../../layout/Section/Section';
import { SectionContent } from '../../layout/SectionContent/SectionContent';
import { Text } from '../../common/Text/Text';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Navbar />
    <Header />
    <Section>
      <SectionContent>
        <Text>CREATE SOMETHING NEW!</Text>
      </SectionContent>
      <SectionContent/>
    </Section>
    <Section>
      <SectionContent>
        <div><BsFillGearFill/></div>
      </SectionContent>
      <SectionContent/>
    </Section>
    {children}
  </div>
);

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
  Component as Home,
  // Container as Home,
  Component as HomeComponent,
};
