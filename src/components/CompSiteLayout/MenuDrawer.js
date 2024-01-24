import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NavMenu from './NavMenu';
import MenuIcon from '@mui/icons-material/Menu';


const drawerWidth = 150;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme, open) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: open ? `calc(${theme.spacing(7)} + 1px)` : 0,
  [theme.breakpoints.up('md')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  // border: '2px dotted red',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open, background }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {
        ...openedMixin(theme),
        position:'absolute',
        // background: background,
        border: 'none',
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {
        ...closedMixin(theme, open),
        position: 'absolute',
        // background: background,
        border: 'none', 
      },
    }),
  }),
);

export default function MenuDrawer({openMiniMobile, setOpenMiniMobile}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


  return (
    <Box sx={{ display: 'flex',}}>

        {/* mobile Screens */}
        <Drawer  variant="permanent" open={openMiniMobile} sx={{
          display: { xs: 'flex', md: 'none' },
          '& .MuiDrawer-paper':{
            background: '#20202A',
            color: '#8c8c8e'
          },
          
          }} anchor='right'>
          <DrawerHeader>
            <IconButton onClick={() => setOpenMiniMobile(!openMiniMobile)}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>

          <Divider />
          <NavMenu open={openMiniMobile} setOpen={setOpenMiniMobile} isMobile={true}/>
        </Drawer>

      {/* Large Screen */}
      <Drawer 
        variant="permanent" 
        open={open} 
        anchor='right' 
        sx={{display: { xs: 'none', md: 'block' },
        '& .MuiDrawer-paper':{
          background: '#20202A',
          color: '#8c8c8e',
          boxShadow: '-3px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        },
        }}
      >
        <DrawerHeader sx={{
          background: '#252530'
        }}>
          <IconButton onClick={() => setOpen(!open)} sx={{
            color: '#8c8c8e',
            '&:hover':{
              color: 'white'
            }
            }}>
            {open ? <ChevronRightIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <NavMenu open={open} setOpen={setOpen} isMobile={false}/>
      </Drawer>
    </Box>
  );
}