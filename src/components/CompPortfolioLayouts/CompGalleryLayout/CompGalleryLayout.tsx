import React, { FC, useEffect, useState } from 'react';
import styles from './CompGalleryLayout.module.scss';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import  {LayoutProps} from '../../../pages/Portfolio/Portfolio';
import  {useDataCustomHook} from '../../../Data/data';
import Link from '@mui/material/Link';
import Slide from '@mui/material/Slide';

interface CompGalleryLayoutProps {
  layout: LayoutProps;
  num?: number
}



const CompGalleryLayout: FC<CompGalleryLayoutProps> = ({layout, num}) => {
  
  const {projectPage: {projectList}} = useDataCustomHook();
  const [isHovered, setIsHovered] = useState<string|undefined>();
  const [isSlide, setIsSlide] = React.useState<{name: string, open: boolean}>({name: '', open: false});
  
  console.log(layout.name)
  
  return(
  <div className={styles.CompGalleryLayout} data-testid="CompGalleryLayout">


    {/* Gallery */}
    {layout.name === 'Gallery' && 
      <Grid container spacing={{ xs: 2, md: 3 }} >
            {projectList.map((item, i) => (
              <Grid item xs={12} sm={6} lg={4} key={item.img}>
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    height={254}
                  />
                  <ImageListItemBar
                    title={item.title}
                    sx={{
                      height: isSlide.name === item.title && isSlide.open ? '100%' : 'initial',
                      alignItems: isSlide.name === item.title && isSlide.open ? 'flex-start' : 'center'

                    }}
                    actionIcon={
                      <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                        onClick={() => setIsSlide({name:item.title, open: !isSlide.open})}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                  <Box sx={{
                    display: isSlide.name === item.title && isSlide.open ? 'block' : 'none',
                    position: 'absolute',
                    top: 0,
                    p: 1.5,
                    mt: 7,
                    height: '100%',
                    backgroundColor: 'rgba(30, 30, 40, 0.88)',
                  }}>
                  <Typography variant="body2" gutterBottom >
                    {item.description}
                  </Typography>
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%'
                    }}>
                      {item.links.map((link) => <Link 
                        href={link.path} key={link.path} 
                        target="_blank"
                        sx={{
                          textDecoration: 'none',
                          color: '#FFC107'
                        }}
                      >
                        {link.icon}
                      </Link>)}
                  </Box>
                  </Box>
                </ImageListItem>
              </Grid>
            ))}
      </Grid>
    }

    {/* Grid */}
    {layout.name === 'Grid' && 
      <Grid container spacing={{ xs: 2, md: 3 }} >
            {projectList.map((item, i) => (
              <Grid item xs={12} sm={6} lg={4} key={item.img} >
                <ImageListItem key={item.img} sx={{position:'relative'}} 
                onMouseEnter={() => setIsHovered(item.title)}
                onMouseLeave={() => setIsHovered('')}>
                  {isHovered === item.title && <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      height: '100%',
                      backgroundColor: 'rgba(30, 30, 40, 0.88)',
                      zIndex: 1,
                      color: 'inherit',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      p:1
                    }}  
                  >
                    <Typography variant="h6" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        {item.description}
                    </Typography>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%'
                      }}>
                        {item.links.map((link) => <Link 
                          href={link.path} key={link.path} 
                          target="_blank"
                          sx={{
                            textDecoration: 'none',
                            color: '#FFC107'
                          }}
                        >
                          {link.icon}
                        </Link>)}
                    </Box>
                  </Box>}
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              </Grid>
            ))}
      </Grid>   
    }

    {/* Column */}
    {layout.name === 'Column' && 
      <Grid container spacing={{ xs: 2, md: 3 }} >
            {projectList.map((item, i) => (
              <Grid item xs={12} sm={6} lg={4} key={item.img}>
                <ImageListItem key={item.img} sx={{position: 'relative'}}>
                  <Box sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <Box sx={{
                      textAlign: 'end',
                      mb: 2
                    }}>
                      <IconButton
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.54)',
                          textAlign: 'end' 
                        }}
                        aria-label={`info about ${item.title}`}
                        onClick={() => setIsSlide({name:item.title, open: !isSlide.open})}
                      >
                        <InfoIcon />
                      </IconButton>
                    </Box >
                    <Slide direction="left" in={isSlide.open && isSlide.name === item.title ? true : false} mountOnEnter unmountOnExit>
                      <Box sx={{
                        backgroundColor: 'rgba(30, 30, 40, 0.88)',
                        flexGrow: 1
                      }}>
                        <Typography variant="body2" gutterBottom sx={{
                          p: 1.5

                          }}>
                          {item.description}
                        </Typography>

                      </Box>
                    </Slide>
                  </Box>
                  
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={<Box sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      mt:1
                      }}>
                        {item.links.map((link) => <Link 
                          href={link.path} key={link.path} 
                          target="_blank"
                          sx={{
                            textDecoration: 'none',
                            color: '#FFC107'
                          }}
                        >
                          {link.icon}
                        </Link>)}
                    </Box>}
                    position="below"
                    
                  />

                  
                </ImageListItem>
              </Grid>
            ))}
      </Grid> 
    }

    {/* Thumbnail */} 
    {layout.name === 'Thumbnail' && 
      <Grid container spacing={{ xs: 2, md: 3 }} >
            {projectList.map((item, i) => (
              <Grid item xs={12} sm={6} lg={4} key={item.img}>
                <ImageListItem key={item.img}sx={{position: 'relative'}}>
                  <Box sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <Slide direction="down" in={isSlide.open && isSlide.name === item.title ? true : false} mountOnEnter unmountOnExit>
                      <Box sx={{
                        backgroundColor: 'rgba(30, 30, 40, 0.88)',
                        flexGrow: 1,
                        mt: 6
                      }}>
                        <Typography variant="body2" gutterBottom sx={{
                          p: 1.5

                          }}>
                          {item.description}
                        </Typography>
                        <Box sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      p: 1.5
                      }}>
                        {item.links.map((link) => <Link 
                          href={link.path} key={link.path} 
                          target="_blank"
                          sx={{
                            textDecoration: 'none',
                            color: '#FFC107'
                          }}
                        >
                          {link.icon}
                        </Link>)}
                    </Box>
                      </Box>

                      
                    </Slide>
                  </Box>
                  
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={item.title}
                position="top"
                actionIcon={
                  <IconButton
                  onClick={() => setIsSlide({name:item.title, open: !isSlide.open})}
                    sx={{ color: 'white' }}
                    aria-label={`star ${item.title}`}
                  >
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
              />
                </ImageListItem>
              </Grid>
            ))}
      </Grid> 
    }

    {/* Masonry */}
    {layout.name === 'Masonry' && 
      <Box sx={{ }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {projectList.map((item) => (
            <ImageListItem key={item.img}sx={{position:'relative'}} 
            onMouseEnter={() => setIsHovered(item.title)}
            onMouseLeave={() => setIsHovered('')}>
              {isHovered === item.title && <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  height: '100%',
                  backgroundColor: 'rgba(30, 30, 40, 0.88)',
                  zIndex: 1,
                  color: 'inherit',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  p:1
                }}  
              >
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%'
                  }}>
                    {item.links.map((link) => <Link 
                      href={link.path} key={link.path} 
                      target="_blank"
                      sx={{
                        textDecoration: 'none',
                        color: '#FFC107'
                      }}
                    >
                      {link.icon}
                    </Link>)}
                </Box>
              </Box>}
              
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    }




  </div>
)};

export default CompGalleryLayout;
