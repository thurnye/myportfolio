import React, { FC, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from './CompGridLayout.module.scss';
import CompFeatherIcon from '../../CompFeatherIcon/CompFeatherIcon';
import { GitHub, Globe } from 'react-feather';

interface CompGridLayoutProps {
  num: number
}

const CompGridLayout: FC<CompGridLayoutProps> = (props: CompGridLayoutProps) => {
  const {num} = props;
  const [gridValue, setGridValue] = useState<number>(0);
  const imgUrl = 'https://mui.com/static/images/cards/contemplative-reptile.jpg';

  useEffect(() => {
    if(num > 0) {
      const val = 12/num
      setGridValue(val)
    }else{
      setGridValue(0)
    }
  }, [num]);

  return(
    <div className={styles.CompGridLayout} data-testid="CompGridLayout">
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{margin: 0}}>
      {Array.from(Array(6)).map((_, index) => (
        <React.Fragment key={`CompGridLayout${index}`}>
          {gridValue === 0 && <Grid item xs={12} sm={6} md={4} key={index} className={styles.GridCardContainer} sx={{ml: 0, mb: 3}}>
            {/* item {index} */}
            <Card className={styles.contentContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="170"
                  image={imgUrl}
                  alt="green iguana"
                />
                <CardContent >
                  <Box className={styles.gridCardContents}>
                  <Typography gutterBottom  component="div">
                    Lizard
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
              </CardActionArea>
            </Card>
          </Grid> }
          { gridValue > 0 && <Grid item xs={gridValue} className={styles.GridCardContainer} sx={{ml: 0, mb: 3}}>
            {/* item {index} */}
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="170"
                  image={imgUrl}
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
        </Grid>}
        </React.Fragment>
      ))}
    </Grid>
    </Box>
    </div>
  )
};
export default CompGridLayout;
