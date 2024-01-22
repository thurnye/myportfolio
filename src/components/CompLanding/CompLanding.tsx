import React, { FC } from 'react';
import styles from './CompLanding.module.scss';

interface CompLandingProps {}

const CompLanding: FC<CompLandingProps> = () => (
  <div className={styles.CompLanding} data-testid="CompLanding">
    CompLanding Component
  </div>
);

export default CompLanding;
