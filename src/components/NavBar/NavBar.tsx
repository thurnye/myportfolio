import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import styles from './NavBar.module.scss';



interface NavBarProps {
  component: string
}

const NavBar: FC<NavBarProps> = (props: NavBarProps) => {
  const {component} = props

  return (
    <div className={styles.NavBar} data-testid="NavBar">
       <AppBar position="fixed" sx={{background: 'rgb(38 38 54)'}}>
      <Container maxWidth="xl" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Toolbar disableGutters >
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
          > THURNYE</Typography>
        </Toolbar>
          <Box sx={{display: { xs: 'block', sm: 'none' }}}>
          <Typography
            variant="h6"
            noWrap
            
            sx={{
              mr: 2,
              fontFamily: 'monospace !important',
              fontWeight: ' 700 !important',
              letterSpacing: '.3rem !important',
              color: '#959595',
              textDecoration: 'none',
            }}
          > <i>{component}</i>
          </Typography>
          </Box>
      </Container>
    </AppBar>
    </div>
  )
};

export default NavBar;
