import React, { FC, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from './CompThumbnailLayout.module.scss';
import { Globe, GitHub } from 'react-feather';
import CompFeatherIcon from '../../CompFeatherIcon/CompFeatherIcon';

interface CompThumbnailLayoutProps {
  type?: string
}

const CompThumbnailLayout: FC<CompThumbnailLayoutProps> = (props: CompThumbnailLayoutProps ) => {
  const {type} = props;


  const images: string[] = [
    'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg"
  ];
  return (
  <div className={styles.CompThumbnailLayout} data-testid="CompThumbnailLayout">
   <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{margin: 0}}>
      {images.map((url:string, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} className={styles.GridCardContainer} sx={{ml: 0, mb: 3}}>
            {/* item {index} */}
              <CardActionArea>
                <Card sx={{ backgroundImage: `url(${url})`}} className={styles.thumbnailContent}>
                  {!type  && <CardContent>
                    <Box className={styles.gridCardContents}>
                  <Typography gutterBottom  component="div">
                    Some Name
                  </Typography>
                  <Typography color="text.secondary">
                    <span>
                    <a href="#" target='_blank'>
                    <CompFeatherIcon size={18} icon={<Globe/>}/>

                    </a>
                    </span>
                    <span>
                    <a href="https://github.com/" target='_blank'>
                    <CompFeatherIcon size={18} icon={<GitHub/>}/>

                    </a>
                    </span>
                  </Typography>

                  </Box>
                  </CardContent>
                  }
                </Card>
              </CardActionArea>
          </Grid> 
      ))}
    </Grid>
    </Box>
  </div>
  )
}
;

export default CompThumbnailLayout;
