import React from 'react';
import shortid from 'shortid';

import styles from './Footer.module.scss';

import { links } from '../../../data/dbLinks';

import { Button } from '../../common/Button/Button';

const Component = () => {

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <div className={`${styles.col3} ${styles.hide}`}>
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

export {
  Component as Footer,
  Component as FooterComponent,
};
