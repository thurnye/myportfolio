import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {MoreVertical, Menu} from 'react-feather'
import CompFeatherIcon from '../CompFeatherIcon/CompFeatherIcon';
import styles from './CompMobileNavBar.module.scss';
import AdbIcon from '@mui/icons-material/Adb';
import { Drawer } from '@mui/material';
import CompLeftDrawer from '../CompLeftDrawer/CompLeftDrawer';
import CompRightDrawer from '../CompRightDrawer/CompRightDrawer';
import { ManageContext } from '../../Context/context';


interface CompMobileNavBarProps {}

export type Anchor = 'left' | 'right' | undefined;
export interface DrawerType{
  open: boolean;
  anchor: Anchor
};


const CompMobileNavBar: FC<CompMobileNavBarProps> = () =>{

  const [drawerState, setDrawerState] = React.useState<DrawerType>({
    open: false,
    anchor: undefined
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => {
    setDrawerState({ ...drawerState, open: open , anchor: anchor});
  };
  
  return(
    <ManageContext.Provider value={{setDrawerState, drawerState}}>
      <div className={styles.CompMobileNavBar} data-testid="CompMobileNavBar">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className={styles.NavBar}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => toggleDrawer('left', true)}
              >
                
                <CompFeatherIcon size={18} icon={<MoreVertical/>}/>
              </IconButton>
              
              <Box component="div" sx={{ 
                flexGrow: 1,
                display: 'flex',
                textAlign: 'center', 
                justifyContent: 'center',
                alignItems: 'center'
                }}>
                <Box component="a" href="/">
                  <AdbIcon sx={{ mr: 1 , color: 'white'}} />
                </Box>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    fontFamily: 'monospace !important',
                    fontWeight: ' 700 !important',
                    letterSpacing: '.3rem !important',
                    color: '#d4cece',
                    textDecoration: 'none',
                  }}
                  className={styles.ProfileName}
                > THURNYE</Typography>
              </Box>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => toggleDrawer('right', true)}
              >
                <CompFeatherIcon size={18} icon={<Menu/>}/>
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>

        {/* Drawer */}
        <Drawer
          anchor={drawerState.anchor}
          open={drawerState.open}
          onClose={()=>toggleDrawer(drawerState.anchor, false)}
          sx={{
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { 
              boxSizing: 'border-box',
              background: '#1E1E28'
            },
          }}
        >
          {drawerState.anchor === 'left' && <CompLeftDrawer />}
          {drawerState.anchor === 'right' && <CompRightDrawer onClose={()=>toggleDrawer(drawerState.anchor, false)}/>}
        </Drawer>
      </div>
    </ManageContext.Provider>
  )
};

export default CompMobileNavBar;
