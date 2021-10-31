import React from 'react';

import styles from './Examples.module.scss';

import { Wrapper } from '../../layout/Wrapper/Wrapper';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';
import { Row } from '../../layout/Row/Row';

const Component = () => (
  <div className={styles.root}>
    <Wrapper variant='my'>
      <Row>
        <GlassWrapper>
          <h2 className={styles.title}>PAGE IN BUILD</h2>
        </GlassWrapper>
      </Row>
    </Wrapper>
  </div>
);

export {
  Component as Examples,
  Component as ExamplesComponent,
};
