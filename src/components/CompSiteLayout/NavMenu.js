import React, {useState, useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grow from '@mui/material/Grow';


const dataNav = [
  { "id": 0, "title": "Home", "subMenu": false, "path": "home" },
  {
    "id": 1,
    "title": "Projects",
    "path":"projects",
    "subMenu": [
      {
        "title": "Projects",
        "subtitle": "2 Columns",
        "path": "/projects-2-col"
      },
      {
        "title": "Projects",
        "subtitle": "3 Columns",
        "path": "/projects-3-col"
      }
    ]
  },
  { "id": 2, "title": "History", "subMenu": false, "path": "history" },
  { "id": 3, "title": "About", "subMenu": false, "path": "about" },
  { "id": 4, "title": "Contact", "subMenu": false, "path": "contact" }
];

const NavMenu = ({open, setOpen, isMobile}) => {
  let location = useLocation();
  
  const [state, setState] = useState('HOME');

  useEffect(() => {
    if(location.pathname){
      setState(location.pathname.substring(1).toUpperCase())
    }
  }, [location])

  
  return(
    <List sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: isMobile ? 'center' : open ? 'center' : 'flex-start',
          alignItems: 'center'
          }}>
            {/* Large screen only */}
            {!isMobile && 
              <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemText primary={state} sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                display: open ? 'none' : 'block',
                px: 2.5,
                transform: 'rotateZ(90deg)',
                letterSpacing: 3,
                mt: 2
              }}/>
              </ListItem>
            }
          {open && dataNav.map((el, index) => (
            <Grow
            key={el.path}
            in={open}
            style={{ transformOrigin: '0 0 0' }}
            {...(open ? { timeout: 1000 * (index + 1) } : {})}
          >
            <ListItem  disablePadding sx={{ display: 'block' }}> 
              <ListItemButton
                sx={{
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5
                }}
                onClick={() => setOpen(false)}
              >
                <Link 
                  to={el.path} 
                  underline="none" 
                  style={{ 
                    opacity: open ? 1 : 0,
                    width: '100%',
                    textDecoration: 'none',
                     color: 'inherit'
                  }}
                >
                  {el.title}
                </Link>
              </ListItemButton>
            </ListItem>
          </Grow>
          ))}
        </List>
)};

export default NavMenu;
