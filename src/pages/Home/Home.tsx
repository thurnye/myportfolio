import React, { FC } from 'react';
import styles from './Home.module.scss';
import CompHomelayout from '../../components/CompHomelayout/CompHomelayout';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className={styles.Home} data-testid="Home">
    <CompHomelayout/>
  </div>
);

export default Home;
