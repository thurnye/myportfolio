import React, { FC } from 'react';
import styles from './NoMatch.module.scss';

interface NoMatchProps {}

const NoMatch: FC<NoMatchProps> = () => (
  <div className={styles.NoMatch} data-testid="NoMatch">
    NoMatch Component
  </div>
);

export default NoMatch;
