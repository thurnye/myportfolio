import React, { FC } from 'react';
import styles from './CompDivider.module.scss';

interface CompDividerProps {}

const CompDivider: FC<CompDividerProps> = () => (
  <div className={styles.CompDivider} data-testid="CompDivider"></div>
);

export default CompDivider;
