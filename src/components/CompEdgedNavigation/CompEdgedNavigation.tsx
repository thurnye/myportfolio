import React, { FC } from 'react';

import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from './CompEdgedNavigation.module.scss';
import CompNavContents from '../CompNav/CompNavContents/CompNavContents';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  backgroundColor: '#20202A'
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



interface CompEdgedNavigationProps {}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const CompEdgedNavigation: FC<CompEdgedNavigationProps> = () =>{

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.CompEdgedNavigation} data-testid="CompEdgedNavigation">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Drawer variant="permanent" open={open} anchor={'right'} className={styles.drawerComp}>
          <DrawerHeader className={styles.drawerHeader}>
            {!open ?
          <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{
                marginRight: 'auto',
                textAlign: 'center',
              }}
              className={styles.hamburgerMenu}
            >
              <MenuIcon />
            </IconButton> :
            <IconButton onClick={handleDrawerClose} className={styles.hamburgerMenu}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>}
          </DrawerHeader>
              {!open ? 
          <div className={styles.transformNav}>
            <Typography variant="h6" component="div">
              <strong>HOME</strong>
            </Typography>
          </div> : 
          <CompNavContents/>
          }
        </Drawer>
      </Box>
  </div>
  );
}

export default CompEdgedNavigation;
