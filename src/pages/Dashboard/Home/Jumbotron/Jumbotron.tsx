import React, { FC } from 'react';
import styles from './Jumbotron.module.scss';

interface JumbotronProps {}

const Jumbotron: FC<JumbotronProps> = () => (
  <div className={styles.Jumbotron} data-testid="Jumbotron">
    Jumbotron Component
  </div>
);

export default Jumbotron;
