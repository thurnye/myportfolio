import React, { FC } from 'react';
import styles from './PortFolio.module.scss';

interface PortFolioProps {}

const PortFolio: FC<PortFolioProps> = () => (
  <div className={styles.PortFolio} data-testid="PortFolio">
    PortFolio Component
  </div>
);

export default PortFolio;
