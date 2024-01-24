import React, { FC } from 'react';
import styles from './About.module.scss';
import CompFeatherIcon from '../../../CompFeatherIcon/CompFeatherIcon';
import {MoreVertical} from 'react-feather'
import photo from '../../../../public/images/me.jpeg'
import Connection from '../../../Connection/Connection';
import { useManageContext } from '../../../../Context/context';
import Box from '@mui/material/Box';

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const {drawerState, setDrawerState} = useManageContext();
  

  return(
  <div className={styles.About} data-testid="About">
      <div>
        <Box sx={{pt: 4}}>
          <div className={styles.avatarContainer}>
            <img src={photo} alt="Daniel TAMUNOTONYE" />
          </div>
          {/* <div className={styles.lampContainer}>
            <div  className ={styles.lamp}></div>
            <span className={styles.availability}>Available for work</span>
          </div> */}
        </Box>
      </div>

      <div className={styles.name_job}>
        <h5>DANIEL TAMUNOTONYE</h5>
        <p>Full-Stack Developer</p>
        <p>Ui/Ux Developer</p>
      </div>
      <div className={styles.socialConnection}>
        <Connection/>
      </div>
  </div>
)};

export default About;
