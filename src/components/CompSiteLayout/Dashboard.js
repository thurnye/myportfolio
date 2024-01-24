import * as React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Dashboard.module.scss';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuDrawer from './MenuDrawer'
import { useTheme } from "@mui/material";
import Info from './Info/Info'
import CompFooter from '../CompFooter/CompFooter';

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
          display:{xs: 'flex', md: 'none'},
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          position:'fixed',
          top:0,
        //   backgroundColor: sub,
            backgroundColor: 'grey',
          maxHeight: 53,
          p:2,
          zIndex: 9999
        }}>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ p: 2, display: { md: 'none' } }}
          >
            <MoreVertIcon />
          </IconButton>

            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => setOpenMiniMobile(!openMiniMobile)}
            sx={{ p: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
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
                backgroundColor: sub
                
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', 
            width: drawerWidth, 
            position: 'absolute', 
            backgroundColor: sub,
            border: 'none',
            ml:1  
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