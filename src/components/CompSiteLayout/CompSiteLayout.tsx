import React, { FC, useState } from 'react';
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
// import CompRoutes from '../CompRoutes/CompRoutes';
import CompFooter from '../CompFooter/CompFooter';
import MenuDrawer from './MenuDrawer'
import Info from './Info/Info';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const drawerWidth = 300;


interface CompSiteLayoutProps {
}

const CompSiteLayout: FC<CompSiteLayoutProps> = () => {
  const [open, setOpen] = useState(false)

  return(
    <Box className={styles.CompSiteLayout} data-testid="CompSiteLayout"
    sx={{
      display: 'flex',
      flexDirection: {xs: 'column', md: 'row'},
      margin: 'auto',
      mt: 2,
      position: 'relative',
      // justifyContent: 'center',
      // alignItems: 'center'
    }}>

      {/* Mobile view */}
      {/* <Box className={styles.MobileView} sx={{display: {xs: 'block', md: 'none'}}}>
        <CompMobileNavBar/> 
        <Box sx={{p:2}} className={styles.contextContainer}>
          <CompRoutes/>
          <CompFooter/>
        </Box>
      </Box> */}
      <Box  sx={{
          display:{xs: 'flex', md: 'none'},
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          position:'fixed',
          top:0,
          // backgroundColor: sub,
          maxHeight: 53,
          p:2,
          zIndex: 9999
        }}>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ p: 2, display: { md: 'none' } }}
          >
            <MoreVertIcon />
          </IconButton>

            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            // onClick={() => setOpenMiniMobile(!openMiniMobile)}
            sx={{ p: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
      </Box>

      {/* Desktop View */}
      <Box className={styles.DesktopView} sx={{display: {xs: 'none', md: 'block'}}}>
        <Box sx={{ display: 'flex' }} className={styles.DesktopViewContainer}>
          {/* You can add a header here */}
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                position: 'absolute', 
                width: drawerWidth, 
                boxSizing: 'border-box',
                // marginLeft: 5,
                background: '#1E1E28',
              },
            }}
          >
            {/* <Box className={styles.infoGraphic}>
                <InfoSection/>
              </Box> */}
                {/* <InfoSection/> */}
                <Info/>

          </Drawer>
        </Box>
      </Box>

      {/* <Box component="main" sx={{flexGrow: 1}} className={styles.container}>
        <Box className={styles.contextContainer} sx={{ flexGrow: 1}}>
          <CompRoutes/>
          <CompFooter/>
        </Box> 
        <Box className={styles.contextNavContainer}>
          <CompVerticalNav/>
        </Box>
      </Box> */}
      <Box
      className={styles.mainContainer}
      component="main"
      sx={{ flexGrow: 1, pt: 0,
        maxHeight: 1440,
        height: '96vh',
        overflow: 'auto',
        // border: '2px dotted green'
      }}
      >
        {/* <Toolbar sx={{display: { xs: 'block', md: 'none' },}}/>

        <Outlet/> */}
        <Box className={styles.contextContainer} sx={{ flexGrow: 1}}>
          {/* <CompRoutes/> */}
          <CompFooter/>
        </Box>
      </Box>

      <Box className={styles.contextNavContainer} sx={{
        position: 'relative',
        border: '2px dotted red'
      }}>
        {/* <CompVerticalNav/> */}
        <MenuDrawer  openMiniMobile={true} setOpenMiniMobile={setOpen}/>

      </Box>

    </Box>
  )
};

export default CompSiteLayout;
