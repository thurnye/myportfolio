import React, { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material';
import styles from './CompMasonryLayout.module.scss';

interface CompMasonryLayoutProps {
  type: string
}



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: 0,
  background: 'none'
}));
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  color: theme.palette.text.secondary
}));

const CompMasonryLayout: FC<CompMasonryLayoutProps> = (props: CompMasonryLayoutProps) => {
  const {type} = props;
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [heights, setHeights] = useState<number[]>([]);

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

  useEffect(() => {
    window.addEventListener('error', e => {
        if (e.message === 'ResizeObserver loop limit exceeded') {
            const resizeObserverErrDiv = document.getElementById(
                'webpack-dev-server-client-overlay-div'
            );
            const resizeObserverErr = document.getElementById(
                'webpack-dev-server-client-overlay'
            );
            if (resizeObserverErr) {
                resizeObserverErr.setAttribute('style', 'display: none');
            }
            if (resizeObserverErrDiv) {
                resizeObserverErrDiv.setAttribute('style', 'display: none');
            }
        }
    });
  }, []);

  useEffect(() => {
    if(viewportWidth > 750){
      setHeights(Array.from({length: 12}, () => Math.floor(Math.random() * (300 - 200 + 1)) + 200));
    }
    if(viewportWidth < 750){
      setHeights(Array.from({length: 12}, () => Math.floor(Math.random() * (90 - 150 + 1)) + 120));
    }
    
  },[viewportWidth])
  
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
  
  return(
    <div className={styles.CompMasonryLayout} data-testid="CompMasonryLayout">
      <Box sx={{ width: '100%', minHeight: 393 }}>
        <Masonry
          columns={4}
          spacing={1}
          // defaultHeight={450}
          defaultColumns={4}
          defaultSpacing={ 1}
        >
          {images.map((url:string, index:number) => <React.Fragment key={index}>
            {/* {type === 'Mosaic' &&  */}
              <CardActionArea>
                <Item key={`Mosaic_${index}`} sx={{ height: heights[index] , backgroundImage: `url(${url})`}} className={styles.thumbnailContent}>
                </Item>
              </CardActionArea>
            {/* } */}
            {/* {type === 'Masonry' && <Paper key={`Masonry_${index}`} >
              <StyledAccordion sx={{ minHeight: height, backgroundImage: `url(${imgUrl})` }} className={styles.thumbnailContent}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>Contents</AccordionDetails>
              </StyledAccordion>
            </Paper>
          } */}
          </React.Fragment>
            
          )}
        </Masonry>
      </Box>

    </div>
  )
};

export default CompMasonryLayout;
