import React, { FC } from 'react';
import About from './About/About';
import Connection from '../../Connection/Connection';
import Stacks from '../Stacks/Stacks';
import styles from './InfoSection.module.scss';
import { Box } from '@mui/material';

interface InfoSectionProps {
}

const InfoSection: FC<InfoSectionProps> = (props: InfoSectionProps) => (
  <Box className={styles.InfoSection} data-testid="InfoSection" sx={{
    // width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    // border: '2px dotted red',
    height: '100%'
  }}>
    <Box sx={{position: 'fixed', height: 350}}>
    </Box>
      <About/>

    {/*  */}
    <Box  sx={{
      flexGrow: 1,
      overflow: 'auto',
      height: '100%',
      width: '100%',
      border: '2px dotted blue'
    }}>
      <Stacks/>
    </Box>


    {/* Info Footer */}
    <Box  sx={{
      position: 'absolute',
      bottom: 0,
      width: '100%',
    }}>
      <Connection/>
    </Box>
  </Box>
);

export default InfoSection;
