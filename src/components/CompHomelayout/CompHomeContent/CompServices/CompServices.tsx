import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import {Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from './CompServices.module.scss';

const services = [
  {
    "title" : "Web Development",
    "description": "Crafts dynamic, user-centric websites tailored to your brand. We specialize in responsive design, seamless functionality, and cutting-edge technologies. Elevate your online presence with our expert team, ensuring an engaging and effective digital experience for your audience. Transform your vision into a captivating and high-performing website."
  },
  {
    "title" : "UI/UX Design",
    "description": "Combines creativity and functionality to deliver visually stunning and intuitively crafted user interfaces. We focus on enhancing user experience, creating seamless navigation, and incorporating modern design trends. Elevate your brand with our expert designers, ensuring a visually appealing and user-friendly digital presence."
  },
  {
    "title" : "Game Design",
    "description": "Journey into immersive worlds, crafting engaging narratives, and developing captivating gameplay experiences. From concept to execution, our team blends creativity and technology to produce visually stunning and interactive games. Dive into a world of innovation and entertainment with our expert game designers."
  },
  {
    "title" : "Sound Mix",
    "description": "Harmonious blend of art and technology, enhancing your audio projects with precision and creativity. From music production to film soundtracks, we meticulously balance elements for optimal clarity and impact. Elevate your auditory experience with our skilled sound mix engineers, ensuring a captivating and immersive sonic journey."
  },
  {
    "title" : "Advertising",
    "description": "Our advertising services are a strategic blend of creativity and market insight. We craft compelling campaigns tailored to your brand, leveraging diverse channels to maximize reach. From digital platforms to traditional media, we ensure your message resonates, engages, and drives results. Elevate your brand presence with our targeted advertising solutions."
  }
]
interface CompServicesProps {}

const CompServices: FC<CompServicesProps> = () => {



 return (
    <div className={styles.CompServices} data-testid="CompServices">

      
      <Box sx={{mt: 2}}>
      <Typography sx={{ my: 2, fontWeight: 700, letterSpacing: 1, fontSize: 18, color: 'white'}} >My Services</Typography>
      <Box sx={{}}>
        <Grid container spacing={{ xs: 2, md: 3 }} >
          {services.map((el, i) => (
            <Grid item xs={12} sm={6} lg={4} key={el.title}>
              <Box  sx={{height: '100%', p: 3, background: '#2D2D39'}}>
                <Typography sx={{mr: 3, mb: 2, fontWeight: 700, fontSize: 15, color: 'white'}}>{el.title}</Typography>
                <Typography sx={{color: '#8C8C8E'}}>{el.description}. You can reach me
                <Link to={'/contact'} style={{
                  textDecoration: 'none',
                  color: '#ffc107'
                }}>{' '} here. </Link>
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
