import React, { FC } from 'react';
import styles from './CompExperience.module.scss';
import CompCircularProgressBar from '../../../CompCircularProgressBar/CompCircularProgressBar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useDataCustomHook } from '../../../../Data/data';

interface CompExperienceProps {}

const CompExperience: FC<CompExperienceProps> = () => {
  const {homePage: {experiences}} = useDataCustomHook();

  

  return(
    <div className={styles.CompExperience} data-testid="CompExperience">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {experiences.map((el, index) => <Grid item xs={2} sm={2} md={3} key={index}>
          <Box className={styles.expItems}>
                  <CompCircularProgressBar variant='number' progress={el.number}/>
                  <Typography
                    variant="caption"
                    component="div"
                    fontSize={15}
                    className={styles.suffix}
                    >
                    {el.suffix}
                  </Typography>
                  <Typography
                    variant="caption"
                    component="div"
                    fontSize={15}
                    className={styles.expDesc}
                  >
                  <strong>{el.name}</strong> 
                  </Typography>
              </Box>
          </Grid>)}
          
        </Grid>
    </Box>
    </div>
  )
};

export default CompExperience;
