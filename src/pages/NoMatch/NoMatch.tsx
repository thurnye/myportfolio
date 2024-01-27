import React, { FC } from 'react';
import styles from './NoMatch.module.scss';
import Box from '@mui/material/Box';
import { useDataCustomHook } from '../../Data/data';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

interface NoMatchProps {}

const NoMatch: FC<NoMatchProps> = () => {
  const {noMatchPage: {bgImg, header, subHeader}} = useDataCustomHook();
  
  return(
  <Box className={styles.NoMatch} data-testid="NoMatch" sx={{
    height: '92.56vh',
    p:3,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column'
  }}>
    <Card sx={{
      width: '100%',
      display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    background: 'transparent',
    boxShadow: 'none',
    border: 'none'
    }}>
      <Typography variant="h4" gutterBottom sx={{color: '#ffc107', textAlign: 'center', mb: 10}}>
          {header}
        </Typography>
        <Box sx={{textAlign: 'center'}}>
          <img
            srcSet={bgImg}
            src={bgImg}
            alt={'page not found'}
            loading="lazy"
            width={254}
            height={254}
          />

          <Typography variant="body1" gutterBottom sx={{mt: 2, maxWidth: 490, color: '#8c8c8e'}}>
              {subHeader}
            </Typography>
        </Box>

    </Card>
  </Box>
)};

export default NoMatch;
