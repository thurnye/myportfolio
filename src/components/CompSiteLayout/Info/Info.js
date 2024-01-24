import React from 'react';
import { Box } from "@mui/material";
import styles from './Info.module.css';
import Stacks from '../../CompLeftDrawer/Stacks/Stacks';
import About from '../../CompLeftDrawer/InfoSection/About/About';
import Connection from '../../Connection/Connection';

const menuWidth = 300;  //this width corresponds to the width in the dashboard drawerWidth

const Info = () => {
  // const theme = useTheme();
  // const alt =theme.palette.background.alt;


  return(
    <Box className={styles.Info} sx={{height: '100%'}}>
      <Box sx={{
        position: 'fixed',
        width: menuWidth,
        background: '#20202A'
        }}>
          <About/>
      </Box>
      
      <Box sx={{
        mt: 37.5, 
        width: '100%',
      }}>
        <Stacks/>
      </Box>
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 40,
        display: 'flex',
        background: '#20202A'
      }}>
        <Connection/>
      </Box>
    </Box>
  )
};

export default Info;
