import React from 'react';
import { Row } from '../../layout/Row/Row';
import { Column } from '../../layout/Column/Column';
import { Container } from '../../layout/Container/Container';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';

import styles from './Test.module.scss';

const Component = () => (
  <div className={styles.root}>
    <Container>
      <Row style={{alignItems: 'center'}}>
        <Column>
          <GlassWrapper>
            <div className={styles.elem1}>
              dupa
            </div>
          </GlassWrapper>
        </Column>
        <Column>
          <GlassWrapper>
            <div className={styles.elem2}>
              dupa
            </div>
          </GlassWrapper>
        </Column>
        <Column>
          <Row>
            <Column>
              <GlassWrapper>
                <div className={styles.elem2}>
                  dupa
                </div>
              </GlassWrapper>
            </Column>
            <Column>
              <GlassWrapper>
                <div className={styles.elem2}>
                  dupa
                </div>
              </GlassWrapper>
            </Column>
          </Row>
          <Row>
            <Column>
              <GlassWrapper>
                <div className={styles.elem2}>
                  dupa
                </div>
              </GlassWrapper>
            </Column>
            <Column>
              <GlassWrapper>
                <div className={styles.elem2}>
                  dupa
                </div>
              </GlassWrapper>
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  </div>
);

export {
  Component as Test,
  // Container as Test,
  Component as TestComponent,
};
