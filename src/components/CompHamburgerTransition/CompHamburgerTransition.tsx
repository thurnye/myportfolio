import React, { FC } from 'react';
import styles from './CompHamburgerTransition.module.scss';

interface CompHamburgerTransitionProps {}

const CompHamburgerTransition: FC<CompHamburgerTransitionProps> = () => (
  <div className={styles.CompHamburgerTransition} data-testid="CompHamburgerTransition">
    CompHamburgerTransition Component
  </div>
);

export default CompHamburgerTransition;
