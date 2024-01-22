import React, { FC } from 'react';
import styles from './CompSiteLayout.module.scss';
import { Box, Drawer } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Contact from '../../pages/Contact/Contact';
import NoMatch from '../../pages/NoMatch/NoMatch';
import Portfolio from '../../pages/Portfolio/Portfolio';
import InfoSection from '../CompLeftDrawer/InfoSection/InfoSection';
import Home from '../../pages/Home/Home';
import CompMobileNavBar from '../CompMobileNavBar/CompMobileNavBar';
import CompVerticalNav from '../CompVerticalNav/CompVerticalNav';
import CompRoutes from '../CompRoutes/CompRoutes';
import CompFooter from '../CompFooter/CompFooter';



const drawerWidth = 250;


interface CompSiteLayoutProps {
}

const CompSiteLayout: FC<CompSiteLayoutProps> = () => {
  return(
    <div className={styles.CompSiteLayout} data-testid="CompSiteLayout">

      {/* Mobile view */}
      <Box className={styles.MobileView}>
        <CompMobileNavBar/> 
        <Box sx={{p:2}} className={styles.contextContainer}>
          <CompRoutes/>
          <CompFooter/>
        </Box>
      </Box>

      {/* Desktop View */}
      <Box className={styles.DesktopView}>
        <Box sx={{ display: 'flex' }} className={styles.DesktopViewContainer}>
          {/* You can add a header here */}
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { 
                width: drawerWidth, 
                boxSizing: 'border-box',
                marginLeft: 5,
                background: '#1E1E28',
              },
            }}
          >
            <Box className={styles.infoGraphic}>
                <InfoSection/>
              </Box>
          </Drawer> 
          <Box component="main" sx={{ flexGrow: 1}} className={styles.container}>
            <Box className={styles.contextContainer} sx={{ flexGrow: 1}}>
              <CompRoutes/>
              <CompFooter/>
            </Box> 
            <Box className={styles.contextNavContainer}>
              <CompVerticalNav/>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
};

export default CompSiteLayout;
