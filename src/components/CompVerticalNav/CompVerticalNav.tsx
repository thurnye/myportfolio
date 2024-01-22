import React, { FC } from 'react';
import styles from './CompVerticalNav.module.scss';

import CompOpenCloseIcon from '../CompOpenCloseIcon/CompOpenCloseIcon';
import { Drawer, Typography } from '@mui/material';
import CompRightDrawer from '../CompRightDrawer/CompRightDrawer';
import { useAppContext } from '../../Context/context';

interface CompVerticalNavProps {}

const CompVerticalNav: FC<CompVerticalNavProps> = () => {

  const [open, setOpen] = React.useState(false);
  const {activeNav, openRightNav, setOpenRightNav} = useAppContext()
  
 
  
  return (
    <div className={styles.CompVerticalNav} data-testid="CompVerticalNav">
      <div className={styles.navContainer}>
        <div className={styles.verCompHeader}>
            <div onClick={ () => setOpenRightNav(!openRightNav)} className={styles.vNavHeader}>
              <CompOpenCloseIcon open={openRightNav}/>
            </div>
        </div>
          <Typography
          variant="h4"
          component="div"
          fontSize={24}
          className={`${styles.activeNavHeader} ${openRightNav ? styles.fadeOut : ''}`}
          >
            {activeNav}
          </Typography> 
        <div className={styles.navContentContainer}>
        <Drawer
                  anchor={'right'}
                  open={openRightNav}
                  onClose={()=> setOpenRightNav(false)}
                  sx={{
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { 
                      marginTop: '1rem',
                      background: '#1E1E28',
                      height: '96vh'
                    },
                  }}
                  >
                  <CompRightDrawer onClose={() => setOpenRightNav(false)}/>
              </Drawer>
        </div>
      </div>


    </div>
  )
};

export default CompVerticalNav;
