import React, { FC, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Star } from 'react-feather';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import styles from './CompRecommendations.module.scss';
import { useDataCustomHook } from '../../../../Data/data';
import { useTranslation } from "react-i18next";


interface CompRecommendationsProps {}


const CompRecommendations: FC<CompRecommendationsProps> = () => {
  const {t} = useTranslation();
  const {homePage: {recommendations}} = useDataCustomHook();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setViewportWidth(window.innerWidth);
    };
    // Add event listener to update viewport width on window resize
    window.addEventListener('resize', handleWindowResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className={styles.CompRecommendations} data-testid="CompRecommendations">
      <Typography
      variant="h4"
      component="div"
      fontSize={18}
      className={styles.recommendationHeader}
      >
      <strong>{t('recommendations')}</strong>
      </Typography> 
      
      <OwlCarousel items={viewportWidth > 750 ? 2: 1} className="owl-theme" loop nav margin={8} > 
      {recommendations.map((el) => <div>
        <Box sx={{ minWidth: 250 }}>
          <Card variant="outlined" className={styles.cardItem}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom className={styles.cardHead}>
               <span>{el.name}</span> 
               <span>{el.profession}</span>
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" className={styles.cardBody}>{el.notes}</Typography>
            </CardContent>
            <CardActions>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" className={styles.cardRedirect} >
              {Array.from(Array(el.stars)).map((_, index) => (
                <span key={`star_${index}`}><FontAwesomeIcon icon={['fas', 'star']} /> </span>
              ))}
              </Typography>
            </CardActions>
              </Card>
          </Box>
        </div>  
      )} 
      </OwlCarousel>
    </div>
  )
};

export default CompRecommendations;