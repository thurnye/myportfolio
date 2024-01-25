import React, { FC } from 'react';
import styles from './CompJumbotron.module.scss';
import { Box, CardMedia, Typography } from '@mui/material';
import CompCode from '../../CompCode/CompCode';
import { Link } from 'react-router-dom';
// import avatar from '../../../public/images/bitMoji/mainAvatar.png'
import { useDataCustomHook } from '../../../Data/data';




interface CompJumbotronProps {}

const CompJumbotron: FC<CompJumbotronProps> = () => {
  const { banner: { header, subHeader, avatar, buttonText } } = useDataCustomHook();

  console.log(avatar)
  return(
      <div className="jumbotron">
        <Box className={styles.CompJumbotron} data-testid="CompJumbotron" >
          <Box className={styles.jumbotronComponent1} sx={{display: {xs: 'none', sm: 'block'}}}></Box>
          <div className={styles.jumbotronComponent2}></div>
          <Box className={styles.jumbotronComponent3}
          >
            <Box className={styles.jumbotronContentContainer}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: {xs: 'space-between', md: 'center'},
                alignItems: 'center',
              }}
            >
              <Box sx={{
                display: {xs: 'none', md: 'block'},
                position: 'absolute',
                right: 0,
              }}>
                <CardMedia
                sx={{ height: 200, width: 200, 
                  "-webkit-transform": 'scaleX(-1)',
                  transform: 'scaleX(-1)' }}
                image={avatar}
                title="avatar"
              />
              </Box>
              <Typography variant="h4" component="div" gutterBottom className={styles.jumbotronHead}
              sx={{
                fontSize: {xs:'1.9rem', sm: '2rem' }
              }}> 
                {header}
              </Typography>
              <Box>
                <Typography variant="body1" component="div" gutterBottom className={styles.cardHead}> 
                  <CompCode typed={subHeader} />
                </Typography>

              </Box>
              <div className={styles.contactNow}>
                
                <Link to={'/contact'}>{buttonText}</Link>
              </div>
            </Box>
          </Box>
        </Box>
    </div>
)
};

export default CompJumbotron;
