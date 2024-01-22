import React, { FC } from 'react';
import styles from './CompRightDrawer.module.scss';
import CompNav from '../CompNav/CompNav';

interface CompRightDrawerProps {
  onClose : () => void
};

const CompRightDrawer: FC<CompRightDrawerProps> = (props:CompRightDrawerProps) => (
  <div className={styles.CompRightDrawer} data-testid="CompRightDrawer">
    <CompNav width={250} onClose={props.onClose}/>
  </div>
);

export default CompRightDrawer;
