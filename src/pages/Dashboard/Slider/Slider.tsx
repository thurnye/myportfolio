import React, { FC, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import styles from './Slider.module.scss';

interface SliderProps {
  getValue : Function
}

const Slider: FC<SliderProps> = (props: SliderProps) => {
  const {getValue} = props
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [value, setValue] = useState<number>(0)

  const handleClick = () => {
    // console.log('clicked')
    setShowMenu(!showMenu)
  }
  const handleActive = (e:any, index:number) => {
    setValue(index) 
    getValue(index, e.text)
  }
  
  
  return(
  <div className={styles.Slider} data-testid="Slider">
    <div className={
      showMenu ? [styles.menu, styles.showNav].join('') : 
      styles.menu
      }>
        <Box className={styles.menuContent} sx={{
        background: '#f7f5f5'}}
        onClick={handleClick}
        >
          <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                sx={{ ml: {sm: 3, xs: 0}, mt: 1, display: 'block',}}
              >
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </IconButton>

          </Box>
        <div className={styles.title}>MENU</div>
          {/* <ul className={styles.nav}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Contact</a></li>
          </ul> */}
          <List className={styles.nav}>
        {[{
    text: 'Home',
    path: '/dashboard'
  },
    {
    text: 'PortFolio',
    path: 'dashboard/portfolio'
  },
    {
    text: 'Contact',
    path: 'dashboard/contact'
  }].map((el, index) => (
          <ListItem key={el.text} disablePadding onClick={() => handleActive(el, index)} 
          sx={{ color: index === value ? '#1976d2' : 'inherit'}}>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <Icon
                baseClassName="fas"
                className="fa-duotone fa-house"
                sx={{ color: index === value ? '#1976d2' : 'inherit', width:' 2rem'}}
                fontSize="small" 
              />}
                {index === 1 && <Icon
                baseClassName="fas"
                className="fa-duatone fa-user"
                sx={{ color: index === value ? '#1976d2' : 'inherit', width:' 2rem'}}
                fontSize="small" 
              />}
                {index === 2 && <Icon
                baseClassName="fas"
                className="fa-solid fa-file-invoice-dollar"
                sx={{ color: index === value ? '#1976d2' : 'inherit', width:' 2rem'}}
                fontSize="small" 
              />}
                {index === 3 && <Icon
                baseClassName="fas"
                className="fa-duotone fa-square-plus"
                sx={{ color: index === value ? '#1976d2' : 'inherit', width:' 2rem'}}
                fontSize="small" 
              />}
              </ListItemIcon>
              <ListItemText primary={el.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </div>
  </div>
);
}
export default Slider;
