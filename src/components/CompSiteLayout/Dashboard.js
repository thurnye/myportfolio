import * as React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Dashboard.module.scss';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import MenuDrawer from './MenuDrawer'
import { useTheme } from "@mui/material";
import Info from './Info/Info'
import CompFooter from '../CompFooter/CompFooter';
import CompMobileNavBar from '../CompMobileNavBar/CompMobileNavBar';

const drawerWidth = 300;

function Dashboard() {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [openMiniMobile, setOpenMiniMobile] = React.useState(false);
  const theme = useTheme();
  const sub =theme.palette.background.sub;


  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };



  return (
    <Box  sx={{display : 'flex', mt: 2}}>
      <CssBaseline />
      <Box  sx={{
          display:{xs: 'block', md: 'none'},
          width: '100%',
          position:'fixed',
          top:0,
            backgroundColor: '#20202A',
          maxHeight: 53,
          zIndex: 9999
        }}>
          <CompMobileNavBar handleDrawer={handleDrawerToggle} openMenu={() => setOpenMiniMobile(!openMiniMobile)} /> 
      </Box>
      <Box>
      </Box>

      <Box
        component="nav"
        sx={{ 
          width: { md: drawerWidth }, 
          flexShrink: { md: 0 }
        }}
        aria-label="mailbox folders"
        
      >
        {/* Small Screen */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', 
                width: drawerWidth,
                backgroundColor: '#20202A'
                
            },
          }}
        >
          <Info/>
        </Drawer>

        {/* Large Screen */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth, 
            position: 'absolute', 
            background: '#20202A',
            border: 'none',
            ml:1,
            boxShadow: '2px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'  
          },
          }}
          open
        >
          <Info/>
        </Drawer>
      </Box>
      <Box
      component="main"
      sx={{ 
        flexGrow: 1,  
        pt: 0,
        maxHeight: 1440,
        height: '97vh',
        overflow: 'auto',
      }}
      className={styles.mainContainer}
      >
        <Box 
        className={styles.contentContainer}
        >
            <Toolbar sx={{display: { xs: 'block', md: 'none' },}}/>
            <Outlet/>
            <CompFooter/>
        </Box>
      </Box>
      <Box>
        <MenuDrawer setOpenMiniMobile={setOpenMiniMobile} openMiniMobile={openMiniMobile} backgroundColor={sub}/>
      </Box>
    </Box>
  );
}


export default Dashboard;