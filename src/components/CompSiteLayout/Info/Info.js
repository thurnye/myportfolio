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
        // height: 250, 
        position: 'fixed',
        width: menuWidth,
        // border: '2px dotted blue'
        // background: alt
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

        // background: alt
      }}>
        <Connection/>
      </Box>
    </Box>
  )
};

export default Info;
