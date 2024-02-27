import React, { FC } from 'react';
import styles from './Home.module.scss';
import CompHomelayout from '../../components/CompHomelayout/CompHomelayout';
import CompSiteAlert from '../../components/CompSiteAlert/CompSiteAlert';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className={styles.Home} data-testid="Home">
    <CompSiteAlert/> 
    <CompHomelayout/>
  </div>
);

export default Home;
