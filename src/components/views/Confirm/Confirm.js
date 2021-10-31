import React from 'react';

import { ConfirmData } from '../../features/ConfirmData/ConfirmData';
import { ConfirmForm } from '../../features/ConfirmForm/ConfirmForm';
import { Wrapper } from '../../layout/Wrapper/Wrapper'; 

const Component = () => (
  <Wrapper variant='my'>
    <ConfirmData />
    <ConfirmForm />
  </Wrapper>
);

export {
  Component as Confirm,
  Component as ConfirmComponent,
};
