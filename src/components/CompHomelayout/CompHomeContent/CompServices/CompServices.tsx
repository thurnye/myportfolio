import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from './CompServices.module.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CompFeatherIcon from '../../../CompFeatherIcon/CompFeatherIcon';
import { ChevronRight } from 'react-feather';

interface CompServicesProps {}

const CompServices: FC<CompServicesProps> = () => {

  const services = [
    {
      service: 'Web Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'
    },
    {
      service: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'
    },
    {
      service: 'Musical Performances',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'
    },
    {
      service: 'Game Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'
    },
    {
      service: 'Advertising',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'
    },
    {
      service: 'Photography',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'
    }
  ]


 return (
    <div className={styles.CompServices} data-testid="CompServices">
      <Typography
        variant="h4"
        component="div"
        fontSize={18}
        className={styles.servicesHeader}
      >
      <strong>My Services</strong>
      </Typography> 

      <div className={styles.cardComponent}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {services.map((el, index) => (
    <Grid item xs={4} sm={4} md={4} key={index}>
       <Box sx={{ minWidth: 250 }}>
        <Card variant="outlined" className={styles.cardItem}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom className={styles.cardHead}>
              {el.service}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" className={styles.cardBody}>
              {el.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" className={styles.cardRedirect} >
              <span>ORDER NOW</span>  <CompFeatherIcon icon={<ChevronRight/>} size={15}/> 
            </Typography>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  ))}
</Grid>
      </div>
    </div>
  )
};

export default CompServices;
