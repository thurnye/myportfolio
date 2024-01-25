import React, {useState, useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useTranslation } from "react-i18next";
import { useDataCustomHook } from '../../Data/data';



const NavMenu = ({open, setOpen, isMobile}) => {
  const { t,i18n } = useTranslation()
  let location = useLocation();
  const [state, setState] = useState('');
  const [lang, setLang] = useState('EN');
  const {translations, navs} = useDataCustomHook()


  useEffect(() => {
    if(location.pathname){
      setState(t(location.pathname.substring(1)).toUpperCase())
    }
  }, [location, t])

  
  return(
    <List sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: isMobile ? 'center' : open ? 'center' : 'flex-start',
          alignItems: 'center',
          position: 'relative',
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

            <ListItem disablePadding sx={{ display: 'block', 
              position: 'absolute',
              bottom: 0,
              width: '100%',
              }}>
                <Grow
                  in={true}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(open ? { timeout: 100  } : {})}
                >
                  <Box sx={{
                    height: 150,
                    textAlign: 'center',
                    background: '#252530',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                  }}>
                    {translations.map((el, i) => <Avatar sx={{ 
                      cursor: 'pointer',
                      background: lang === el.label ? '#FFC107' : '#1E1E28',
                      color: lang === el.label ? 'black' : '#8C8C8E',
                      height: 25,
                      width: 25,
                      fontSize: 10,
                      mb: i === 0 ? 3 : 0,
                      '&:hover':{
                        color : lang === el.label ? 'black' : 'white',
                      }
                     }} 
                     aria-label="translations"
                     onClick={() => {
                      setLang(el.label);
                      i18n.changeLanguage(el.label);
                    }}
                     >
                      {el.label}
                    </Avatar>)}
                  </Box>
                </Grow>
            </ListItem>
          {open && navs.map((el, index) => (
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
                  px: 2.5,
                  color: el.title.toUpperCase() === state.toUpperCase() ? 'white' : '',
                  '&:hover':{
                    color: 'white'
                  }
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
