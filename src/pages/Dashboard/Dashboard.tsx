import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './Dashboard.module.scss';
import Home from './Home/Home';
import Slider from './Slider/Slider'
import Contact from './Contact/Contact';
import PortFolio from './PortFolio/PortFolio';
import Profile from './Profile/Profile';
import Stacks from './Stacks/Stacks';
import Footer from './Footer/Footer';
import { Container } from '@mui/material';


interface DashboardProps {
  window?: () => Window;
  getComponent: Function
}

const Dashboard: FC<DashboardProps> = (props:DashboardProps) => {
  const {window, getComponent }= props
  const [mobileOpen, setMobileOpen] = useState(false);
  const [value, setValue] = useState<number>(0)
  const [component, setComponent] = useState<string>('Home')


  const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
  ];
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawerWidth = 315;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{background: '#20212a', height: '100vh', overflow: 'auto'}}>
      <Toolbar sx={{display: { xs: 'none', sm: 'flex' },     
    justifyContent: 'center',
    alignItems: 'center',}}> 
      <Typography
            variant="h6"
            noWrap
            component="a"
            href="/dashboard"
            sx={{
              mr: 2,
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#959595',
              textDecoration: 'none',
              textAlign: 'center'
            }}
          > {component.toUpperCase()}</Typography>
      </Toolbar>
        <Profile/>
        <Stacks/>
      <Box>
        <Footer/>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const getValue = (e:number, comp:string) => {
    setValue(e)
    setComponent(comp)
    getComponent(comp)
  }


  return(
    <div className={styles.Dashboard} data-testid="Dashboard">
      <div className={styles.hamburger}>
        <IconButton
              color="success"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
        </IconButton>
        <Box>
          <Slider getValue={getValue}/>
        </Box> 
      </div>
      <Box sx={{ display: 'flex', justifyContent:"center", alignItems:"start"}} >
        {/* <CssBaseline /> */}
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, top: '56px', background: '#20212a' },
              
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, top: '64px', background: '#20212a' },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        {/* MAIN */}
        <Box
          component="main"
          sx={{ 
            flexGrow: 1, 
            width: { sm: `calc(100% - ${drawerWidth}px)` }, 
            textAlign:"initial", 
            p:1,
            overflow: 'auto',
            height: 'calc(100vh - 88px)',
            mt: { xs: 0 , sm: 3 },
          }}
        >

          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: 'fit-content',
                width: '20ch',
              },
            }}
          >
          </Menu>
          {/* <Carousel/> */}
          <Box sx={{display: 'flex', mr: {sm: 11, xs: 5}, ml: 2, background: 'red'}}> 
            
            {/* Home */}
            <Box sx={{display: value === 0 ? 'block': 'none', p: 2}}><Home/></Box>

            {/* Profile */}
            <Box sx={{display: value === 1 ? 'block': 'none', p: 2}}><PortFolio/></Box>

              {/* Manage Sub */}
            <Box sx={{display: value === 2 ? 'block': 'none', p: 2}}><Contact/></Box>
          </Box>
        </Box>
      </Box>
            
    </div>
  )
};

export default Dashboard;
