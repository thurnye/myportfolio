import React, { FC } from 'react';
import styles from './CompLogos.module.scss';

interface CompLogosProps {}

const CompLogos: FC<CompLogosProps> = () => (
  <div className={styles.CompLogos} data-testid="CompLogos">
    CompLogos Component
  </div>
);

export default CompLogos;
