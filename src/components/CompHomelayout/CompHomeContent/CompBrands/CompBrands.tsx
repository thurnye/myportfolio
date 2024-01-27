import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import CardMedia from '@mui/material/CardMedia';
import styles from './CompBrands.module.scss';
import { useDataCustomHook } from '../../../../Data/data';



interface CompBrandsProps {}

const CompBrands: FC<CompBrandsProps> = () => {
  const {homePage: {brands}} = useDataCustomHook();
  
  return(
    <div className={styles.CompBrands} data-testid="CompBrands">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {brands.map((el, index) => (
            <Grid item xs={2} sm={2} md={3} key={`brands_${index}`}>
             <div className={styles.brandContainer}>
                <CardMedia
                  component="img"
                  image={el.brand}
                  alt='brands'
                />
             </div>
            </Grid>
          ))}
        </Grid>
      </Box>

    </div>
  )
};

export default CompBrands;