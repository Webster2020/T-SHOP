import React from 'react';

import styles from './Create.module.scss';

import { CreateProduct } from '../../features/CreateProduct/CreateProduct';
import { Wrapper } from '../../layout/Wrapper/Wrapper';

const Component = () => (
  <div className={styles.root}>
    <Wrapper variant='my'>
      <CreateProduct />
    </Wrapper>
  </div>
);

export {
  Component as Create,
  Component as CreateComponent,
};
