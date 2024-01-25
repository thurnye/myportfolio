import React, { FC } from 'react';
import styles from './About.module.scss';
import CompFeatherIcon from '../../../CompFeatherIcon/CompFeatherIcon';
import {MoreVertical} from 'react-feather'
import Connection from '../../../Connection/Connection';
import Box from '@mui/material/Box';
import { useDataCustomHook } from '../../../../Data/data';

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const {sidebar: {name, avatar, profession}} = useDataCustomHook();

  return(
  <div className={styles.About} data-testid="About">
      <div>
        <Box sx={{pt: 4}}>
          <div className={styles.avatarContainer}>
            <img src={avatar} alt="Daniel TAMUNOTONYE" />
          </div>
          {/* <div className={styles.lampContainer}>
            <div  className ={styles.lamp}></div>
            <span className={styles.availability}>Available for work</span>
          </div> */}
        </Box>
      </div>

      <div className={styles.name_job}>
        <h5>{name}</h5>
        {profession.map((el) => <p key={el}>{el}</p>)}
        
      </div>
      <div className={styles.socialConnection}>
        <Connection/>
      </div>
  </div>
)};

export default About;
