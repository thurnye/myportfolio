import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import {Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from './CompServices.module.scss';
import { useTranslation } from "react-i18next";
import { useDataCustomHook } from '../../../../Data/data';


interface CompServicesProps {}

const CompServices: FC<CompServicesProps> = () => {
  const {t} = useTranslation();
  const {homePage: {services}} = useDataCustomHook();


 return (
    <div className={styles.CompServices} data-testid="CompServices">

      
      <Box sx={{mt: 2}}>
      <Typography sx={{ my: 2, fontWeight: 700, letterSpacing: 1, fontSize: 18, color: 'white'}} >{t('myServices')}</Typography>
      <Box sx={{}}>
        <Grid container spacing={{ xs: 2, md: 3 }} >
          {services.map((el, i) => (
            <Grid item xs={12} sm={6} lg={4} key={el.title}>
              <Box  sx={{height: '100%', p: 3, background: '#2D2D39'}}>
                <Typography sx={{mr: 3, mb: 2, fontWeight: 700, fontSize: 15, color: 'white'}}>{el.title}</Typography>
                <Typography sx={{color: '#8C8C8E'}}>{el.description}
                <Link to={'/contact'} style={{
                  textDecoration: 'none',
                  color: '#ffc107'
                }}>{' '} {t('here')}. </Link>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    </div>
  )
};

export default CompServices;
