import React, { FC,  } from 'react';

import Box from '@mui/material/Box';
import styles from './Home.module.scss';
import Jumbotron from './Jumbotron/Jumbotron';

interface HomeProps {
 
}

const Home: FC<HomeProps> = () => {

  
  return(
    <div className={styles.Home} data-testid="Home">
      <div className={styles.banner}></div>
      <Box sx={{
        color: 'white',
        // height: 'calc(100vh - 90px)'
      }}>
        <Jumbotron/>
      </Box>
    </div>
  );
}
export default Home;
