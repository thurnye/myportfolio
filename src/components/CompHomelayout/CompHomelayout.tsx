import React, { FC } from 'react';
import styles from './CompHomelayout.module.scss';
import CompJumbotron from './CompJumbotron/CompJumbotron';
import CompHomeContent from './CompHomeContent/CompHomeContent';

interface CompHomelayoutProps {}

const CompHomelayout: FC<CompHomelayoutProps> = () => (
  <div className={styles.CompHomelayout} data-testid="CompHomelayout">
    <CompJumbotron/>
    <CompHomeContent/>
  </div>
);

export default CompHomelayout;
