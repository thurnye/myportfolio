import React, { FC} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Me from '../../../public/images/me.jpeg'


import styles from './Profile.module.scss';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  
  return(
  <div className={styles.Profile} data-testid="Profile">
    <Box sx={{mt: 4,}}>
      <Box sx={{width: 100, margin: 'auto'}}>
      <CardMedia
        component="img"
        image={Me}
        alt="Daniel Tamunotonye"
        sx={{borderRadius: '50%'}}
      />
      <Box className={styles.lampContainer}>
        <div  className ={styles.lamp}></div>
        <span className={styles.availability}>Available for work</span>
      </Box>
      </Box>
      <CardContent sx={{display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center'}}>
        <Typography gutterBottom variant="h6" component="p">
          Daniel Tamunotonye
        </Typography>
        <Typography variant="body2" color="#818896">
          FullStack Developer
        </Typography>
        <Typography variant="body2" color="#818896">
          Ui/Ux Developer
        </Typography>
      </CardContent>
    </Box>
  </div>
);
}
export default Profile;
