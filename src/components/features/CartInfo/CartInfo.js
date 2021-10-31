import React from 'react';
import shortid from 'shortid';

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

export {
  Component as CartInfo,
  Component as CartInfoComponent,
};
