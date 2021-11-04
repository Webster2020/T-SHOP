import React from 'react';

import styles from './Create.module.scss';

import { Wrapper } from '../../layout/Wrapper/Wrapper';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';
import { Row } from '../../layout/Row/Row';
// import { AddProductTemp } from '../../features/AddProductTemp/AddProductTemp';

const Component = () => (
  <div className={styles.root}>
    <Wrapper variant='my'>
      <Row>
        <GlassWrapper>
          <h2 className={styles.title}>PAGE IN BUILD</h2>
          {/* <AddProductTemp /> */}
        </GlassWrapper>
      </Row>
    </Wrapper>
  </div>
);

export {
  Component as Create,
  Component as CreateComponent,
};
