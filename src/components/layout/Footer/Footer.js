import React from 'react';
// import PropTypes from 'prop-types';
import shortid from 'shortid';
// import { IoMdCart, IoMdHeart } from 'react-icons/io';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';

import { links } from '../../../data/dbLinks';

import { Button } from '../../common/Button/Button';

const Component = () => {

  // const icons = [
  //   {icon: <IoMdCart size={35} />}, 
  //   {icon: <IoMdHeart size={35} />}, 
  // ];

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <div className={styles.col3}>
          <Button variant='footer' width='wdtFull' stable={true}>
            <h2 className={styles.logo}>WEBSTER2020</h2>
          </Button>
        </div>
        <div className={styles.col}>
          <div className={styles.rowInner}>
            {links.map(el => (
              <div key={shortid.generate()} className={styles.col}>
                <a 
                  href={el.link} 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className={styles.link}
                >
                  <Button 
                    link={true} 
                    variant='glassFooter' 
                    width='wdtFull'
                  >          
                    <div className={styles.iconWrapper}>
                      {el.icon}
                    </div>
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
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
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
